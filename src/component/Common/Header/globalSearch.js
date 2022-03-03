import { Fragment, useEffect, useState } from "react";
import { globalSearch } from "../../../service/globalSearch";
import { useHistory, useLocation } from "react-router-dom";
import SearchBox from "./searchBox";
import Pagination from "./pagination";
import responsData from "./searchData.json";
import Loader from "./loader";
import "../../../scss/common/header/globalSearch.scss";

const GlobalSearch = ({ location }) => {
  let history = useHistory();
  const routeLocation = useLocation();
  const [pagination, setPagination] = useState({});
  const [loader, setLoader] = useState(false);
  const [resData, setResData] = useState([]);
  const [inputVal,setInputVal] = useState('');
  const [urlDetail, setUrlDetail] = useState({
    url:
      "https://mc-83e6b29b-e17c-47b2-9118-426080-cm.azurewebsites.net/api/titlegeniuscomponents/GetSearchResults",
    keyword: "",
    pageSize: 10,
    totalCount: 1,
    showPagination: true,
    setOfStartResult: 1,
    setOfEndResult: 10,
    ShowSearchResults: true,
  });

  useEffect(() => {
    let keyword, page;
    let UrlSplit = location.search
      ? location.search.split("?")[1].split("&")
      : "";
    for (let i = 0; i < UrlSplit.length; i++) {
      if (UrlSplit[i].includes("keyword=")) {
        keyword = UrlSplit[i].split("keyword=")[1];
      } else if (UrlSplit[i].includes("page=")) {
        page = UrlSplit[i].split("page=")[1];
      }
    }
  
    setPagination({ ...pagination, CurrentPage: page });

    searchApiCall();
  }, [routeLocation.search]);


  const LoaderCall =(bool)=>{
    let bodyEle = document.querySelector('body')
    if(bool){
      bodyEle.style.overflow = 'hidden';
      setLoader(bool)
    }else{
      bodyEle.style.overflow = 'auto';
      setLoader(bool)
    }
  }

  const searchApiCall = () => {
    const { url, keyword } = urlDetail;

    let URL = `${url}?keyword=${keyword}`;
    LoaderCall(true)
    return globalSearch(URL)
      .then((res) => {
        LoaderCall(false)
        setResData(res.data.SearchResults);
        setUrlDetail({
          ...urlDetail,
          keyword: res.data.SearchKeyWord,
          showPagination: res.data.ShowPagination,
          totalCount: res.data.TotalCount,
          ShowSearchResults: res.data.ShowSearchResults,
        });
      })
      .catch((err) => {
        console.log(err);
        LoaderCall(false)
        setResData(responsData.SearchResults);
        setUrlDetail({
          ...urlDetail,
          keyword: responsData.SearchKeyWord,
          showPagination: responsData.ShowPagination,
          ShowSearchResults: responsData.ShowSearchResults,
        });
        setPagination(responsData.Pagination);
      });
  };

  const SubmitHandler = (e) => {
    const Ele = document.querySelector(".glob-searchbox-input");
    let keyword = Ele.value;
    e && e.preventDefault();
    history.push(`/search?keyword=${keyword}`);
  };

  const onChangeHandler = (e) => {
    setInputVal(e.target.value)
  };

  return (
    <Fragment>
      <section className="wrapper-title-body">
        {loader && <Loader />}
        <div className="title-globsearch-wrapper">
          <div className="glob-searchbox-wrapper">
            <h1 className="glob-searchbox-title">Search results</h1>
            <div className="glob-searchbox-container">
              <p className="globsearch-result-counter">
                {pagination.TotalItems &&
                  `${pagination.TotalItems} results for "${urlDetail.keyword}"`}
              </p>
              <SearchBox
                onChangeHandler={onChangeHandler}
                keywordVal={urlDetail.keyword}
                SubmitHandler={(e) => SubmitHandler(e)}
              />
            </div>
          </div>
          {urlDetail.ShowSearchResults && (
            <div className="glob-searchresult-wrapper">
              <hr className="result-content-breaker" />
              {resData.map((result, i) => {
                return <ResultCont data={result} />;
              })}
            </div>
          )}
          {urlDetail.showPagination &&
            urlDetail.ShowSearchResults &&
            pagination &&
            pagination.PageSize < pagination.TotalItems && (
              <div className="pagination-container">
                <Pagination
                  Pagination={pagination}
                  keyword={urlDetail.keyword}
                />
                {pagination.StartIndex &&
                  pagination.EndIndex &&
                  pagination.TotalItems && (
                    <div className="result-counter">
                      {`Displaying ${
                        pagination.StartIndex + 1
                          ? pagination.StartIndex + 1
                          : ""
                      } - ${
                        pagination.EndIndex + 1 ? pagination.EndIndex + 1 : ""
                      } of ${
                        pagination.TotalItems ? pagination.TotalItems : ""
                      } results`}
                    </div>
                  )}
              </div>
            )}
        </div>
      </section>
    </Fragment>
  );
};

const ResultCont = ({ data }) => {
  if (data) {
    return (
      <Fragment>
        {data.Title && (
          <a href={data.Title} className="glob-search-result-title">{data.Title}</a>
        )}
         <br/>
        {data.Description && (
          <p className="glob-search-result-desc">{data.Description}</p>
        )}
        <br/>
        {data.Path && data.Url && (
          <a className="glob-search-result-link" href={data.Url}>
            {data.Path}
          </a>
        )}
        <hr className="result-content-breaker" />
      </Fragment>
    );
  } else {
    return;
  }
};

export default GlobalSearch;

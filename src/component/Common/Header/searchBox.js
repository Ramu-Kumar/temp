import { Fragment, useEffect, useState } from "react";
import RightArrow from "../../../assets/static/icons/title/CarouselArrow-Right.svg";
import RightArrowActive from "../../../assets/static/icons/title/CarouselArrow-Right-Active.svg";
import SearchIcon from "../../../assets/static/icons/title/Faq-Search.svg";

const SearchBox = ({ SubmitHandler, keywordVal, onChangeHandler }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setKeyword(keywordVal);
  }, []);
  return (
    <Fragment>
      <div className="glob-searchbox">
        <form onSubmit={(e) => SubmitHandler(e)}>
          <input
            className="glob-searchbox-input"
            type="text"
            autoComplete="off"
            // onChange={(e) => onChangeHandler(e)}
            placeholder="Enter your search"
            defaultValue={keywordVal}
          />
        </form>
        <img className="glob-search-icon" src={SearchIcon} />

        {keywordVal ? (
          <img
            className="glob-rightarrow-icon"
            src={RightArrowActive}
            onClick={(e) => SubmitHandler(e)}
          />
        ) : (
          <img className="glob-rightarrow-icon" src={RightArrow} />
        )}
      </div>
    </Fragment>
  );
};

export default SearchBox;

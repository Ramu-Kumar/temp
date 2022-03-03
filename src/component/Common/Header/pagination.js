import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/static/icons/title/Arrow-Right-Bold.svg";
import "../../../scss/common/header/pagination.scss";

const Page = ({ Pagination, keyword }) => {
  const { Pages = [], StartPage, EndPage, CurrentPage } = Pagination;

  const checkActive = (currPage) => {
    return currPage === CurrentPage ? "pagination-active" : "";
  };

  return (
    <div className="page-nav-wrapper">
      {CurrentPage > StartPage && (
        <div className="page-nav-firstBtn">
          <Link to={`/search?keyword=${keyword}&page=${StartPage}`}>First</Link>
        </div>
      )}
      {CurrentPage > StartPage && (
        <div className="page-nav-left">
          <Link to={`/search?keyword=${keyword}&page=${CurrentPage - 1}`}>
            <img className="page-left-arrow" src={ArrowRight} />
          </Link>
        </div>
      )}

      {Pages.map((page) => {
        if (
          (page > StartPage || page === StartPage) &&
          (page < EndPage || page === EndPage)
        )
          return (
            <div className={`page-nav-btn ${checkActive(page)}`}>
              <Link to={`/search?keyword=${keyword}&page=${page}`}>{page}</Link>
            </div>
          );
      })}
      {CurrentPage < EndPage && (
        <div className={`page-nav-right `}>
          <Link to={`/search?keyword=${keyword}&page=${CurrentPage + 1}`}>
            <img src={ArrowRight} />
          </Link>
        </div>
      )}
      {CurrentPage < EndPage && (
        <div className="page-nav-lastBtn">
          <Link to={`/search?keyword=${keyword}&page=${EndPage}`}>Last</Link>
        </div>
      )}
    </div>
  );
};

export default Page;

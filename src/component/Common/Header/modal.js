import { Fragment, useState } from "react";
import RightArrow from "../../../assets/static/icons/title/CarouselArrow-Right.svg";
import RightArrowActive from "../../../assets/static/icons/title/CarouselArrow-Right-Active.svg";
import SearchIcon from "../../../assets/static/icons/title/Faq-Search.svg";
import "../../../scss/common/header/modal.scss";

const Modal = ({ setSearchStatus }) => {

  const [inputVal, setInputVal] = useState("");
  const SubmitHandler = (e) => {
    e && e.preventDefault();
    if (inputVal) {
      let searchEle = document.querySelector(".title-search-modal");
      let navBarEle = document.querySelector(".navbar-search");
      searchEle.classList.remove("show");
      navBarEle.classList.remove("show");
      window.location.href = `/search?keyword=${inputVal}`
      setSearchStatus(false);
    } else {
      return;
    }
  };
  return (
    <Fragment>
      <div className="title-search-modal">
        <h6 className="search-title">What can we help you find?</h6>
        <div className="global-search-container">
          <form onSubmit={(e) => SubmitHandler(e)}>
            <input
              className="global-search-input"
              type="text"
              autoComplete="off"
              placeholder="Enter your search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </form>
          <img className="search-icon" src={SearchIcon} />

          {inputVal ? (
            <img
              className="right-arrow-icon"
              src={RightArrowActive}
              onClick={(e) => SubmitHandler(e)}
            />
          ) : (
            <img className="right-arrow-icon" src={RightArrow} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;

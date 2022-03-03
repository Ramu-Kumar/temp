import { Fragment, useEffect, useState } from "react";
import { ScrollToCurrent } from "../Utils/utils";
import SearchIcon from "../../assets/static/icons/title/Faq-Search.svg";
import CloseIcon from "../../assets/static/icons/title/Close-Outline.svg";
import Arrow from "../../assets/static/icons/title/Arrow-Up.svg";
import ActiveArrow from "../../assets/static/icons/title/Arrow-Up-Color.svg";

const FaqSearch = ({ setSearchVal, count }) => {
  const [inputVal, setInputVal] = useState("");
  const [arrowStatus, setArrowStatus] = useState({ left: true, right: false });

  const searchHandler = (Node) => {
    let TextVal = Node ? Node.target.value : Node;
    setInputVal(TextVal);
    setSearchVal(TextVal);
  };

  const clearSelection = () => {
    searchHandler("");
    ScrollToCurrent(0);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let submitVal = e.target[0].value;
    setInputVal(submitVal);
    setSearchVal(submitVal);
  };

  useEffect(()=>{
    setArrowStatus({ left: true, right: false });
  },[inputVal])

  const upArrowClickHandler = () => {
    const matchArray = document.querySelectorAll(".faq-match");
    const headHeight =
      document.querySelector(".title-faq-header").clientHeight || 0;
    const navHeight = document.querySelector(".title-navbar").clientHeight || 0;

    for (let i = 0; i < matchArray.length; i++) {
      if (matchArray[i].classList.contains("highlighted")) {
        matchArray[i].classList.remove("highlighted");
        const scrollHeight =
          matchArray[i - 1].offsetTop - (navHeight + headHeight + 100);
        if (i === 1) {
          setArrowStatus({ left: true, right: false });
          ScrollToCurrent(scrollHeight);
          return (
            matchArray[i - 1] && matchArray[i - 1].classList.add("highlighted")
          );
        } else {
          setArrowStatus({ left: true, right: true });
          ScrollToCurrent(scrollHeight);
          return (
            matchArray[i - 1] && matchArray[i - 1].classList.add("highlighted")
          );
        }
      }
    }
  };

  const downArrowClickHandler = () => {
    const matchArray = document.querySelectorAll(".faq-match");
    const headHeight =
      document.querySelector(".title-faq-header").clientHeight || 0;
    const navHeight = document.querySelector(".title-navbar").clientHeight || 0;
    for (let i = 0; i < matchArray.length; i++) {
      if (matchArray[i].classList.contains("highlighted")) {
        matchArray[i].classList.remove("highlighted");
        const scrollHeight =
          matchArray[i + 1].offsetTop - (navHeight + headHeight + 100);

        if (i === matchArray.length - 2) {
          setArrowStatus({ left: false, right: true });
          ScrollToCurrent(scrollHeight);
          return (
            matchArray[i + 1] && matchArray[i + 1].classList.add("highlighted")
          );
        } else {
          setArrowStatus({ left: true, right: true });
          ScrollToCurrent(scrollHeight);
          return (
            matchArray[i + 1] && matchArray[i + 1].classList.add("highlighted")
          );
        }
      }
    }
  };

  return (
    <Fragment>
      <div className="faq-searchbox-wrapper">
        <div className="faq-searchbox-container">
          <form className="faq-searchbox-form" onSubmit={submitHandler}>
            <div className="faq-searchbox">
              <input
                type="text"
                className="faq-search-input"
                value={inputVal}
                onChange={(e) => searchHandler(e)}
                placeholder="Search for a question or answer"
                id="search"
                autoComplete="off"
              />
              {inputVal.length > 0 ? (
                <img
                  className="faq-search-icon"
                  src={CloseIcon}
                  onClick={clearSelection}
                  alt="Clear Icon"
                />
              ) : (
                <img
                  className="faq-search-icon"
                  src={SearchIcon}
                  alt="Search Icon"
                />
              )}
            </div>
          </form>
          {inputVal && (
            <div className="faq-search-counter">{count} matches found</div>
          )}
        </div>
        <div className="faq-search-arrow-container">
          <img
            className="faq-search-left-icon"
            onClick={() =>
              arrowStatus.left && count > 1 ? downArrowClickHandler() : null
            }
            src={arrowStatus.left && count > 1 ? ActiveArrow : Arrow}
          />
          <img
            className="faq-search-right-icon"
            onClick={() => (arrowStatus.right ? upArrowClickHandler() : null)}
            src={arrowStatus.right ? ActiveArrow : Arrow}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default FaqSearch;

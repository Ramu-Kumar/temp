import React, { useEffect, useState } from "react";
import "../../scss/_title_policyText.scss";
import UpArrow from "../../assets/static/images/title/upArrow.svg";

const onScroll = ()=>{
  let bodyEle = document.getElementById("title-start");
  let sticky = document.getElementById("stickyBtn");
  let stickyBtn = document.getElementById("stickyBtnContact");
  let ResetArrow = document.getElementById("reset-arrow");

  let clientHeight = bodyEle ? bodyEle.clientHeight : "";
  let ScreanY = window.scrollY || document.documentElement.scrollTop;
  
  if (clientHeight && sticky && stickyBtn) {
    if (clientHeight - window.innerHeight < ScreanY ) {
      sticky.style.position = "absolute";
      stickyBtn.style.visibility = "hidden";
      sticky.style.bottom = "80px";
    } else {
      sticky.style.position = "fixed";
      stickyBtn.style.visibility = "visible";
      sticky.style.bottom = "50%";
    }
  }

  if (clientHeight && ResetArrow) {
    if (clientHeight - window.innerHeight < ScreanY) {
      ResetArrow.style.position = "absolute";
      ResetArrow.style.bottom = "40px";
    } else {
      ResetArrow.style.position = "fixed";
      ResetArrow.style.bottom = "40px";
    }
  }

}

const StickyButton = ({ Arrow }) => {
  useEffect(() => {
    window.addEventListener("scroll", () =>onScroll());

    return (()=>{
      window.removeEventListener("scroll", () =>onScroll());
    })
  }, []);
  return (
    <React.Fragment>
      <div id="stickyBtn">
        <a
          aria-label="contact us sticky"
          href="/contactUs"
          className="btn-sticky btn-nav-outline"
          id="stickyBtnContact"
        >
          <span className="btn-inner-contact">Contact Us</span>
          <span className="btn-inner">?</span>
        </a>
      </div>
      {Arrow && (
        <div className="reset-arrow" id="reset-arrow">
          <a
            href="#title-start"
            aria-label="Upper Arrow to reset window position"
          >
            <img src={UpArrow} alt="Up Arrow" />
          </a>
        </div>
      )}
    </React.Fragment>
  );
};

export default StickyButton;

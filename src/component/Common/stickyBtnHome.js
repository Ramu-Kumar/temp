import React, { useEffect, useState } from "react";
import "../../scss/_title_policyText.scss";

const StickyButton = ({  }) => {
  const [viewBtn , setViewBtn] = useState(false)

  const onScroll = () =>{
    let bodyEle = document.getElementById("title-start");
    let sticky = document.getElementById("stickyBtnHome");
    let stickyBtn = document.getElementById("stickyBtnContactHome");
    let HeroStart = document.querySelector(`#title-home-hero`)
   
    let HeroStartClientHeight = HeroStart ? HeroStart.clientHeight || bodyEle.clientHeight : 0
    let clientHeight = bodyEle ? bodyEle.clientHeight : "";
    let ScreanY = window.scrollY || document.documentElement.scrollTop;

    setViewBtn(true)
    
    if (clientHeight && sticky && stickyBtn) {
      if (clientHeight - window.innerHeight < ScreanY || ScreanY <HeroStartClientHeight ) {
        sticky.style.position = "absolute";
        stickyBtn.style.visibility = "hidden";
        sticky.style.bottom = "80px";
      } else {
        sticky.style.position = "fixed";
        stickyBtn.style.visibility = "visible";
        sticky.style.bottom = "50%";
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () =>onScroll());

    return(()=>{
      window.removeEventListener("scroll", () =>onScroll())
    })
  }, []);
  return (
    <React.Fragment>
      {viewBtn && (<div id="stickyBtnHome">
        <a
          aria-label="contact us sticky"
          href="/contactUs"
          className="btn-sticky-home btn-nav-outline"
          id="stickyBtnContactHome"
        >
          <span className="btn-inner-contact-home">Contact Us</span>
          <span className="btn-inner-home">?</span>
        </a>
      </div>)}
    </React.Fragment>
  );
};

export default StickyButton;

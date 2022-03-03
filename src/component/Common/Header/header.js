import { Fragment, useState } from "react";
import { DropDown, DropDown_ShortScreen } from "./dropdown";
import Modal from "./modal";
import Titlegenius_logo from "../../../assets/static/images/title/Titlegenius-Tagline-Logo.svg";
import MenuIcon from "../../../assets/static/icons/title/Menu.svg";
import closeIcon from "../../../assets/static/icons/close-custom.svg";
import SearchIcon from "../../../assets/static/icons/title/Search.svg";
import UserIcon from "../../../assets/static/icons/title/User.svg";

import "../../../scss/common/header/header.scss";

const drop = {
  learn: {
    id: 1,
    label: "Title101",
    key: "Title101",
    link: [
      {
        id: 1,
        url: "elp1",
        link: "Title Insurance: What it is and How it Can Help You Save",
      },
      {
        id: 2,
        url: "elp2",
        link: "Title Insurance & Closing Costs :how they work togather",
      },
      {
        id: 3,
        url: "elp3",
        link: "Did you know there are different kinds of Title Insurance",
      },
    ],
  },
  state: {
    id: 2,
    label: "States",
    key: "states",
    link: [
      {
        id: 1,
        url: "florida",
        link: "Florida",
      },
    ],
  },
};

const Header = () => {
  const [dropLearn, SetDropLearn] = useState(false);
  const [dropState, SetDropState] = useState(false);
  const [menuBar, SetMenuBar] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);

  const dropdownHandler_learn = () => {
    var element = document.getElementById("dropdownTitle101-cont");
    if (element.style.display === "none" || !element.style.display) {
      element.style.display = "block";
      SetDropLearn(true);
    } else {
      element.style.display = "none";
      SetDropLearn(false);
    }
  };
  const dropdownHandler_state = () => {
    var element = document.getElementById("dropdownStates-cont");
    if (element.style.display === "none" || !element.style.display) {
      element.style.display = "block";
      SetDropState(true);
    } else {
      element.style.display = "none";
      SetDropState(false);
    }
  };
  const toggleHandler = () => {
    SetMenuBar(!menuBar);
  };

  const showSearchModal = () => {
    let searchEle = document.querySelector(".title-search-modal");
    let navBarEle = document.querySelector(".navbar-search");
    searchEle.classList.toggle("show");
    navBarEle.classList.toggle("show");
    setSearchStatus(!searchStatus)
  };

  return (
    <Fragment>
      <nav className="base-margin title-navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-logo-content">
          <img
            className="navbar-menu"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Menu Bar Button"
            onClick={toggleHandler}
            src={menuBar ? closeIcon : MenuIcon}
            alt="Menubar Icon"
          />
          <div
            className="navbar-title-brand"
            aria-label="Titlegenius logo"
            onClick={()=>window.location.href = '/'}
          >
            <img src={Titlegenius_logo} alt="Titlegenius logo" />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="title-sidebar responsive" id="myTopnav">
            <DropDown_ShortScreen
              data={drop.learn}
              bool={dropLearn}
              handler={dropdownHandler_learn}
            />
            <DropDown_ShortScreen
              data={drop.state}
              bool={dropState}
              handler={dropdownHandler_state}
            />
            <a
              className="collapse-link base-margin"
              href="/faqs"
              aria-label="Frequently Asked Questions"
            >
              FAQs
            </a>
            <a
              className="collapse-link base-margin"
              href="/aboutUs"
              aria-label="About US"
            >
              About Us
            </a>
            <div className="base-margin btn-container">
              <a
                href="/getQuote"
                className="btn-custom btn-title-prime"
                aria-label="Get Quote button"
              >
                Get a Quote
              </a>
              <div className="navbar-user-profile">
                <a className="collapse-label" href="#" aria-label="login">
                  Login
                </a>
                <img src={UserIcon} alt="User Icon" />
              </div>
            </div>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <DropDown data={drop.learn} />
            </li>
            <li className="nav-item dropdown">
              <DropDown data={drop.state} />
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/faqs"
                aria-label="Frequently Asked Questions"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus" aria-label="About Us">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right-content">
          <div className="navbar-search" onClick={showSearchModal}>
            <div className="collapse-label search-cont" aria-label="search">
              Search
            </div>
            {searchStatus ? (
              <img className="search-cross-icon" src={closeIcon} alt="Close Icon" onChange={showSearchModal}/>
            ) : (
              <img src={SearchIcon} alt="Search Icon" />
            )}
          </div>
          <div className="navbar-user-profile">
            <div className="collapse-label user-pofile-cont" aria-label="login">
              Login
            </div>
            <img src={UserIcon} alt="User Icon" />
          </div>
          <a
            href="#"
            className="btn-quote btn-title-prime"
            aria-label="Get Quote"
          >
            Get Quote
          </a>
        </div>
      </nav>
      <Modal setSearchStatus={()=>setSearchStatus(false)}/>
    </Fragment>
  );
};
export default Header;

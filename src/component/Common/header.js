import React, { useState } from "react";
import Titlegenius_logo from "../../assets/static/images/title/Titlegenius-Tagline-Logo.svg";
import MenuIcon from "../../assets/static/icons/title/Menu.svg";
import closeIcon from "../../assets/static/icons/close-custom.svg";
import SearchIcon from "../../assets/static/icons/title/Search.svg";
import UserIcon from "../../assets/static/icons/title/User.svg";
import DownArrow from "../../assets/static/icons/arrow-down-custom.svg";
import UpArrow from "../../assets/static/icons/arrow-up-custom.svg";
import "../../scss/_title_header.scss";

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

const DropDown = ({ data }) => {
  const { label, key, link } = data;
  return (
    <React.Fragment>
      <div
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="button Learn"
      >
        <span>{label}</span>
        <img
          className={`arrow-icon-${key}`}
          src={DownArrow}
          alt="Expend dropdown"
        />
      </div>

      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {link.map((link, key) => {
          return (
            <a
              key={key}
              className="dropdown-item"
              href={`/${link.url}`}
              aria-label={`link${link.id}`}
            >
              {link.link}
            </a>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const DropDown_ShortScreen = ({ data, handler, bool }) => {
  const { label, key, link } = data;
  return (
    <React.Fragment>
      <div className="title-dropdown">
        <button
          aria-label={`dropdown ${key}`}
          className="dropbtn base-margin"
          id={`dropdown${label}`}
          onClick={handler}
        >
          <span>{label}</span>
          <img src={bool ? UpArrow : DownArrow} alt="Extend dropdown" />
        </button>
        <div className="dropdown-content" id={`dropdown${label}-cont`}>
          {link.map((link, key) => {
            return (
              <a
                key={key}
                className="base-margin"
                href={`/${link.url}`}
                aria-label={`link ${link.id}`}
              >
                {link.link}
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const Header = () => {
  const [dropLearn, SetDropLearn] = useState(false);
  const [dropState, SetDropState] = useState(false);
  const [menuBar, SetMenuBar] = useState(false);

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

  return (
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
        <a
          className="navbar-title-brand"
          aria-label="Titlegenius logo"
          href="/"
        >
          <img src={Titlegenius_logo} alt="Titlegenius logo" />
        </a>
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
        <div className="navbar-search">
          <a className="collapse-label" href="#" aria-label="search">
            Search
          </a>
          <a>
            <img src={SearchIcon} alt="Search Icon" />
          </a>
        </div>
        <div className="navbar-user-profile">
          <a className="collapse-label" href="#" aria-label="login">
            Login
          </a>
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
  );
};
export default Header;

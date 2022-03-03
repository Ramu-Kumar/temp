import {Fragment} from "react";
import DownArrow from "../../../assets/static/icons/arrow-down-custom.svg";
import UpArrow from "../../../assets/static/icons/arrow-up-custom.svg";


export const DropDown = ({ data }) => {
    const { label, key, link } = data;
    return (
      <Fragment>
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
      </Fragment>
    );
  };
  
  export const DropDown_ShortScreen = ({ data, handler, bool }) => {
    const { label, key, link } = data;
    return (
      <Fragment>
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
      </Fragment>
    );
  };

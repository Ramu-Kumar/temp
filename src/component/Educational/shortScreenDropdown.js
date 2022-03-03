import React, { useState } from "react";
import UpArrow from "../../assets/static/icons/title/Arrow-Up.svg";
import UpArrowWithColor from "../../assets/static/icons/title/Arrow-Up-Color.svg";

const DropdownShortScreen = ({ link }) => {
  const [activeList, setActive] = useState(0);

  const selectPrevious = () => {
    if (activeList > 1) {
      const id = `trigger${activeList - 1}`;
      const elem = document.getElementById(id);
      if (elem) elem.click();
      setActive(activeList - 1);
    }
  };

  const selectNext = () => {
    let sectionCount = link.Section.length || 6;
    if (activeList < sectionCount) {
      const id = `trigger${activeList + 1}`;
      const elem = document.getElementById(id);
      if (elem) elem.click();
      setActive(activeList + 1);
    }
  };

  const selectIcon = (value, next) => {
    if (next > 0 && value < link.Section.length) {
      return UpArrowWithColor;
    } else if (next < 0 && value > 1) {
      return UpArrowWithColor;
    } else {
      return UpArrow;
    }
  };
  return (
    <React.Fragment>
      <div onClick={() => selectNext()}>
        <img
          className="rightrail-leftArrow"
          src={selectIcon(activeList, 1)}
          alt="down arrow"
        />
      </div>
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
        <span>{link.Navigation_title}</span>
      </div>

      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {link.Section.map((link, index) => {
          return (
            <a
              onClick={() => setActive(index + 1)}
              key={index}
              className="dropdown-item"
              href={`#content${index + 1}`}
              aria-label={`link`}
            >
              {link.Title}
            </a>
          );
        })}
      </div>
      <div onClick={() => selectPrevious()}>
        <img
          className="rightrail-rightArrow"
          src={selectIcon(activeList, -1)}
          alt="up arrow"
        />
      </div>
    </React.Fragment>
  );
};

export default DropdownShortScreen;

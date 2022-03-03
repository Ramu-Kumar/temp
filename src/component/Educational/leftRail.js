import React, { useEffect, useState } from "react";
import UpArrow from "../../assets/static/icons/title/Arrow-Up.svg";
import UpArrowWithColor from "../../assets/static/icons/title/Arrow-Up-Color.svg";

const LeftRailCard = ({ RailData }) => {
  const [activeList, setActive] = useState(0);
  const [topIndex, setTopIndex] = useState(0);

  const checkActive = (value) => {
    return value === activeList ? "active" : "";
  };

  const selectPrevious = () => {
    if (activeList > 1) {
      const id = `trigger${activeList - 1}`;
      const elem = document.getElementById(id);
      if (elem) elem.click();
      setActive(activeList - 1);
    }
  };

  const selectNext = () => {
    let sectionCount = RailData.Section.length || 6;
    if (activeList < sectionCount) {
      const id = `trigger${activeList + 1}`;
      const elem = document.getElementById(id);
      if (elem) elem.click();
      setActive(activeList + 1);
    }
  };

  const selectIcon = (value, next) => {
    if (next > 0 && value < RailData.Section.length) {
      return UpArrowWithColor;
    } else if (next < 0 && value > 1) {
      return UpArrowWithColor;
    } else {
      return UpArrow;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let length = RailData.Section.length;
      for (let index = 1; index < length + 1; index++) {
        let staticMousePosition = document.getElementById(`content${index}`);
        if (
          staticMousePosition.getBoundingClientRect().top < 100 &&
          topIndex !== index
        ) {
          setTopIndex(index);
          setActive(index);
        }
      }
    });
  }, []);

  return (
    <React.Fragment>
      <section className="right-rail-card">
        <h6>{RailData.Navigation_title}</h6>
        <ul>
          {RailData.Section.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setActive(index + 1)}
                className={checkActive(index + 1)}
              >
                <a id={`trigger${index + 1}`} href={`#content${index + 1}`}>
                  {item.Title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="rightrail-arrows">
          <div onClick={() => selectNext()}>
            <img
              className="rightrail-leftArrow"
              src={selectIcon(activeList, 1)}
              alt="Down arrow"
            />
          </div>

          <div onClick={() => selectPrevious()}>
            <img
              className="rightrail-rightArrow"
              src={selectIcon(activeList, -1)}
              alt="Up arrow"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LeftRailCard;

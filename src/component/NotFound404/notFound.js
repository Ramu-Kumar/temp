import React from "react";

import "./../../scss/not_found_404/notFound.scss";

import sectionAImage from "./../../assets/static/images/title/notFoundSectionA.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="wrapper-title-body" id="start">
      <div className="not-found-container">
        <div className="section-a-container">
          <div className="child-a">
            The page you were looking for doesn’t exist
          </div>
          <div className="child-b">But you always can go to the <Link to="/">  home page</Link></div>
          <div className="child-c">
            <div className="cc-img-container">
              <img src={sectionAImage} className="cc-img" alt="Not found" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

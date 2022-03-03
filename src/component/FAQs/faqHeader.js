import React from "react";
import FaqSearch from './faqSearch'

const FAQHeader = ({ setSearchVal, Data,count}) => {

  return (
    <React.Fragment>
      <div className={`title-faq-header ${count > 0 && "seachView"}`}>
        <h1>{Data.Header}</h1>
        <FaqSearch setSearchVal={setSearchVal} count={count}/>
        <div>
          <p className="title-faq-description">Or browse by topic:</p>
          <ul className="faq-navlink-container">
            {Data.Section.map((item, index) => {
              return (
                <li className="faq-navlink" key={index}>
                  <a href={`#section${index}`} aria-label={item.Title}>
                    {item.Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FAQHeader;

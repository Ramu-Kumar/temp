import React from "react";

const FAQContainer = ({ Data }) => {
  return (
    <React.Fragment>
      <div className="title-faqs-richText">
        {Data.Section.map((section, id) => {
          return (
            <div
              className="faqs-section-container"
              key={id}
              id={`section${id}`}
            >
              <h4 dangerouslySetInnerHTML={{ __html: section.Title }}></h4>
              <div className="faqs-section">
                {section.RichTextData.map((item, index) => {
                  return <FAQRichText Data={item} key={index} id={index} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const FAQRichText = ({ Data, id }) => {
  return (
    <React.Fragment>
      <div id={`qa${id}`}>
        <h6 dangerouslySetInnerHTML={{ __html: Data.Question }}></h6>
        {Data.Answer.map((text, i) => {
          return (
            <p
              className="faq-answer"
              key={i}
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FAQContainer;

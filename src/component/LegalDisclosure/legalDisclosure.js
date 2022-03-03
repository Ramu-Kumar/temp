import React from "react";
import legalDisclosureData from "../Utils/legalDiscloreData";
import { brandReplace } from "../Utils/utils";
import StickyButtons from "../Common/stickyButtons";

const ParagraphWithHead = ({ data }) => {
  let StrFirst = brandReplace(data.text);
  let StrSecond = StrFirst.replace(
    "http://www.tdi.texas.gov/title/titlerates2013.html",
    "<a href='#''>http://www.tdi.texas.gov/title/titlerates2013.html</a>"
  );
  let UpdatedItem = StrSecond.replace(
    "http://www.tdi.texas.gov/title/titlemm3.html",
    "<a href='#'>http://www.tdi.texas.gov/title/titlemm3.html</a>"
  );

  return (
    <p className="rich-text-bold">
      <b>{data.head}</b>
      <span dangerouslySetInnerHTML={{ __html: UpdatedItem }}></span>
    </p>
  );
};

const Paragraph = ({ data }) => {
  let UpdatedItem = brandReplace(data.text);
  return (
    <p
      className="rich-text-bold"
      dangerouslySetInnerHTML={{ __html: UpdatedItem }}
    ></p>
  );
};

const Heading = ({ Title }) => {
  let UpdatedItem = brandReplace(Title);
  return (
    <h3
      className="legal-text-title"
      dangerouslySetInnerHTML={{ __html: UpdatedItem }}
    ></h3>
  );
};

const LegalDisclosure = () => {
  const NodeElement = (data) => {
    switch (data.type) {
      case "paragraphWithHead":
        return <ParagraphWithHead data={data} />;
      case "paragraph":
        return <Paragraph data={data} />;
      default:
        return;
    }
  };
  console.log(legalDisclosureData);
  return (
    <section className="wrapper-title-body" id="title-start">
      <StickyButtons Arrow />
      <h1 className="consumer-policy-title">{legalDisclosureData.title}</h1>
      <div className="consumer-policy-text">
        <Heading Title={legalDisclosureData.head} />
        {legalDisclosureData.data.map((element) => {
          return NodeElement(element);
        })}
      </div>
    </section>
  );
};

export default LegalDisclosure;

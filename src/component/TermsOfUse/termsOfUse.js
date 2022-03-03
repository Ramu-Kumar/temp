import React, { useEffect } from "react";
import textObj from "../Utils/termsOfUseData";
import "../../scss/_title_policyText.scss";
import { brandReplace } from "../Utils/utils";
import StickyButtons from "../Common/stickyButtons";

const ParagraphWithHead = ({ data }) => {
  let UpdatedItem = brandReplace(data.text);

  return (
    <p className="rich-text-normal">
      <b>{data.head}</b>
      <span dangerouslySetInnerHTML={{ __html: UpdatedItem }}></span>
    </p>
  );
};

const Paragraph = ({ data }) => {
  let UpdatedItem = brandReplace(data.text);
  return (
    <p
      className="rich-text-normal"
      dangerouslySetInnerHTML={{ __html: UpdatedItem }}
    ></p>
  );
};

const List = ({ data }) => {
  return (
    <ul>
      {data.text.map((item, index) => {
        let UpdatedItem = brandReplace(item);
        return (
          <li className="rich-text-normal" key={index}>
            <span dangerouslySetInnerHTML={{ __html: UpdatedItem }}></span>
          </li>
        );
      })}
    </ul>
  );
};

const Address = ({ data }) => {
  return (
    <address>
      {data.text.map((item, index) => {
        return (
          <p className="rich-text-normal" key={index}>
            {item}
          </p>
        );
      })}
    </address>
  );
};

const TellNumber = ({ data }) => {
  return <p className="rich-text-number">{data.text}</p>;
};

const RichText = () => {
  const NodeElement = (data) => {
    switch (data.type) {
      case "paragraphWithHead":
        return <ParagraphWithHead data={data} />;
      case "list":
        return <List data={data} />;
      case "paragraph":
        return <Paragraph data={data} />;
      case "address":
        return <Address data={data} />;
      case "tellNumber":
        return <TellNumber data={data} />;
      default:
        return;
    }
  };
  return (
    <React.Fragment>
      {textObj.map((item, i) => {
        return (
          <div key={i}>
            <h6 className="rich-text-title" id={item.id}>
              {item.title}
            </h6>
            {item.data.map((element) => {
              return NodeElement(element);
            })}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const TermsOfUse = () => {
  useEffect(() => {
    window.addEventListener("hashchange", function () {
      let ScreenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let ScreanX = window.scrollX || document.documentElement.scrollLeft;
      let ScreanY = window.scrollY || document.documentElement.scrollTop;
      if (ScreenWidth < 768) {
        window.scrollTo(ScreanX, ScreanY - 70);
      } else {
        window.scrollTo(ScreanX, ScreanY - 100);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <section className="wrapper-title-body" id="title-start">
        <StickyButtons Arrow />
        <div className="termsOfUse-header">
          <h1>Terms Of Use</h1>
          <p className="terms-description desc-margin">
            PLEASE READ THE FOLLOWING TERMS OF USE CAREFULLY RELATING TO YOUR
            USE OF THE RADIANTITLEDIRECT.COM WEBSITE AND OTHER INTERNET WEBSITES
            OPERATED AND CONTROLLED BY RADIAN GROUP INC. AND ITS AFFILIATED
            COMPANIES (COLLECTIVELY, THE SITES”). THESE TERMS OF SERVICE GOVERN
            YOUR USE OF THE SITES AND SERVICES ACCESSED THROUGH THE SITES
            (“SERVICES”).
          </p>
          <p className="terms-description">Covered topics:</p>
          <ul className="termsOfUse-navlink terms-link">
            <li className="terms-link">
              <a
                href="#acceptance_terms_service"
                aria-label="Acceptance of Terms of Service"
              >
                Acceptance of Terms of Service
              </a>
            </li>
            <li className="terms-link">
              <a href="#proprietary_rights" aria-label="Proprietary Rights">
                Proprietary Rights
              </a>
            </li>
            <li className="terms-link">
              <a href="#general" aria-label="General">
                General
              </a>
            </li>
            <li className="terms-link">
              <a href="#use_services" aria-label="Use of the Services">
                Use of the Services
              </a>
            </li>
            <li className="terms-link">
              <a
                href="#digital_millennium"
                aria-label="Digital Millennium Copyright Act (“DCMA”) Notice"
              >
                Digital Millennium Copyright Act (“DCMA”) Notice
              </a>
            </li>
            <li className="terms-link" aria-label="User Submissions">
              <a href="#user_submissions">User Submissions</a>
            </li>
            <li className="terms-link">
              <a href="#legal_notices" aria-label="Legal Notices">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>
        <div className="consumer-policy-text termsOfuse-text">
          <RichText />
        </div>
      </section>
    </React.Fragment>
  );
};

export default TermsOfUse;

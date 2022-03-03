import React, { useEffect } from "react";
import { ElpData } from "../Utils/elpData";
import ElpHeroHome from "./elpHero";
import DropdownShortScreen from "./shortScreenDropdown";
import CardComponent from "./elpCard";
import LeftRailCard from "./leftRail";
import NotFound404 from "../NotFound404/notFound";
import "../../scss/_title_educational.scss";

const Paragraph = ({ data }) => {
  return <p className="elp-text-normal">{data.Text}</p>;
};

const Head4 = ({ data }) => {
  return <h4 className="elp-text-h4">{data.Text}</h4>;
};

const Head6 = ({ data }) => {
  return <h6 className="elp-text-h6">{data.Text}</h6>;
};

const List = ({ data }) => {
  return (
    <ul>
      {data.Text.map((item, index) => {
        return (
          <li className="elp-text-normal" key={index}>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

const ListWithTitle = ({ data }) => {
  return (
    <ul>
      {data.Text.map((content, index) => {
        return (
          <li className="elp-text-normal" key={index}>
            <span>
              <b>{content.Title}</b>
              {content.Description}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const EducationalRichText = ({ RichTextData }) => {
  const NodeElement = (data, index) => {
    switch (data.Type) {
      case "list":
        return <List key={index} data={data} />;
      case "listWithTitle":
        return <ListWithTitle key={index} data={data} />;
      case "paragraph":
        return <Paragraph key={index} data={data} />;
      case "h6":
        return <Head6 key={index} data={data} />;
      case "h4":
        return <Head4 key={index} data={data} />;
      default:
        return;
    }
  };

  return (
    <React.Fragment>
      <div className="rightRail-shortscreen">
        <DropdownShortScreen link={RichTextData} />
      </div>
      {RichTextData.Description
        ? RichTextData.Description.map((item, index) => {
            return <Paragraph data={item} key={index} />;
          })
        : ""}
      {RichTextData.Section.map((item, i) => {
        return (
          <div className="rich-text-content" key={i}>
            <h6 className="elp-heading" id={`content${i + 1}`}>
              {item.Title}
            </h6>
            {item.RichText.map((element, i) => {
              return NodeElement(element, i);
            })}
            {item.CTA && (
              <a className="btn-elp btn-nav-outline" href={`/${item.CTA}`}>
                {item.CTA}
              </a>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

const EducationalRail = () => {
  const CurrentPageData = ElpData.filter((field) => {
    return window.location.pathname === field.Pathname;
  })[0];
  useEffect(() => {
    window.addEventListener("hashchange", function () {
      let ScreenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let ScreanX = window.scrollX || document.documentElement.scrollLeft;
      let ScreanY = window.scrollY || document.documentElement.scrollTop;

      if (ScreenWidth < 992 && ScreenWidth > 767) {
        window.scrollTo(ScreanX, ScreanY - 140);
      } else if (ScreenWidth < 768) {
        window.scrollTo(ScreanX, ScreanY - 120);
      } else {
        window.scrollTo(ScreanX, ScreanY - 90);
      }
    });

    window.addEventListener("load", function () {
      let ScreenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let ScreanX = window.scrollX || document.documentElement.scrollLeft;
      let ScreanY = window.scrollY || document.documentElement.scrollTop;

      let hashDirect = window.location.hash.includes("#content");
      if (ScreenWidth < 992 && ScreenWidth > 767 && hashDirect) {
        window.scrollTo(ScreanX, ScreanY - 140);
      } else if (ScreenWidth < 768 && hashDirect) {
        window.scrollTo(ScreanX, ScreanY - 120);
      } else if (hashDirect) {
        window.scrollTo(ScreanX, ScreanY - 90);
      } else {
        window.scrollTo(ScreanX, ScreanY);
      }
    });
  }, []);

  if (CurrentPageData) {
    return (
      <React.Fragment>
        <section className="wrapper-title-body" id="title-start">
          <ElpHeroHome Data={CurrentPageData} />
          <div className="wrapper-rail">
            <div className="left-rail">
              <EducationalRichText RichTextData={CurrentPageData} />
            </div>
            <div className="right-rail">
              <LeftRailCard RailData={CurrentPageData} />
            </div>
          </div>
          <CardComponent CardData={CurrentPageData.Card} />
        </section>
      </React.Fragment>
    );
  } else {
    return (
      <section className="wrapper-title-body">
        <NotFound404 />
      </section>
    );
  }
};

export default EducationalRail;

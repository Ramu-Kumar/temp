import { Fragment, useEffect, useState } from "react";
import FAQData from "./faqData";
import StickyButtons from "../Common/stickyButtons";
import FAQHeader from "./faqHeader";
import { ScrollToCurrent } from "../Utils/utils";
import FAQRichText from "./faqRichText";
import "../../scss/faq/faqSearch.scss";
import "../../scss/faq/faqPage.scss";

const FAQPage = () => {
  const [faqData, setFaqData] = useState(FAQData);
  const [count, setCount] = useState(0);

  const onHashChange = () => {
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
  };

  const updateSearch = (val) => {
    let Data = { ...FAQData };

    const newData = Data.Section.map((item) => {
      if (val) {
        // val.replace('`', "'");
        let word = new RegExp(val, "gi");

        let HeaderSearch = item.Title.replace(
          word,
          (match) => `<mark class="faq-match">${match}</mark>`
        );

        let RichTextSearch = item.RichTextData.map((map) => {
          let QuestionSearch = map.Question.replace(
            word,
            (match) => `<mark class="faq-match">${match}</mark>`
          );
          let AnswerSearch = map.Answer.map((quest) => {
            console.log(quest)
            return quest.replace(
              word,
              (match) => `<mark class="faq-match">${match}</mark>`
            );
          });

          return {
            ...map,
            Question: QuestionSearch,
            Answer: AnswerSearch,
          };
        });

        return {
          ...item,
          Title: HeaderSearch,
          RichTextData: RichTextSearch,
        };
      } else {
        return {
          ...item,
        };
      }
    });
    Data.Section = newData;
    setFaqData(Data);
  };

  useEffect(() => {
    let matchArray = document.querySelectorAll(".faq-match");
    const headHeight = document.querySelector(".title-faq-header").clientHeight|| 0;
    const navHeight = document.querySelector(".title-navbar").clientHeight|| 0;
    let matLength = matchArray.length;
    if (matLength > 0) {
      const scrollHeight =
        matchArray[0].offsetTop - (navHeight + headHeight + 100);
      matchArray[0].classList.add("highlighted");
      ScrollToCurrent(scrollHeight);
    }else{
      ScrollToCurrent(0)
    }
    setCount(matLength);
  });

  useEffect(() => {
    window.addEventListener("hashchange", () => onHashChange());
    return () => {
      window.addEventListener("hashchange", () => onHashChange());
    };
  }, []);

  return (
    <Fragment>
      <section className="wrapper-title-body" id="title-start">
        <StickyButtons Arrow />
        <div className={`faq-page-wrapper ${count && "seachView"}`}>
          <FAQHeader
            count={count}
            setSearchVal={(val) => updateSearch(val)}
            Data={FAQData}
          />
          <FAQRichText Data={faqData} />
        </div>
      </section>
    </Fragment>
  );
};

export default FAQPage;

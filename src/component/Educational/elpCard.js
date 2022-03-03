import React, { useState, useEffect } from "react";
import Cards from "../Common/titleCard";
import MarketoForm from "./MarketoForm";
import NewsLetter from "../../assets/static/images/title/ELP-Newsletter.svg";

const CardComponent = ({ CardData }) => {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const subscrbeButton = document.querySelector(".mktoButton");
      if (subscrbeButton) {
        console.dir(subscrbeButton);
        subscrbeButton.addEventListener("click", () => {
          function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
          }
          const formValue = document.querySelector("#Email").value;
          if (formValue && validateEmail(formValue)) {
            setMessage(true);
          } else {
            return;
          }
        });
      }
    }, 5000);
  }, []);
  return (
    <section className="elp-module-3">
      <h5 className="elp-card-title">
        Everything you need to know about Title
      </h5>
      <div className="elp-card-module">
        {CardData.map((data, key) => {
          return <Cards key={key} field={data} />;
        })}
      </div>
      <div className="elp-card-faqs">
        <h5 className="elp-card-title">Still have questions?</h5>
        <p>
          Check our{" "}
          <a className="elp-faq-link" href="frequentlyAskedQuestions">
            frequently asked questions
          </a>
        </p>
      </div>

      <div className="elp-signup-box">
        {message ? (
          <div className="elp-email-signup">
            <h5 className="elp-card-title"> Thank you!</h5>
            <p>You’re now signed up for our Title news and advice!</p>
            <p>Keep an eye on your mailbox and learn more today.</p>
          </div>
        ) : (
          <div className="elp-email-signup">
            <h5 className="elp-card-title"> Stay up to date</h5>
            <p>
              We’ll keep you informed with our latest advice and news in Title
            </p>
            <div className="mrkto-subscribe-form">
              <MarketoForm formId="2338" />
            </div>
          </div>
        )}

        <div className="elp-newsletter">
          <img src={NewsLetter} alt="News Letter" />
        </div>
      </div>
    </section>
  );
};

export default CardComponent;

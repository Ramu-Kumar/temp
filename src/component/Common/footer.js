import React from "react";
import logo from "../../assets/static/images/radian-logo.svg";
import facebookIcon from "../../assets/static/icons/title/Facebook.svg";
import twitterIcon from "../../assets/static/icons/title/Twitter.svg";
import linkedinIcon from "../../assets/static/icons/title/LinkedIn.svg";
import youtubeIcon from "../../assets/static/icons/title/Youtube.svg";
import "../../scss/common/footer.scss";
function Footer() {
  return (
    <React.Fragment>
      <footer className="footer-wrapper">
        <hr className="footer-start-line" />
        <div className="footer-container">
          <div className="footer-logo-container">
            <div className="logo-left-container">
              <div className="logo-cont-1">
                <a href="/">
                  <img src={logo} alt="radian logo" />
                </a>
              </div>
              <div className="logo-cont-2">
                <a href="/" aria-label="Home">
                  Home
                </a>
                <a href="/Faqs" aria-label="Frequently Asked Questions">
                  FAQs
                </a>
                <a href="/aboutUs" aria-label="About Us">
                  About Us
                </a>
              </div>
            </div>
            <div className="logo-right-container">
              <div className="logo-cont-3">
                <a
                  href="/getQuote"
                  aria-label="Get a Quote"
                  className="btn-footer btn-title-prime"
                >
                  Get a Quote
                </a>
                <a
                  href="/contactUs"
                  aria-label="contact US"
                  className="btn-footer btn-nav-outline"
                >
                  Contact Us
                </a>
              </div>
              <div className="logo-cont-4">
                <a href="/facebook">
                  <img src={facebookIcon} alt="Facebook"/>
                </a>
                <a href="/twitter">
                  <img src={twitterIcon} alt="twitter" />
                </a>
                <a href="/youtube">
                  <img src={youtubeIcon} alt="Youtube"/>
                </a>
                <a href="/linkedin">
                  <img src={linkedinIcon} alt="Linkedin"/>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-desc-container">
            <p className="mb-3" x-ms-format-detection="none">
              “Radian,” “Radian Title,” “Radian Title Insurance,” “Radian Title
              Services,” and “Radian Title Direct” are brands of Radian Group
              Inc., including its licensed insurance affiliates. Title insurance
              is provided and underwritten by Radian Title Insurance Inc. (not
              licensed in AK, CO, HI, ID, IA, ME, MI, NH, NJ, VT and WY), with a
              home office at 6100 Oak Tree Blvd, Suite 200, Independence, OH
              44131; Tel: 877.936.8485.
            </p>
            <p>
              Each insurer has sole financial responsibility for the insurance
              policies it issues. Insurance coverage is subject to the terms and
              conditions of applicable insurance policies, which contain
              exclusions, limitations, and other conditions and requirements.
              Not all services or products are available in all areas throughout
              the United States. In addition, you may not be eligible under the
              applicable underwriting guidelines for all products or services
              described herein.
            </p>
          </div>
          <div className="footer-navlink-container">
            <div className="title-footer-nav">
              <a href="/privacyPolicy" aria-label="Privacy Policy">
                Privacy Policy
              </a>
              <span className="nav-link-pipe">|</span>

              <a href="/termsOfUse" aria-label="Terms of Use">
                Terms of Use
              </a>
              <span className="nav-link-pipe">|</span>

              <a href="/legalDisclosure" aria-label="Legal Disclosure">
                Legal Disclosure
              </a>
              <span className="nav-link-pipe">|</span>
              <a href="/consumer" aria-label="Consumer Complaint Policy">
              Licensing and Disclosure Information
              </a>
              <span className="nav-link-pipe">|</span>
              <a href="/consumer" aria-label="Consumer Complaint Policy">
                Consumer Complaint Policy
              </a>
            </div>

            <p>
              ©2020 Radian, Philadelphia, PA. All rights reserved. All
              information contained herein is subject to change without notice.
            </p>
          </div>
        </div>
        {/* <div className="footer-logo-content base-margin bg-white">
          <div className="footer-logo-left-container">

          </div>
          <div className="footer-logo-right-container">

          </div>
          {/* <div className="footer-logo">
            <a href="/" aria-label="Radian Logo">
              <img src={logo} alt="radian logo" />
            </a>

            <div className="footer-nav-link">
              <a href="/" aria-label="Home Page">
                Home
              </a>
              <a href="/Faqs" aria-label="Frequently Asked Questions Page">
                FAQs
              </a>
              <a href="/aboutUs" aria-label="About Us Page">
                About Us
              </a>
            </div>
          </div>
          <div className="footer-nav-btn">
            <a
              href="/getQuote"
              aria-label="Get a Quote"
              className="btn-footer btn-title-prime"
            >
              Get a Quote
            </a>
            <a
              href="/contactUs"
              aria-label="contact US"
              className="btn-footer btn-nav-outline"
            >
              Contact Us
            </a>
          </div> */}
        {/* </div> */}
        {/* <div className="title-footer-text base-margin bg-white">
          <p className="mb-3" x-ms-format-detection="none">
            “Radian,” “Radian Title,” “Radian Title Insurance,” “Radian Title
            Services,” and “Radian Title Direct” are brands of Radian Group
            Inc., including its licensed insurance affiliates. Title insurance
            is provided and underwritten by Radian Title Insurance Inc. (not
            licensed in AK, CO, HI, ID, IA, ME, MI, NH, NJ, VT and WY), with a
            home office at 6100 Oak Tree Blvd, Suite 200, Independence, OH
            44131; Tel: 877.936.8485.
          </p>
          <p>
            Each insurer has sole financial responsibility for the insurance
            policies it issues. Insurance coverage is subject to the terms and
            conditions of applicable insurance policies, which contain
            exclusions, limitations, and other conditions and requirements. Not
            all services or products are available in all areas throughout the
            United States. In addition, you may not be eligible under the
            applicable underwriting guidelines for all products or services
            described herein.
          </p>
        </div>
        <div className="title-nav-content base-margin bg-white">
          <div className="title-footer-nav">
            <a href="/privacyPolicy" aria-label="Privacy Policy">
              Privacy Policy
            </a>
            <span>|</span>

            <a href="/termsOfUse" aria-label="Terms of Use">
              Terms of Use
            </a>
            <span>|</span>

            <a href="/legalDisclosure" aria-label="Legal Disclosure">
              Legal Disclosure
            </a>
            <span>|</span>
            <a href="/consumer" aria-label="Consumer Complaint Policy">
              Consumer Complaint Policy
            </a>
          </div> */}

        {/* <p>
            ©2020 Radian, Philadelphia, PA. All rights reserved. All information
            contained herein is subject to change without notice.
          </p> */}
        {/* </div>  */}
      </footer>
    </React.Fragment>
  );
}
export default Footer;

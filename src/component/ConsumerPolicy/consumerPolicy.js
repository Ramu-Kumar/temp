import React from "react";
import "../../scss/_title_policyText.scss";
import StickyButtons from "../Common/stickyButtons";

const ConsumerComplaint = () => {
  return (
    <React.Fragment>
      <section className="wrapper-title-body" id="title-start">
        <StickyButtons Arrow />
        <h1 className="consumer-policy-title">Consumer Complaint Policy</h1>
        <div className="consumer-policy-text">
          <p className="rich-text-bold">
            <b>RADIAN TITLE INSURANCE INC.</b> takes all complaints seriously
            and considers the complaint process critical to maintaining
            excellent customer service as well as address any issues that may
            arise during the title and settlement process. Customer Complaints
            are defined as any time a consumer, lender, realtor, mortgage
            broker, title agent or other direct or indirect client of ours
            indicates dissatisfaction with an aspect of our service, pricing, or
            claim handling.
          </p>
          <p className="rich-text-normal">
            Customer Complaint management depends on the type of complaint and
            level of response necessary.
          </p>
          <p className="rich-text-normal">Complaint categories:</p>
          <ul>
            <li>
              <span>Service</span>
            </li>
            <li>
              <span>Financial error related to disbursement</span>
            </li>
            <li>
              <span>Pricing (quoting)</span>
            </li>
            <li>
              <span>Claims</span>
            </li>
            <li>
              <span>
                Regulatory (including complaints filed with any Better Business
                Bureau (“BBB”) or the Department of Insurance)
              </span>
            </li>
          </ul>
          <p className="rich-text-normal">Complaint Intake:</p>
          <p className="rich-text-bold">
            <b>RADIAN TITLE INSURANCE INC.</b> has set up multiple avenues for
            submitting complaints to ensure they are addressed:
          </p>
          <ul>
            <li>
              <span>Phone</span>
            </li>
            <li>
              {" "}
              <span>Email</span>
            </li>
            <li>
              {" "}
              <span>Corporate Web Site</span>
            </li>
            <li>
              {" "}
              <span>Regular Mail</span>
            </li>
          </ul>
          <p className="rich-text-bold">
            All complaints are documented on a standard Customer Complaint
            Intake Form. These Customer Complaint Intake Forms summarize the
            complaints and describe the process for their resolution. All
            Customer Complaint Intake Forms are retained for at least 24 months
            in <b>RADIAN TITLE INSURANCE INC.</b> archives.
          </p>
          <p className="rich-text-title">COMPLAINT RESOLUTION:</p>
          <p className="rich-text-bold">
            <b>RADIAN TITLE INSURANCE INC.</b> empowers its employees to resolve
            service level complaints immediately in order to avoid disruption in
            the title and settlement process with approval from their office
            manager. Any complaints that cannot be resolved within one hour are
            escalated to our Complaint Committee Chairperson (defined below).
          </p>
          <p className="rich-text-bold">
            Financial and Pricing complaints are immediately routed to the
            manager of the corresponding service center. Managers have the
            authority to resolve these complaints up to $1,000. Issues that
            involve pricing or financial errors exceeding this amount are routed
            to the President of <b>RADIAN TITLE INSURANCE INC.</b> for review
            and resolution. Any complaints that mention or involve a possible
            claim are immediately routed to <b>RADIAN TITLE INSURANCE INC.</b>
            claims department. Claims are immediately logged, and a confirmation
            and receipt are returned to the policyholder. Claims are reviewed by
            claims counsel and the Claims Committee of{" "}
            <b>RADIAN TITLE INSURANCE INC.</b> Any complaints received through
            our corporate website or email are logged into our complaint
            management database and assigned to the appropriate office for
            resolution. Resolutions are recorded into the database for tracking
            purposes. Any complaints filed through a regulatory body or any BBB
            are immediately routed to the President of{" "}
            <b>RADIAN TITLE INSURANCE INC.</b> Confirmation of these complaints
            is made within 24 hours. Following a review of the file and
            complaint, a response is required within at least 14 days (unless
            the regulator requires a response within a shorter time period).
          </p>
          <p className="rich-text-bold">
            Not every complaint filed with <b>RADIAN TITLE INSURANCE INC.</b>
            will be the responsibility or the obligation of{" "}
            <b>RADIAN TITLE INSURANCE INC.</b>; however, we are dedicated to
            reviewing and pursuing a complete resolution for each complaint that
            is both satisfactory to the customer and{" "}
            <b>RADIAN TITLE INSURANCE INC.</b>
          </p>
          <p className="rich-text-bold">
            The management team of <b>RADIAN TITLE INSURANCE INC.</b> shall
            maintain a special committee dedicated to reviewing all consumer
            complaint activity (the “Complaints Committee”). The Complaints
            Committee shall consist of five to eight members and meet at least
            once a quarter to discuss client complaints.
          </p>
          <p className="rich-text-bold">
            The Complaint Committee is led by a chairperson (the “Chairperson”).
            The Chairperson is copied on all complaint related correspondence
            from the intake of the complaint to any interactions with the
            customer who lodged the complaint. While we empower our specialists
            to resolve complaints directly with clients, all clients shall be
            notified that they have the right to interface directly with the
            Chairperson regarding their complaint if they so desire.
          </p>
          <p className="rich-text-normal">©2019 Radian. All rights reserved.</p>
        </div>
      </section>
    </React.Fragment>
  );
};
export default ConsumerComplaint;

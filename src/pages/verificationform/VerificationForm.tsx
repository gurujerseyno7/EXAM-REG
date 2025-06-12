import React, { useState } from "react";
import "./VerificationForm.scss";
import RatingForm from "./ratingform/RatingForm";
import LicenseNameForm from "./licensenameform/LicenseNameForm";
import LicenseNumberForm from "./licensenumberform/LicenseNumberForm";
import CustomDateCalendar from "../../components/customcalendar/CustomDateCalendar";

const VerificationForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="verification-container">
      <div className="row" style={{ marginTop: "20px" }}></div>
      <div className="shadow-sm verificationform-box">
        <h5 className="verifyform-header">ONLINE VERIFICATION</h5>
        <h6 className="verifyform-subtitle">
          Select a tab below and fill up the fields required to verify
        </h6>

        <ul
          className="nav nav-pills mb-3 verifyform-tabs"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => {
                setActiveTab(0);
              }}
            >
              <i className="bi bi-star-fill"></i>
              <span className="tabsname-header"> Verification of Rating</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {
                setActiveTab(1);
              }}
            >
              <i className="bi bi-person-lines-fill"></i>
              <span className="tabsname-header">
                {" "}
                Verification of License (By Name)
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() => {
                setActiveTab(2);
              }}
            >
              <i className="bi bi-stickies-fill"></i>
              <span className="tabsname-header">
                {" "}
                Verification of License (By License No.)
              </span>
            </button>
          </li>
        </ul>
        <hr></hr>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`tab-pane fade  ${
              activeTab === 0 ? "show active" : ""
            } `}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {activeTab === 0 && <RatingForm />}
          </div>
          <div
            className={`tab-pane fade  ${
              activeTab === 1 ? "show active" : ""
            } `}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {activeTab === 1 && <LicenseNameForm />}
          </div>
          <div
            className={`tab-pane fade  ${
              activeTab === 2 ? "show active" : ""
            } `}
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            {activeTab === 2 && <LicenseNumberForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;

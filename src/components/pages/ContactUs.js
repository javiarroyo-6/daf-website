import React, { useState, useRef } from "react";
import { FiHome, FiPhone } from "react-icons/fi";
import CardItem from "../CardItem";
import emailjs from "emailjs-com";
import Footer from "../Footer";
import "./ContactUs.css";
import "../Cards.css";
import location from "./dafLocation.png";

const ContactUs = () => {
  const form = useRef();

  const [values, setValues] = useState({
    fullName: "",
    businessName: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullName = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      fullName: e.target.value,
    }));
  };

  const handleBusinessName = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      businessName: e.target.value,
    }));
  };

  const handleEmail = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      email: e.target.value,
    }));
  };

  const handleMessage = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      message: e.target.value,
    }));
  };

  const phoneNumber = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      phoneNumber: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      values.fullName &&
      values.businessName &&
      values.email &&
      values.message &&
      values.phoneNumber
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_do8gytg",
        "template_w05sjlh",
        form.current,
        "1WFe7jRgMJERnt5BF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // alert("Email sent");
  };

  return (
    <>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <h1 style={{ paddingTop: 75, color: "#0047ab" }}> Contact Us </h1>
          <h2 style={{ marginLeft: 10, paddingTop: 30 }}>
            Our team would love to hear from you !{" "}
          </h2>
          <p style={{ marginLeft: 10 }}>
            Please fill out the contact form below and one of our team members
            will get back to you as quickly as possible.
          </p>
          <div className="form-container" style={{ marginTop: 10 }}>
            <form ref={form} className="register-form" onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className="success-message">Success!</div>
              ) : null}
              <input
                id="full-name"
                class="form-field"
                type="text"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleFullName}
                name="fullName"
              />
              {submitted && !values.fullName ? (
                <span> Please enter full name.</span>
              ) : null}
              <input
                id="business-name"
                class="form-field"
                type="text"
                placeholder="Business/Organization"
                name="businessName"
                value={values.businessName}
                onChange={handleBusinessName}
              />
              {submitted && !values.businessName ? (
                <span> Please enter business name or organization.</span>
              ) : null}
              <input
                id="email"
                class="form-field"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleEmail}
              />
              {submitted && !values.email ? (
                <span> Please enter an email.</span>
              ) : null}
              <input
                id="message"
                class="form-field"
                type="text"
                placeholder="Message"
                value={values.message}
                onChange={handleMessage}
                name="message"
              />
              <input
                id="phone-number"
                class="form-field"
                type="number"
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChange={phoneNumber}
                name="Phone Number"
              />
              {submitted && !values.message ? (
                <span> Please enter a message.</span>
              ) : null}
              <button className="form-field" type="submit" onClick={sendEmail}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flexbox-item flexbox-item-2">
          <h1 style={{ paddingTop: 75, color: "#0047ab" }}>
            Information Center
          </h1>
          <div className="information-container">
            <p>
              <FiHome />
              Address: 1151 Pomona Road, Suite H, Corona,CA 92882
            </p>
            <p>
              <FiPhone />
              Phone: (951)-733-5283
            </p>

            <h3 style={{ paddingTop: 25, color: "#0047ab" }}>RFQ?</h3>
            <p>Request for a quote.</p>
            <a href="mailto:AR@Diversified-af.com">AR@Diversified-af.com</a>
            <h3 style={{ paddingTop: 25, color: "#0047ab" }}>KEY STAFF</h3>

            <h3>Luke Cortes</h3>
            <p>President</p>
            <a href="mailto:LCortes@Diversified-AF.com">
              LCortes@Diversified-AF.com
            </a>
          </div>
        </div>
      </div>
      <div style={{ width: 700, marginLeft: 350 }}>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={location}
              text="1151 Pomona Road, Suite H, Corona,CA 92882"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

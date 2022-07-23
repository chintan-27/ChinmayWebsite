import React from "react";
import CenterTitle from "../webcomponents/centerTitle";
import "./../App.css";
import emailjs from "emailjs-com";

class Section6 extends React.Component {
  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_SECRET_KEY
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  render() {
    return (
      <div className="section6">
        <br />
        <br />
        <CenterTitle title="Get In Touch" />
        <br />
        <br />
        <p style={{ textAlign: "center" }}>
          Please contact us if you require any additional information or have
          any questions about our products or services.
        </p>
        <br />
        <br />
        <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <input
            type="text"
            name="from_name"
            placeholder="YOUR NAME"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="YOUR E-MAIL"
            required
          />
          <input type="text" name="subject" placeholder="SUBJECT" required />
          <textarea
            name="message"
            placeholder="YOUR MESSAGE HERE ..."
            required
          />
          <input type="submit" value="SEND" className="submit-btn" />
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default Section6;

import React from "react";
import CenterTitle from "../webcomponents/centerTitle";
import "./../App.css";
import emailjs from "emailjs-com";
import swal from "sweetalert";

class Section6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
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
          document.getElementById("create-course-form").reset();
          swal({
            title: "Success!",
            text: "Message Sent Successfully!",
            icon: "success",
            button: "Done",
          });
          // window.location.reload();
        },
        (error) => {
          console.log(error.text);
          document.getElementById("create-course-form").reset();
          swal({
            title: "Error!",
            text: "Something went wrong",
            icon: "error",
            button: "Try Again",
          });
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
        <form
          className="contact-form"
          onSubmit={this.sendEmail}
          id="create-course-form"
          onReset={() => {
            this.setState({ loading: false });
          }}
        >
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
          <input
            type="submit"
            value={this.state.loading ? "SENDING..." : "SEND"}
            onClick={() => {
              this.setState({ loading: true });
            }}
            className="submit-btn"
          />
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default Section6;

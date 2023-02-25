import React from "react";
import { Link } from "react-router-dom";

function ContactUsBtn() {
  return (
    <>
      <Link to="/contact" className="s1-contact-btn">
        CONTACT US <ion-icon name="send"></ion-icon>
      </Link>
    </>
  );
}
export default ContactUsBtn;

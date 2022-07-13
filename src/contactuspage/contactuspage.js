import { React, useEffect } from "react";
import CenterTitle from "../webcomponents/centerTitle";
import emailjs from "emailjs-com";
import "./../App.css";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function ContactUsPage() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyCanc2UwbuE3y8RNH-DjEAM6f9aao8Bogo",
  // });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dptmfk7",
        "template_fw18yts",
        e.target,
        "_ZKMvgr4aHFpkTbiE"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <CenterTitle title="Contact Us" />
      <div className="row">
        <div className="column" style={{ backgroundColor: "#ececec" }}>
          <div className="contact-container">
            <h2>SIDDHIVINAYAK IMPEX</h2>
            <p>
              PLOT 14 AND 15, VITHAL INDUSTRIAL ESTATE, VILLAGE DONGARI,
              Palghar, Maharashtra, 401606
            </p>
          </div>
          <div className="contact-container">
            <h2>Contact Info :</h2>
            <h3>Himmat Jain </h3>
            <h4>
              <ion-icon name="call-outline"></ion-icon>
            </h4>
            <p>+91 9324674547</p>
            <br />
            <h4>
              <ion-icon name="call-outline"></ion-icon>
            </h4>
            <p>+91 9820567689</p>
            <br />
            <h4>
              <ion-icon name="call-outline"></ion-icon>
            </h4>
            <p>+91 8928439104</p>
            <br />
            <h4>
              <ion-icon name="mail-outline"></ion-icon>
            </h4>

            <p>Jain.himmat@ymail.com</p>
          </div>
          <div className="contact-container">
            <h2>SIDDHIVINAYAK EXTRUSION PVT. LTD.</h2>
            <p>
              B/9, new sonal industrial estate, Saki vihar road, saki naka,
              Andheri East, Mumbai
            </p>
          </div>
          <div className="contact-container">
            <h2>Contact Info :</h2>
            <h3>Chinmay Jain </h3>
            <h4>
              <ion-icon name="call-outline"></ion-icon>
            </h4>
            <p>+91 9820570589</p>
            <br />
            <h4>
              <ion-icon name="call-outline"></ion-icon>
            </h4>
            <p>+91 8780322496</p>
            <br />
            <h4>
              <ion-icon name="mail-outline"></ion-icon>
            </h4>
            <p>chinmay932jain@gmail.com</p>
          </div>
        </div>
        <div className="column section6">
          <br />

          <CenterTitle title="Get In Touch" />
          <br />
          <p style={{ textAlign: "center" }}>
            Please contact us if you require any additional information or have
            any questions about our products or services.
          </p>
          <br />
          <br />
          <form className="contact-form" onSubmit={sendEmail}>
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
          {/* {isLoaded ? <Map /> : <div>Loading</div>} */}
        </div>
      </div>
    </div>
  );
}

// function Map() {
//   return (
//     <GoogleMap
//       zoom={10}
//       center={{ lat: 40, lng: -88 }}
//       mapContainerClassName="map-container"
//     >
//       <Marker position={{ lat: 40, lng: -88 }} />
//     </GoogleMap>
//   );
// }

export default ContactUsPage;

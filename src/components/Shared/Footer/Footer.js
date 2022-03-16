import React, { useState } from "react";
import "../../Shared/styles/Homepage/footer.css";
import footerlogo from "../../../assets/fia-kate-logo.png";
function Footer() {
  const [email, setEmail] = useState("");
  const [mailError, setMailError] = useState(true);
  const [message, setMessage] = useState(false);
  console.log(email);
  const validateEmail = (email) => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/);

    if (emailRegex.test(email) === false) {
      setMailError(false);
    } else {
      setMailError(true);
    }
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footerlogo">
          <img src={footerlogo} alt="footer_logo"></img>
        </div>

        <h4>
          The worlds first subscription <br></br> box of Celtic jewelry is
          coming!
        </h4>
        <div className="footer-subscribe">
          <p> Be the first to know when Fia+Kate launches</p>
          <form
            action="https://cms.fia-kate.com/wp-content/newsletter.php"
            method="POST"
            className="footer-form"
          >
            <div className="subscribeinput">
              <input
                type="email"
                placeholder="Enter E-mail address"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              ></input>
              <iframe
                name="footerEmail"
                style={{ display: "none", width: "0", height: "0" }}
              ></iframe>
              <button
                className="subscribeBtn"
                type="submit"
                formTarget="footerEmail"
                onClick={() => {
                  if (mailError === true && email.length > 1) {
                    setMessage(true);
                  } else {
                    setMessage(false);
                  }
                }}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {!mailError ? (
          <div>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                // width: "300px",
                // position: "absolute",
                margin: "10px auto",
                width: "200px",
                backgroundColor: "#FF4E3E",
                fontSize: "14px",
                padding: "10px 15px",
                borderRadius: "8px",
              }}
            >
              Enter a valid email!
            </p>
          </div>
        ) : null}
        {message === true && mailError === true ? (
          <div>
            <p
              style={{
                color: "black",
                fontSize: "13px",
                textAlign: "center",
                margin: "10px auto",
                backgroundColor: "#FFE0DC",
                margin: "10px auto",
                width: "300px",

                fontSize: "14px",
                padding: "10px 15px",
                borderRadius: "8px",

                // width: "300px",
                // position: "absolute",
              }}
            >
              Thank you for subscribing to our newsletter! 😊
            </p>
          </div>
        ) : (
          ""
        )}
        <p className="rightsreserved">
          © {new Date().getFullYear()} Fia and Kate. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;

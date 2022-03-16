import React, { useState } from "react";
import logo from "../../../../assets/fia-kate-logo.png";
import myblogo from "../../../../assets/myirelandbox.png";
import mainbanner from "../../../../assets/mainbanner.png";
import "../../styles/Homepage/firstbanner.css";

function FirstBanner() {
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
    <div className="firstSection">
      <div className="containerWrapper">
        <div className="leftside">
          <div className="logotext">
            <p>
              <span>Fia+Kate</span> is Comming Soon
            </p>
          </div>
          <div>
            <h2 className="main-heading-pc">
              A Surprise Box of Handcrafted <br></br> Celtic Jewelry for You and{" "}
              <br></br> Your Loved Ones
            </h2>
            <h2 className="main-heading-mobile">
              A Surprise Box of Handcrafted Celtic Jewelry for You and Your
              Loved Ones
            </h2>
          </div>

          <div className="Subscribe">
            <p> Be the first to know when fia+kate launches</p>
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
                {!mailError ? (
                  <p
                    style={{
                      color: "white",
                      fontSize: "12px",
                      textAlign: "center",
                      // width: "300px",
                      // position: "absolute",
                      margin: "10px 0",
                      width: "200px",
                      backgroundColor: "#FF4E3E",
                      fontSize: "14px",
                      padding: "10px 15px",
                      borderRadius: "8px",
                    }}
                  >
                    Enter a valid email!
                  </p>
                ) : null}
                {message === true && mailError === true ? (
                  <p
                    style={{
                      color: "black",
                      fontSize: "13px",
                      textAlign: "center",
                      margin: "10px 0",
                      backgroundColor: "#FFE0DC",

                      width: "300px",

                      fontSize: "14px",
                      padding: "10px 15px",
                      borderRadius: "8px",
                    }}
                  >
                    Thank you for subscribing to our newsletter! 😊
                  </p>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>

          <div className="makers">
            {/* <p>
            From the makers of <img src={myblogo}></img>
          </p> */}
          </div>
        </div>
        <div className="rightside">
          <div>
            <img src={mainbanner}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstBanner;

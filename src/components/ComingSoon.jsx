import { useState } from "react";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const emailRegexValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function handleSubmit(event) {
    event.preventDefault();

    document.getElementById("input").value = "";

    if (!email || email === "" || !emailRegexValidation.test(email)) {
      setIsError(true);
      return;
    }

    setIsError(false);
    console.log(email);
  }

  const inputStyle = "email-input " + (isError ? "email-input-error" : "");

  return (
    <>
      <div className="header">
        <img className="logo" src="./images/logo.svg" alt="Ping logo" />
        <h1 className="heading">
          We are launching <span className="heading-soon">soon!</span>
        </h1>
        <p className="subscribe">Subscribe and get notified Notify Me</p>
      </div>
      <form className="email-form" onSubmit={handleSubmit}>
        <div>
          <input
            id="input"
            className={inputStyle}
            type="text"
            value={email}
            placeholder="Your email address..."
            onChange={(e) => {
              setEmail(e.target.value);
              setIsError(false);
            }}
          />
          {isError && (
            <p className="error">Please provide a valid email address</p>
          )}
        </div>
        <button className="email-submit-btn" type="submit">
          Notify Me
        </button>
      </form>

      <img
        className="dashboard-img"
        src="./images/illustration-dashboard.png"
        alt="Ping logo"
      />
      <div className="social-media-links">
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
      <p className="copyright">
        <i className="fa fa-copyright" aria-hidden="true"></i>
        Copyright Ping. All rights reserved.
      </p>
    </>
  );
}

export default ComingSoon;

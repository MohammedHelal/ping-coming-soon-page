import { useState } from "react";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isError, setError] = useState(false);

  const emailRegexValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function handleSubmit() {
    if (!email || email === "" || !emailRegexValidation.test(email)) {
      setError(true);
      return;
    }
  }

  const inputStyle = "email-input " + (isError ? "email-input-error" : "");

  return (
    <>
      <img className="logo" src="./images/logo.svg" alt="Ping logo" />
      <h1 className="heading">
        We are launching <span className="heading-soon">soon!</span>
      </h1>
      <p className="subscribe">Subscribe and get notified Notify Me</p>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          className={inputStyle}
          type="email"
          value={email}
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="email-submit-btn" type="submit">
          Notify Me
        </button>
      </form>
      {isError && <p className="error">Please provide a valid email address</p>}
      <img
        className="dashboard-img"
        src="./images/illustration-dashboard.png"
        alt="Ping logo"
      />
      <div className="social-media-links">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
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

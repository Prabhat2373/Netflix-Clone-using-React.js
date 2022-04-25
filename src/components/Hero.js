import React from "react";
import "./../Hero.css";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="img-container">
          {/* <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/e316821f-7177-48f4-b748-e44a8b0840df/5a52a0c1-d8aa-4d0a-bf34-1b376962612a/IN-en-20220406-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="" className="hero-img"
          /> */}
        </div>
        <div className="heroText">
          <h1 className="heading-h1" id="head">
            Unlimited movies, TV <br></br> shows and more.
          </h1>
          <h2 className="heading-h2" id="head2">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="heroPara" id="heroPara">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="emailInputField">
            <input type="email" name="email" id="email" placeholder="Email address" />
            <button className="btn btn-red" id="get-started">
              Get Started <span className="arrowSpn"> <svg xmlns="http://www.w3.org/2000/svg"  className="arrow" width="24" height="24" ><path className="actArr" d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

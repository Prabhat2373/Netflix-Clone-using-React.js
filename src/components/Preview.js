import React from "react";
import "./../Preview.css"
export default function Preview() {
  return (
    <>
      <div className="pre-container">
        <div className="info-container">
          <div className="info-head">
            <div className="info-h1">Enjoy on your TV</div>
            <div className="info-para">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="img-sect">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="netflix TV"
              className="img"
              id="tvimg"
            />
          </div>
          <div className="video-card">
            <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" className="video" id="video"></video>
          </div>
        </div>
      </div>
    </>
  );
}

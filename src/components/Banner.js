import React from "react";
import "./../Banner.css"
export default function Banner(props) {
  return (
    <>
      <div className={`pre-container `}>
    <div className={`banner-container ${props.position}`}>

      <div className={`info-container ${props.padPos}`}>
          <div className="info-head">
            <div className="info-h1">{props.h1}</div>
            <div className="info-para">
              {props.para}
            </div>
          </div>
        </div>
        <div className="img-container1">
          <div className="img-sect">
            <img
              src={props.imgSrc}
              alt="netflix TV"
              className="img"
            />
          </div>
          <div className="video-card" id={`${props.vidCardId}`}>
            <video src={props.videoSrc} className="video" id={props.video} autoPlay loop></video>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

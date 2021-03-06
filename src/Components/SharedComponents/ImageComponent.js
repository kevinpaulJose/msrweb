import React from "react";
import "./image.css";

export default function ImageComponent({ props }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="d-block mb-4 h-100 ">
        <div className="img">
          <a href={props.href} target="_blank" rel="noreferrer">
            <img className="img-inner" src={props.href} alt="img" />
          </a>
        </div>
      </div>
    </div>
  );
}

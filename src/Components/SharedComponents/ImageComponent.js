import React from "react";

export default function ImageComponent({ props }) {
  return (
    <div class="col-lg-3 col-md-4 col-6">
      <div class="d-block mb-4 h-100">
        <img className="img-fluid img-thumbnail" src={props.href} alt="img" />
      </div>
    </div>
  );
}

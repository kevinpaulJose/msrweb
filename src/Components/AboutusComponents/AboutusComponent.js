import React from "react";
import "./aboutus.css";

export default function AboutUsComponent() {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
      }}
    >
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0 inline">
        About US
      </h1>
      <hr className="mt-2 mb-5" />
      <div className="float-left">
        <p>
          <strong>MSR Construction</strong> is a <strong>Tirunelveli </strong>
          based builders since 1997. We have built a trust over the years among
          our customers by our innovative and safest construction work. We
          delight in the satisfaction of our customers by meeting their needs
          and expectations. Our projects are all built with the modern designs,
          best of amenities and of course luxury. We offer innovative floor
          plans with the complete space utilization.
        </p>
        <p>
          <strong>MSR Construction</strong> always focus on uniqueness,
          integrity, quality and durability of the buildings and above all we
          strive hard to achieve customer satisfaction. Our biggest trait is
          commitment. We are committed to our clients to provide them with the
          best world class projects and services. We provide a safe and spacious
          living spaces in our construction work that render peace and comfort
          to our clients. We do our projects at an affordable budget that
          satisfies our customers.
        </p>
      </div>
    </div>
  );
}

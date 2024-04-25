import React from 'react';
import { Link } from "react-router-dom";
import { theme } from '../../theme';

const Refund = () => {
  return (
    <div style={{ padding: 20, color: theme.logo_color_dark, backgroundColor: "white", height: "100vh" }}>
      <div>
        <div className="float-left">
          <Link
            to={{
              pathname: "/home",
            }}
          >
            {"< Go back"}
          </Link>
        </div>
      </div>
      <h2>MSR Construction Return and Refund Policy</h2>
      <h3>Consultations and 3D Modeling</h3>
      <p>Since our services are digital in nature, we do not offer returns.</p>
      <h3>Cancellations</h3>
      <p>We do not offer customer-initiated cancellations. However, if MSR Construction needs to cancel an appointment, a full refund will be provided.</p>
      <h3>Contact Us</h3>
      <p>If you have any questions regarding our return and refund policy, please <Link to={'/contactUs'}>contact us.</Link></p>
    </div>
  );
};

export default Refund;

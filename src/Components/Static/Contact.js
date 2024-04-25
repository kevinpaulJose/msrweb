import React from 'react';
import { Link } from "react-router-dom";
import { theme } from '../../theme';

const ContactUs = () => {
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
      <h2>Contact Us</h2>
      <p><u>MSR Construction</u></p>
      <address>
        No.12 Valluvar Colony, <br />
        Thirumal Nagar, Tirunelveli, <br />
        Tamil Nadu, India - 627007
      </address>
      <p>
        <a href="https://wa.me/7904426625">Contact us on Whatsapp: 7904426625</a>
      </p>
    </div>
  );
};

export default ContactUs;

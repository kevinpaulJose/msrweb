import React from 'react';
import { Link } from "react-router-dom";
import { theme } from '../../theme';

const Privacy = () => {
  return (
    <div style={{ padding: 20, color: theme.logo_color_dark, backgroundColor: "white", }}>
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
      <h1>Privacy Policy</h1>
      <p>
        Welcome to MSR Construction! This privacy policy explains how we collect, use, and protect your personal information when you visit our website. By using our services, you agree to the terms outlined below.
      </p>
      <ol>
        <li>
          <strong>Information Collection</strong>
          <p>
            We collect personal information such as names, email and contact details when you interact with our website. This information helps us improve our services and provide a better user experience.
          </p>
        </li>
        <li>
          <strong>Use of Personal Information</strong>
          <p>
            We use the collected information to:
            <ul>
              <li>Enhance your browsing experience on our website.</li>
              <li>Process orders and transactions.</li>
              <li>Send you relevant updates and promotional content.</li>
            </ul>
          </p>
        </li>
        <li>
          <strong>Third-Party Services</strong>
          <p>
            We may use third-party services (such as Google Analytics) to analyze website traffic and improve our offerings. These services may collect and process your data according to their own privacy policies.
          </p>
        </li>
        <li>
          <strong>Security Measures</strong>
          <p>
            We take reasonable precautions to protect your personal information. However, no data transmission over the internet is completely secure. Please use our services at your own risk.
          </p>
        </li>
        <li>
          <strong>Cookies</strong>
          <p>
            Our website uses cookies to enhance user experience. You can adjust your browser settings to disable cookies if you prefer.
          </p>
        </li>
        <li>
          <strong>Updates</strong>
          <p>
            We may update this privacy policy from time to time. Please check back periodically for any changes.
          </p>
        </li>
      </ol>
      <p>
        If you have any questions or concerns about our privacy practices, feel free to contact us.
      </p>
    </div>
  );
};

export default Privacy;

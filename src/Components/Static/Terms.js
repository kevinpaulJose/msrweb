import React from 'react';
import { Link } from "react-router-dom";
import { theme } from '../../theme';

const Terms = () => {
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
      <h1>Terms and Conditions</h1>
      <ol>
        <li>
          <strong>Introduction</strong>
          <p>
            Welcome to MSR Construction! These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. If you disagree with any part of these terms, please do not use our services.
          </p>
        </li>
        <li>
          <strong>Definitions</strong>
          <p>
            <em>“We,” “Us,” or “Our”:</em> Refers to MSR Construction.
            <br />
            <em>“User”:</em> Refers to anyone who accesses or uses our website.
            <br />
            <em>“Products”:</em> Includes live fishes, pet supplies, and any other items available for purchase on our website.
          </p>
        </li>
        <li>
          <strong>Use of Our Website</strong>
          <p>
            <ul>
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree not to use our website for any illegal or unauthorized purpose.</li>
              <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
            </ul>
          </p>
        </li>
        <li>
          <strong>Products and Pricing</strong>
          <p>
            <ul>
              <li>Our product listings are subject to availability.</li>
              <li>Prices are in Indian Rupees (INR) and are subject to change without notice.</li>
              <li>We make every effort to display accurate product information, but we do not guarantee the accuracy of descriptions, images, or prices.</li>
            </ul>
          </p>
        </li>
        <li>
          <strong>Shipping and Returns</strong>
          <p>
            There won't be any shipping charges for digital products bought from the website. Refer returns policy for detailed information.
          </p>
        </li>
        <li>
          <strong>Digital Products</strong>
          <p>
            We provide consultation for customers who aspire to consturct dream homes or corporate buildings.
          </p>
        </li>
        <li>
          <strong>Privacy Policy</strong>
          <p>
            Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you agree to our Privacy Policy.
          </p>
        </li>
        <li>
          <strong>Intellectual Property</strong>
          <p>
            All content on our website, including text, images, logos, and trademarks, is our property. You may not use, reproduce, or distribute our content without our permission.
          </p>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <p>
            We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or products. You agree to indemnify and hold us harmless from any claims related to your use of our services.
          </p>
        </li>
        <li>
          <strong>Changes to Terms and Conditions</strong>
          <p>
            We reserve the right to update or modify these terms at any time. Check this page periodically for changes.
          </p>
        </li>
      </ol>

    </div>
  );
};

export default Terms;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { theme } from "../../theme";
import "./footer.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoWhatsapp,
} from "react-icons/io";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div>
        <Row>
          {/* <Col>
            <div>
              <Row>
                <Col className="col-footer">
                  <span className="footer-header">Contact Us</span>
                </Col>
                <Row className="mt-2">
                  <a href="mailto:msrconstruction.co.in">
                    <Col className="footer-links">
                      <span className="footer-body">Email us</span>
                    </Col>
                  </a>
                </Row>
                <Row>
                  <a href={theme.url.phone}>
                    <Col className="footer-links">
                      <span className="footer-body">Call us</span>
                    </Col>
                  </a>
                </Row>
              </Row>
              
            </div>
          </Col> */}
          <Col>
            {/* <div> */}
            <Row>
              <Col className="col-footer">
                <span className="footer-header">Usefull Links</span>
              </Col>
              <Row className="mt-2">
                <Link to={'/contactUs'}>
                  <Col className="footer-links">
                    <span className="footer-body">Contact Us / Address</span>
                  </Col>
                </Link>


              </Row>
              <Row className="mt-2">
                <Link to={'/terms'}>
                  <Col className="footer-links">
                    <span className="footer-body">Terms amd Conditions</span>
                  </Col>
                </Link>


              </Row>
              <Row>
                <Link to={`/policy`}>
                  <Col className="footer-links">
                    <span className="footer-body">Privacy Policy</span>
                  </Col>
                  </Link>
              </Row>
              <Row>
                <Link to={`/refundPolicy`}>
                  <Col className="footer-links">
                    <span className="footer-body">Cancellation and Refund Policy</span>
                  </Col>
                </Link>
              </Row>
            </Row>

            {/* </div> */}
          </Col>
          {/* <Col>
            <div>
              <Row>
                <Col className="col-footer">
                  <span className="footer-header">
                    Follow us on Social Media
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <a className="href-blank-insta" href={theme.url.instagram}>
                    <div className="inline-block">
                      <IoLogoInstagram size={30} />
                    </div>
                  </a>
                  <a className="href-blank-youtube" href={theme.url.youtube}>
                    <div className="inline-block">
                      <IoLogoYoutube size={30} />
                    </div>
                  </a>
                  <a className="href-blank-wp" href={theme.url.whatsapp}>
                    <div className="inline-block">
                      <IoLogoWhatsapp size={30} />
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}

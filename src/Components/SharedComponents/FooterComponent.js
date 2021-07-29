import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";

export default function FooterComponent() {
  return (
    <div className="footer">
      <div>
        <Row>
          <Col>
            <div>
              <Row>
                <Col>
                  <span className="footer-header">Contact Us</span>
                </Col>
                <Row className="mt-2">
                  <Col>
                    <span className="footer-body">Email us</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <span className="footer-body">Call uss</span>
                  </Col>
                </Row>
              </Row>
            </div>
          </Col>
          <Col>
            <div>
              <Row>
                <Col>
                  <span className="footer-header">
                    Follow us on Social Media
                  </span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

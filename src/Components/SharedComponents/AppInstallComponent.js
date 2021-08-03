import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import "./appinstall.css";

export default function AppInstallComponent() {
  return (
    <div className="appInstall">
      <Row>
        <Col className="mt-2">
          <div className="install-text">Install from Google Play</div>
        </Col>
        <Col className="mt-1 mb-1">
          <div>
            <Button
              href="https://play.google.com/store/apps/details?id=com.msrconstruction.co"
              variant="success"
            >
              INSTALL
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

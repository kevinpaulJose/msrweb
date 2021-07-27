import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./bodycard.css";
import residenceImg from "../../assets/resources/residential_background.jpg";
import interiorImg from "../../assets/resources/interioi_background.png";
import interiorLogo from "../../assets/icons/tools.png";
import residenceLogo from "../../assets/icons/residence_icon.png";
import nonresidenceLogo from "../../assets/icons/non_residence_icon.png";

const BodyCardComponent = () => {
  return (
    <Container>
      <Row className="card-body-custom">
        <Col className="col">
          <div className="card-outline">
            <Card className="card">
              <div className="card-head-text">Build a new Home?</div>
              <Card.Img className="card-img" variant="top" src={residenceImg} />
              <Card.Body className="residential-card-1">
                <div>
                  <img src={residenceLogo} alt="Interior Design logo" />
                </div>
                <div className="card-selection">Residential Homes</div>
              </Card.Body>
              <Card.Body className="residential-card">
                <div>
                  <img src={nonresidenceLogo} alt="Interior Design logo" />
                </div>
                <div className="card-selection">Apartments</div>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className="col col2">
          <div className="card-outline">
            <Card className="card">
              <div className="card-head-text">
                Interior designing & Renovations
              </div>
              <Card.Img
                className="card-img card-img-1"
                variant="top"
                src={interiorImg}
              />
              <Card.Body className="interior-card">
                <div>
                  <img src={interiorLogo} alt="Interior Design logo" />
                </div>
                <div className="card-selection">
                  Interior Designing & Renovations
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BodyCardComponent;

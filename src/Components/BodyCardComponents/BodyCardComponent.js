import React from "react";
import { Card, Col, Container, Row, Modal } from "react-bootstrap";
import "./bodycard.css";
import residenceImg from "../../assets/resources/residential_background.jpg";
import interiorImg from "../../assets/resources/interioi_background.png";
import interiorLogo from "../../assets/icons/tools.png";
import residenceLogo from "../../assets/icons/residence_icon.png";
import nonresidenceLogo from "../../assets/icons/non_residence_icon.png";
import findUsImg from "../../assets/img/findus.jpg";
import mapLogo from "../../assets/icons/map.png";
import FormComponent from "../SharedComponents/FormComponent";

class BodyCardComponent extends React.Component {
  state = {
    modalIsOpen: false,
    selected: "",
  };

  toggleModal = ({ selected }) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    this.setState({ selected: selected });
  };
  render() {
    return (
      <Container>
        <Row className="card-body-custom">
          <Col className="col col-cus">
            <div className="card-outline">
              <Card className="card">
                <div className="card-head-text">Build a new Home?</div>
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={residenceImg}
                  onClick={() =>
                    this.toggleModal({ selected: "Residential Homes" })
                  }
                />
                <Card.Body
                  onClick={() =>
                    this.toggleModal({ selected: "Residential Homes" })
                  }
                  className="residential-card-1"
                >
                  <div>
                    <img src={residenceLogo} alt="Interior Design logo" />
                  </div>
                  <div className="card-selection">Residential Homes</div>
                </Card.Body>
                <Card.Body
                  onClick={() => this.toggleModal({ selected: "Apartments" })}
                  className="residential-card"
                >
                  <div>
                    <img src={nonresidenceLogo} alt="Interior Design logo" />
                  </div>
                  <div className="card-selection">Apartments</div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col className="col col-cus col2">
            <div className="card-outline">
              <Card
                className="card"
                onClick={() =>
                  this.toggleModal({
                    selected: "Interior Designing & Renovations",
                  })
                }
              >
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

          <Col className="col col-cus col2 col3">
            <div className="card-outline">
              <Card className="card">
                <div className="card-head-text">Find us here!</div>
                <Card.Img
                  className="card-img card-img-1"
                  variant="top"
                  src={findUsImg}
                />
                <Card.Body className="map-card">
                  <div>
                    <img src={mapLogo} alt="Map logo" />
                  </div>
                  <div className="card-selection">Navigate</div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Modal
          show={this.state.modalIsOpen}
          onHide={() => this.toggleModal("")}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selected}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormComponent selected={this.state.selected} />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default BodyCardComponent;

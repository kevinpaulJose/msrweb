import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { storageRef } from "../../firebase/script";
import FormComponent from "../SharedComponents/FormComponent";
import ImageComponent from "../SharedComponents/ImageComponent";

class GalleryPageComponent extends React.Component {
  state = {
    constructionImages: [],
    modalIsOpen: false,
    selected_passed: "",
  };

  toggleModal = ({ selected }) => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    this.setState({ selected_passed: selected });
  };
  fetchImages = () => {
    if (typeof this.props.location.state == "undefined") {
      window.history.back();
    }
    let constructionRef = storageRef.child(this.props.location.state.selection);
    let images = [];
    constructionRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              images.push(url);
            })
            .then(() => {
              this.setState({ constructionImages: images });
            });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  componentDidMount() {
    if (typeof this.props.location.state == "undefined") {
      window.history.back();
    } else {
      this.fetchImages();
    }
  }
  render() {
    if (typeof this.props.location.state == "undefined") {
      window.history.back();
      return <></>;
    } else {
      return (
        <div style={{ marginTop: 50 }}>
          <div className="container">
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
            <h1 className="fw-light text-center text-lg-start mt-4 mb-0 inline">
              {this.props.location.state.header}
            </h1>
            {this.props.location.state.form && (
              <div
                className="book-now"
                onClick={() => this.toggleModal({ selected: "Home Booking" })}
              >
                Book Now
              </div>
            )}
            <hr className="mt-2 mb-5" />
            <div className="row text-center text-lg-start">
              {this.state.constructionImages.map((item, index) => {
                return (
                  <ImageComponent
                    key={index}
                    props={{
                      href: item,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <Modal
            show={this.state.modalIsOpen}
            onHide={() => this.toggleModal("")}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.state.selected_passed}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormComponent selected={this.state.selected_passed} ignorePin />
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}

export default GalleryPageComponent;

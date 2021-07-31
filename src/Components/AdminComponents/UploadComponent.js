import React from "react";
import { Button, Form } from "react-bootstrap";
import { storageRef } from "../../firebase/script";
import ImageComponent from "./ImageComponent";

class UploadComponent extends React.Component {
  state = {
    selected: "construction",
    images: [],
    files: [],
    isLoading: false,
    end: false,
  };

  fetchImages = ({ selection }) => {
    let constructionRef = storageRef.child(selection);
    let images = [];
    constructionRef
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef
            .getDownloadURL()
            .then((url) => {
              let temp = {
                url: url,
                ref: itemRef.name,
              };
              images.push(temp);
            })
            .then(() => {
              this.setState({ images: images });
            });
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };
  componentDidMount() {
    this.fetchImages({ selection: "construction" });
  }

  upload = async () => {
    this.setState({ isLoading: true });
    const files = this.state.files;
    for (const file of files) {
      await storageRef.child(this.state.selected + "/" + file.name).put(file);
    }
    alert("Uploaded");
    this.fetchImages({ selection: this.state.selected });
    this.setState({ isLoading: false, end: true });
  };

  setFiles = (e) => {
    const files = e.target.files;
    this.setState({ files: files });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <Form.Select
            onChange={(e) => {
              this.setState({ selected: e.target.value });
              this.fetchImages({ selection: e.target.value });
            }}
            aria-label="Default select example"
          >
            <option value="construction">Our Projects</option>
            <option value="works">Our Works</option>
            <option value="soon">Coming Soon</option>
          </Form.Select>
          <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
            <Form.Control
              onChange={(e) => this.setFiles(e)}
              accept="image/*"
              type="file"
              multiple
            />
          </Form.Group>
          <Button
            className={this.state.end ? "success" : "primary"}
            onClick={this.upload}
            disabled={this.state.isLoading}
          >
            {this.state.isLoading ? "Uploading..." : "Upload"}
          </Button>
        </div>
        <div className="container mt-3">
          <div className="row text-center text-lg-start">
            {this.state.images.map((item, index) => {
              return (
                <>
                  <ImageComponent
                    key={index}
                    props={{
                      href: item.url,
                      ref: item.ref,
                      selected: this.state.selected,
                      fetchImg: this.fetchImages,
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UploadComponent;

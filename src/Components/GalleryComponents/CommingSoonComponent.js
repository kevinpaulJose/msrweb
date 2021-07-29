import React from "react";
import { Link, Redirect } from "react-router-dom";
import { storageRef } from "../../firebase/script";
import ImageComponent from "../SharedComponents/ImageComponent";
import "./gallery.css";

class CommingSoonComponent extends React.Component {
  state = {
    constructionImages: [],
    selected: "soon",
    header: "Coming Soon",
    modalIsOpen: false,
    selected_passed: "",
  };

  fetchImages = () => {
    let constructionRef = storageRef.child("soon");
    let images = [];
    constructionRef
      .list({ maxResults: 4 })
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          //   console.log(folderRef);
        });

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
    this.fetchImages();
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <div className="container">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0 inline">
            {this.state.header}
          </h1>
          <div className="float-left">
            <Link
              to={{
                pathname: "/gallery",
                state: {
                  header: this.state.header,
                  selection: this.state.selected,
                  form: true,
                },
              }}
            >
              See more
            </Link>
          </div>
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
      </div>
    );
  }
}

export default CommingSoonComponent;

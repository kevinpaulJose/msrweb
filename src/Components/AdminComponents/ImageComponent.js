import React from "react";
import { storageRef } from "../../firebase/script";
import "./image.css";

class ImageComponent extends React.Component {
  delete = async ({ ref }) => {
    if (window.confirm("Confirm Delete")) {
      await storageRef.child(this.props.props.selected + "/" + ref).delete();
      alert("Deleted");
      this.props.props.fetchImg({ selection: this.props.props.selected });
    }
  };
  render() {
    return (
      <div key={this.props.key} className="col-6 col-md-4 col-lg-3">
        <div className="d-block mb-4 h-100 ">
          <div className="img">
            <div
              style={{
                position: "absolute",
                width: "50px",
                height: "25px",
                backgroundColor: "red",
                borderRadius: "20px",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => this.delete({ ref: this.props.props.ref })}
            >
              <span>X</span>
            </div>
            <img className="img-inner" src={this.props.props.href} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageComponent;

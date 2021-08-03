import React from "react";
import emailjs from "emailjs-com";
import NavBar from "./SharedComponents/NavBar";
import BodyCardComponent from "./BodyCardComponents/BodyCardComponent";
import FooterComponent from "./SharedComponents/FooterComponent";
import GalleryComponent from "./GalleryComponents/GalleryComponent";
import AboutUsComponent from "./AboutusComponents/AboutusComponent";
import AppInstallComponent from "./SharedComponents/AppInstallComponent";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "msr_construction",
        "msr_construction_form",
        e.target,
        "user_Fshle7lhIGd5UAZiXexYL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div>
        <AppInstallComponent />
        <NavBar />
        <BodyCardComponent />
        <AboutUsComponent />
        <GalleryComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default HomeComponent;

import React from "react";
import emailjs from "emailjs-com";
import NavBar from "./SharedComponents/NavBar";

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
        <NavBar />
      </div>
    );
  }
}

export default HomeComponent;

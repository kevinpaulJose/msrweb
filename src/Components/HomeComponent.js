import React from "react";
import emailjs from "emailjs-com";

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
        <p>Kevin</p>
        <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="id" value="123" />
          <input type="hidden" name="about" value="New Construction" />
          <label>Name</label>
          <input type="text" name="to_name" />
          <label>Email</label>
          <input type="email" name="to_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default HomeComponent;

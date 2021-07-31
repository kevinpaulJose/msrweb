import React from "react";
import { Button, Form } from "react-bootstrap";
import UploadComponent from "./UploadComponent";

class LoginComponent extends React.Component {
  state = {
    isLoggedIn: false,
    email: "",
    password: "",
  };

  login = () => {
    if (
      this.state.email === "msrconstruction.co.in@gmail.com" &&
      this.state.password === "jimmy445890"
    ) {
      this.setState({ isLoggedIn: true });
      console.log("Logged in");
    } else {
      alert("Incorrect Username / Password");
    }
  };
  render() {
    if (this.state.isLoggedIn) {
      return <UploadComponent />;
    } else
      return (
        <div>
          <div className="container mt-4">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                  placeholder="Email ID"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button onClick={this.login} variant="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      );
  }
}

export default LoginComponent;

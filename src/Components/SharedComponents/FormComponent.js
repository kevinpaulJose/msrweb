import React from "react";
import { Button, Form, Toast } from "react-bootstrap";
import emailjs from "emailjs-com";
import { firestore } from "../../firebase/script";
import axios from "axios";

class FormComponent extends React.Component {
  state = {
    service_id: "msr_construction",
    template_id_1: "msr_construction_form",
    user_id: "user_Fshle7lhIGd5UAZiXexYL",
    id: "",
    to_name: "",
    to_email: "",
    message: "",
    accessToken: "7717287bb3920229e72ce310ae21e85c",
    phone: "",
    district: "",
    comments: "",
    address: "",
    address_error: false,
    email_error: false,
    name_error: false,
    phone_error: false,
    isLoading: false,
    checked: true,
    pin_error: false,
    pincode: "",
    ind_state: "",
    end: false,
    end_pin: false,
    price: "",
  };

  validateEmail = ({ str }) => {
    let filter =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    if (filter.test(str)) {
      // Yay! valid
      return true;
    } else {
      return false;
    }
  };
  validatePhone = ({ phone }) => {
    var phoneno = /^\d{10}$/;
    if (phone.match(phoneno)) {
      return true;
    } else {
      return false;
    }
  };
  validatePin = ({ pin }) => {
    var pinno = /^\d{6}$/;
    if (pin.match(pinno)) {
      return true;
    } else {
      return false;
    }
  };
  validateName = ({ name }) => {
    var letters = /^[A-Za-z ]+$/;
    if (name.match(letters) && name.length >= 4) {
      return true;
    } else {
      return false;
    }
  };

  validateAddress = ({ address }) => {
    if (address.length >= 3) {
      return true;
    } else {
      return false;
    }
  };
  sendSelf = ({ templateParam }) => {
    emailjs
      .send(
        "msr_construction",
        "msr_self",
        templateParam,
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
  };

  sendClient = ({ templateParam }) => {
    emailjs
      .send(
        "msr_construction",
        "msr_construction_form",
        templateParam,
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
  };

  async componentDidMount() {
    const ref = firestore.collection("metadata").doc("w5O0vANoqoj7XjnZPx7f");
    const doc = await ref.get();

    if (!doc.exists) {
      console.log("No such document!");
    } else {
      this.setState({
        price: doc.data().price_sq_ft,
      });
    }
  }

  validateAll = () => {
    let email_error = false;
    let phone_error = false;
    let name_error = false;
    let address_error = false;
    let pin_error = false;

    if (this.validateEmail({ str: this.state.to_email })) {
      this.setState({ email_error: false });
    } else {
      this.setState({ email_error: true });
      email_error = true;
    }

    if (this.validatePhone({ phone: this.state.phone })) {
      this.setState({ phone_error: false });
    } else {
      this.setState({ phone_error: true });
      phone_error = true;
    }

    if (this.validateName({ name: this.state.to_name })) {
      this.setState({ name_error: false });
    } else {
      this.setState({ name_error: true });
      name_error = true;
    }

    if (this.validateAddress({ address: this.state.address })) {
      this.setState({ address_error: false });
    } else {
      this.setState({ address_error: true });
      address_error = true;
    }

    if (!this.props.ignorePin) {
      if (this.validatePin({ pin: this.state.pincode })) {
        this.setState({ pin_error: false });
      } else {
        this.setState({ pin_error: true });
        pin_error = true;
      }
    }

    if (
      email_error ||
      name_error ||
      address_error ||
      pin_error ||
      phone_error
    ) {
      console.log(email_error);
      console.log(name_error);
      console.log(address_error);
      console.log(pin_error);
      console.log(phone_error);
      this.setState({ isLoading: false });
      console.log("this occured");
    } else {
      this.handleForm();
    }
  };

  handleForm = async () => {
    console.log("Initiated");
    this.setState({ isLoading: true });
    if (true) {
      // console.log(this.state);
      console.log("Came into api calls");
      var options = {
        method: "POST",
        url: "https://pincode.p.rapidapi.com/",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key":
            "270a5bcb65msh877d6ff7f5533c0p19a716jsna517e32edc05",
          "x-rapidapi-host": "pincode.p.rapidapi.com",
        },
        data: {
          searchBy: "pincode",
          value: this.props.ignorePin ? "627011" : this.state.pincode,
        },
      };
      const response = await axios.request(options);
      // console.log(response.data);
      console.log("Axios Success - ");
      if (response.data.length >= 1) {
        if (response.data[0].state_id === 31) {
          const ref = firestore
            .collection("metadata")
            .doc("w5O0vANoqoj7XjnZPx7f");
          const doc = await ref.get();
          if (!doc.exists) {
            alert("Please try after some time");
            this.setState({ isLoading: false });
          } else {
            let id = parseInt(doc.data().last_id) + 1;
            this.setState({ id: id });
            const queryRef = firestore.collection("metadata").doc("queries");
            queryRef
              .update({
                [id]: {
                  email: this.state.to_email,
                  about: this.props.selected,
                  address: this.state.address + "\n " + this.state.pincode,
                  message:
                    this.state.comments +
                    "\n" +
                    "-------------" +
                    (this.state.checked
                      ? "Land Available with the customer"
                      : "Land Not Available with the customer"),
                  land: this.state.checked ? "Yes" : "No",
                  phone: this.state.phone,
                },
              })
              .then(() => {
                ref
                  .update({
                    last_id: id,
                  })
                  .then(() => {
                    let templateParam = {
                      service_id: "msr_construction",
                      template_id: "msr_self",
                      user_id: "user_Fshle7lhIGd5UAZiXexYL",
                      id: this.state.id,
                      about: this.props.selected,
                      to_name: this.state.to_name,
                      to_email: "msrconstruction.co.in@gmail.com",
                      message:
                        this.state.comments +
                        "\n" +
                        "-------------" +
                        (this.state.checked
                          ? "Land Available with the customer"
                          : "Land Not Available with the customer"),
                      accessToken: "7717287bb3920229e72ce310ae21e85c",
                      address:
                        this.state.address + "\n - " + this.state.pincode,
                      phone: this.state.phone,
                    };

                    let templateParamClient = {
                      service_id: "msr_construction",
                      template_id: "msr_construction_form",
                      user_id: "user_Fshle7lhIGd5UAZiXexYL",
                      id: this.state.id,
                      about: this.props.selected,
                      to_name: this.state.to_name,
                      to_email: this.state.to_email,
                      message:
                        this.state.comments +
                        "\n" +
                        "-------------" +
                        (this.state.checked
                          ? "Land Available with the customer"
                          : "Land Not Available with the customer"),
                      accessToken: "7717287bb3920229e72ce310ae21e85c",
                      address:
                        this.state.address + "\n - " + this.state.pincode,
                      phone: this.state.phone,
                    };
                    this.sendSelf({ templateParam: templateParam });
                    this.sendClient({ templateParam: templateParamClient });
                    this.setState({
                      isLoading: false,
                      end: true,
                      end_pin: false,
                    });
                  });
              });

            // console.log(formData);
          }
        } else {
          this.setState({ end_pin: true, isLoading: false });
          alert("This Pincode is currently not Serviceable");
        }
      } else {
        this.setState({ end_pin: true, isLoading: false });
        alert("This Pincode is currently not Serviceable");
      }
    } else {
      console.log(
        this.state.email_error ||
          this.state.name_error ||
          this.state.address_error ||
          this.state.pin_error ||
          this.state.phone_error
      );
      console.log("ReachedHere");
    }
  };
  render() {
    return (
      <div>
        <div className="toast-center">
          {this.state.price !== "" &&
          (this.props.selected === "Residential Homes" ||
            this.props.selected === "Apartments") ? (
            <div>
              <Toast className="d-inline-block m-1" bg="success">
                <Toast.Body className="text-white">
                  {"Rs." + this.state.price + "/- per sq.ft only"}
                  <br></br>
                  <small>{"(offer applicable for selected regions)"}</small>
                </Toast.Body>
              </Toast>
              <Toast className="d-inline-block m-1" bg="light">
                <Toast.Body className="text-dark">
                  {
                    "We take care of all the legal Paperworks and Plan Approvals!"
                  }
                </Toast.Body>
              </Toast>
              <Toast className="d-inline-block m-1" bg="light">
                <Toast.Body className="text-dark">
                  {"We provide Load approval Guidance and Support"}
                </Toast.Body>
              </Toast>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Form>
          <Form.Group
            className="mb-3 mt-4"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              onChange={(e) => this.setState({ to_name: e.target.value })}
              type="text"
              name="to_name"
              placeholder="Name"
              disabled={this.state.isLoading}
            />
            {this.state.name_error && (
              <span style={{ color: "red" }}>Invalid Name</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              onChange={(e) => this.setState({ to_email: e.target.value })}
              type="email"
              name="to_email"
              placeholder="Email"
              disabled={this.state.isLoading}
            />
            {this.state.email_error && (
              <span style={{ color: "red" }}>Invalid Email ID</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={(e) => this.setState({ phone: e.target.value })}
              type="text"
              name="phone"
              placeholder="Phone Number"
              disabled={this.state.isLoading}
            />
            {this.state.phone_error && (
              <span style={{ color: "red" }}>Invalid Phone Number</span>
            )}
          </Form.Group>
          <Form.Group
            className="mb-3"
            name="address"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              onChange={(e) => this.setState({ address: e.target.value })}
              placeholder="Address"
              as="textarea"
              rows={3}
              disabled={this.state.isLoading}
            />
          </Form.Group>
          {!this.props.ignorePin && (
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="pin"
                placeholder="Pincode"
                maxLength={6}
                onChange={(e) => this.setState({ pincode: e.target.value })}
                disabled={this.state.isLoading}
              />
              {this.state.pin_error && (
                <span style={{ color: "red" }}>Invalid Pincode</span>
              )}
            </Form.Group>
          )}

          <Form.Group
            className="mb-3"
            name="Additional Comments"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              onChange={(e) => this.setState({ comments: e.target.value })}
              placeholder="Additional Comments"
              as="textarea"
              rows={3}
              disabled={this.state.isLoading}
            />
          </Form.Group>
          {this.props.selected === "Residential Homes" ||
          this.props.selected === "Apartments" ? (
            <Form.Check
              checked={this.state.checked}
              type="checkbox"
              label="I have a Land to Start with!"
              onChange={() => this.setState({ checked: !this.state.checked })}
              disabled={this.state.isLoading}
            />
          ) : (
            <></>
          )}

          <Button
            disabled={this.state.isLoading}
            className="primary"
            onClick={this.validateAll}
          >
            {this.state.isLoading ? "Please wait ..." : "Get Quote"}
          </Button>
        </Form>
        <div className="toast-center">
          {this.state.end && !this.state.end_pin ? (
            <Toast className="d-inline-block m-1" bg="success">
              <Toast.Body className="text-white">
                We will get back to you as soon as possible!
              </Toast.Body>
            </Toast>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default FormComponent;

import React from "react";
import { Route, Redirect, HashRouter as Router } from "react-router-dom";
import LoginComponent from "./Components/AdminComponents/LoginComponent";
import GalleryPageComponent from "./Components/GalleryPageComponents/GalleryPageComponent";
import HomeComponent from "./Components/HomeComponent";
import ContactUs from "./Components/Static/Contact";
import Terms from "./Components/Static/Terms";
import Privacy from "./Components/Static/Privacy";
import Refund from "./Components/Static/Refund";
import Test from "./Test";
import SubWrapper from "./Components/SharedComponents/SabWrapper";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route
        path="/gallery"
        render={(props) => <GalleryPageComponent {...props} />}
      />
      <Route
        path="/pay"
        render={(props) => <SubWrapper {...props} />}
      />
      <Route path="/admin" component={LoginComponent} />
      <Route path="/contactUs" component={ContactUs} />
      <Route path="/terms" component={Terms} />
      <Route path="/policy" component={Privacy} />
      <Route path="/refundPolicy" component={Refund} />
      {/* <Redirect to={"/home"} /> */}
    </Router>
  );
}

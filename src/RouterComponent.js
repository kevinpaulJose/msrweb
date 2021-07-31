import React from "react";
import { Route, Redirect, HashRouter as Router } from "react-router-dom";
import LoginComponent from "./Components/AdminComponents/LoginComponent";
import GalleryPageComponent from "./Components/GalleryPageComponents/GalleryPageComponent";
import HomeComponent from "./Components/HomeComponent";

export default function Routes() {
  return (
    <Router>
      <Route path="/home" component={HomeComponent} />
      <Route
        path="/gallery"
        render={(props) => <GalleryPageComponent {...props} />}
      />
      <Route path="/admin" component={LoginComponent} />
      <Redirect to={"/home"} />
    </Router>
  );
}

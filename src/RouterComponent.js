import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/" component={HomeComponent} />
      {/* <Route exact path="/address" component={AddressSelect} />
      <Route
        path="/section/:sectionId"
        component={({ match }) => {
          return <Section section={match.params.sectionId} />;
        }}
      />
      <Route
        path="/category/:categoryId"
        component={({ match }) => {
          return <Category category={match.params.categoryId} />;
        }}
      />
      <Route
        path="/checkout/:userId"
        component={({ match }) => {
          return <Checkout section={match.params.userId} />;
        }}
      /> */}
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Redirect to={"/"} />
    </Switch>
  );
}

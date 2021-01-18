import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderImg from "./components/HeaderImg";
import Nav from "./components/Nav";
import "./App.css";

export default function Routter() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <HeaderImg />
            <h1>Teknoland Production</h1>
          </Route>
          {/* <Route path="/movie-detail/:id" component={MovieDetails} />
            <Route path="/movies-carousel/" component={Main} />
            <Route path="/movies-directors/" component={Directors} /> */}
          {/* <Redirect to="/movies" /> */}
        </Switch>
      </Router>
    </>
  );
}

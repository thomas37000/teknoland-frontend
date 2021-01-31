import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import ArtisteProfil from "./components/ArtisteProfil";
import VinyleDetail from "./components/VinyleDetail";
import Vinyles from "./components/Discographie";
import HeaderImg from "./components/HeaderImg";
import Artistes from "./components/Artistes";
import Nav from "./components/Nav";
import "./App.css";

export default function Routter(vinyle) {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <HeaderImg />
            <h1>Teknoland Production</h1>
          </Route>
          <Route path="/artistes">
            <h1>Teknoland Production Artistes</h1>
            <Artistes />
          </Route>
          <Route path="/vinyles">
            <h1>Teknoland Production Vinyles</h1>
            <Vinyles />
          </Route>
          <Route path="/admin">
            <h1>Admin</h1>
          </Route>
          <Route path="/artiste/:idartiste" component={ArtisteProfil} />
          <Route path="/teknoland/vinyle/:iddiscographie" component={VinyleDetail} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

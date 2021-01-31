import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

function Nav() {
  return (
    <>
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/admin">Admin</Link>
        <Link to="/">Home</Link>
        <Link to="/vinyles">Discographie</Link>
        <Link to="/artistes">Artistes</Link>
        <Link to="blog">Blog</Link>
        <Link to="/shop">Shop</Link>
      </header>
    </>
  );
}

export default Nav;

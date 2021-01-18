import React from "react";
import teknoland from "./img/teknoland-production.jpg";
import "../App.css";

const HeaderImg = () => {
  return (
    <>
      <section className="header2">
        <img src={teknoland} alt="teknoland production logo" />
      </section>
    </>
  );
};

export default HeaderImg;

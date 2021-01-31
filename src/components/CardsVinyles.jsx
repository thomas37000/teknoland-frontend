/* eslint-disable react/require-default-props */
import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./CardsArtistes.css";

export default function CardVinyles({ vinyle }) {
  return (
    <Link to={`/teknoland/vinyle/${vinyle.iddiscographie}`}>
      <div className="divCardArtiste">
        <div className="CardArtiste">
          <div>
            <img
              className="logoArtiste"
              src={vinyle.pochette}
              alt={`pochette ${vinyle.artistesID}`}
            />
          </div>
          <div className="c">
            <h3 className="d">{vinyle.vinyle}</h3>
            <h3 className="d">{vinyle.artistesID}</h3>
            <h4 className="d">{vinyle.genre}</h4>
            <h4 className="d">{vinyle.date}</h4>
            <h4 className="d">stock: </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

// CardArtistes.propTypes = {
//   search: PropTypes.string,
//   adherente: PropTypes.shape({
//     firstname: PropTypes.string.isRequired,
//     lastname: PropTypes.string.isRequired,
//     company_name: PropTypes.string,
//     volunteer: PropTypes.bool,
//     linkedin: PropTypes.string,
//     picture: PropTypes.string,
//     iduser: PropTypes.number,
//     username: PropTypes.string,
//   }).isRequired,
// };

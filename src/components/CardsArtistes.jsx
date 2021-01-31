/* eslint-disable react/require-default-props */
import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import "./CardsArtistes.css";

export default function CardArtistes({ artiste }) {
  return (
    <Link to={`/artiste/${artiste.idartiste}`}>
      <div className="divCardArtiste">
        <div className="CardArtiste">
          <div>
            <img className="logoArtiste" src={artiste.logo} alt={artiste.nom} />
          </div>
          <div className="c">
            <h3 className="d">{artiste.nom}</h3>
            <h4 className="d">{artiste.genre}</h4>
            <h4 className="d">{artiste.pays}</h4>
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

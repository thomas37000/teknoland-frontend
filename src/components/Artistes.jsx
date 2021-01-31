/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardArtistes from "./CardsArtistes";
import "./artistes.css";

export default function Artistes() {
  const [artistes, setArtistes] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/artistes`)
      .then((res) => res.data)
      .then((data) => {
        setArtistes(data);
        console.log("artistes", data);
      })
      .catch((error) => {
        let message;
        if (error.response.status === 401) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <div className="test">
      {artistes.map((artiste) => (
        <CardArtistes key={artiste.idartiste} artiste={artiste} />
      ))}
    </div>
  );
}

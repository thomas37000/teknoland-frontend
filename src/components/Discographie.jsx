/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
// import CardArtistes from "./CardsArtistes";
import CardVinyles from "./CardsVinyles";
import "./Discographie.css";

export default function Vinyles() {
  const [vinyles, setVinyles] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/vinyles`)
      .then((res) => res.data)
      .then((data) => {
        setVinyles(data);
        console.log("vinyles", data);
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
      {vinyles.map((vinyle) => (
        <CardVinyles key={vinyle.iddiscographie} vinyle={vinyle} />
      ))}
    </div>
  );
}

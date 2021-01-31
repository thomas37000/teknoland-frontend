/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./artistes.css";

export default function ArtisteProfil(props) {
  const [musicien, setMusicien] = useState([]);
  const id = props.match.params.idartiste;
  console.log(id);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/artistes/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setMusicien(data);
        console.log("artisteID", data);
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

  const { description, genre, logo, nom, pays } = musicien;

  return (
    <div>
      <div><img src={logo} alt={nom}/></div>
      <div>{nom}</div>
      <div>{genre}</div>
      <div>{description}</div>
      <div>{pays}</div>
    </div>
  );
}

/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./artistes.css";

export default function VinyleDetail(props) {
  const [vinyl, setVinyl] = useState([]);
  const id = props.match.params.iddiscographie;
  console.log(id);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/vinyles/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setVinyl(data);
        console.log("vinyleID", data);
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

  const { vinyle, genre, date, pochette, artistesID } = vinyl;
  

  return (
    <div>
      <div><img src={pochette} alt={vinyle}/></div>
      <div>{vinyle}</div>
      <div>{genre}</div>
      <div>{date}</div>
      <div>{artistesID}</div>
    </div>
  );
}

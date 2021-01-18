import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";
// import axios from "axios";
import teknoland from "../img/teknoland01.jpg";
import teknoland2 from "../img/teknoland02.jpg";
import teknoland3 from "../img/teknoland03-vinyl.jpg";
import teknoland4 from "../img/teknoland04.jpg";
import teknoland5 from "../img/teknoland05.jpg";
import teknoland6 from "../img/teknoland06-vinyl.jpg";
import teknoland7 from "../img/doomland.jpg";
import "./caroussel.css";

export default function Caroussel() {
  const [disques] = useState([{ id: 1, title: "" }]);
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 4 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  const disquesImg =  [
    { id: 1, image: teknoland },
    { id: 2, image: teknoland2 },
    { id: 3, image: teknoland3 },
    { id: 4, image: teknoland4 },
    { id: 5, image: teknoland5 },
    { id: 6, image: teknoland6 },
    { id: 7, image: teknoland7 },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {disques.map((disque) => (
        <img src={disquesImg.id} alt="disques" />
      ))}
    </Carousel>
  );
}

import React from "react";
import "./Breadcrum.css";
import arrow from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={arrow} alt="arrow" />
      SHOP
      <img src={arrow} alt="arrow" /> {product.category}{" "}
      <img src={arrow} alt="arrow" />
      {product.name}
    </div>
  );
};

export default Breadcrum;

import React from "react";
import Hero from "../Components/Hero/hero";
import Popular from "../Components/Popular/popular";
import Offer from "../Components/Offers/offer";
import NewCollection from "../Components/NewCollections/newCollection";
import NewsLetter from "../Components/NewsLetter/newsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;

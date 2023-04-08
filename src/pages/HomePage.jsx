import React from "react";
import Banner from "../components/banner/Banner";
import ProductList from "../components/products/ProductList";

import LastestProducts from "../components/productSlider/LastestProducts";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <LastestProducts></LastestProducts>
      <ProductList></ProductList>
      <Contact></Contact>
    </>
  );
};

export default HomePage;

import React from "react";
import { withRouter } from "react-router-dom";
import ProductCategories from "./productCategories";
import HomeLandingProducts from "./products/Home&LandingProducts";
import TopCover from "./topcover";
const homepage = () => {
  return (
    <div>
      <TopCover />
      <div className="container">
        <ProductCategories />
        <HomeLandingProducts />
      </div>
    </div>
  );
};

export default withRouter(homepage);

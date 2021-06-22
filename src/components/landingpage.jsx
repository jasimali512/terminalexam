// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
import React from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
// import MenuNavbar from './components/menuNavbar';
import ProductCategories from "./productCategories";
// import Products from "./products/products";
// import ProductOverview from "./productOverview";
import OnlyLandingProd from "./products/OnlyLandingProd";

import TopCover from "./topcover";
// import Footercomp from './components/footercomp';
function landingpage() {
  return (
    <div>
      <TopCover />
      <div className="container">
        <ProductCategories />
        <OnlyLandingProd />
      </div>
    </div>
  );
}

export default withRouter(landingpage);

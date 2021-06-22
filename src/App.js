import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import React from "react";
import "./App.css";
import MenuNavbar from "./components/menuNavbar";
// import ProductCategories from './components/productCategories';
// import ProductOverview from './components/productOverview';
import Footercomp from "./components/footercomp";
import landingpage from "./components/landingpage";
import homepage from "./components/homepage";
import features from "./components/features";
// import Blog from "./components/Blog";
// import about from "./components/about";
import NotFound from "./components/pagenotfound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import AllProducts from "./components/products/AllProducts";
import Shoes from "./components/products/Shoes";
import Watches from "./components/products/Watches";
import Bags from "./components/products/Bags";
import Women from "./components/products/Women";
import Men from "./components/products/Men";
import Shop from "./components/Shop";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Contact from "./components/contact";
// import BlogInspiringWays from "./components/BlogInspiringWays";
import { CookiesProvider } from "react-cookie";
// import BlogGreatBigList from "./components/BlogGreatBigList";
// import BlogWintertoSpringFashion from "./components/BlogWinter-to-SpringFashion";
import Accessories from "./components/products/Accessories";
// import AddToCart from "./components/AddToCart";
function App() {
  return (
    <Router>
      <CookiesProvider>
        <div>
          <ToastContainer />
          <MenuNavbar />
          <Switch>
            {/* <Route path="/AddToCart" component={AddToCart} /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home/AllProducts/:page?" component={AllProducts} />
            <Route path="/home/Shoes/:page?" component={Shoes} />
            <Route path="/home/Watches/:page?" component={Watches} />
            <Route path="/home/Bags/:page?" component={Bags} />
            <Route path="/home/Accessories/:page" component={Accessories} />
            <Route path="/home/Women/:page?" component={Women} />
            <Route path="/home/Men/:page?" component={Men} />
            <Route path="/home/:page?" component={homepage} />
            <Route path="/Shop" component={Shop} />
            <Route path="/addnew" component={NewProduct} />
            <Route path="/update/:id" component={UpdateProduct} />
            <Route path="/features" component={features} />
            {/* <Route
              path="/blog/BlogWinter-to-SpringFashion"
              component={BlogWintertoSpringFashion}
            />
            <Route path="/blog/BlogGreatBigList" component={BlogGreatBigList} />
            <Route
              path="/blog/BlogInspiringWays"
              component={BlogInspiringWays}
            />
            <Route path="/blog" component={Blog} /> */}
            {/* <Route path="/contact" component={Contact} />
            <Route path="/about" component={about} /> */}
            <Route path="/Not-Found" exact component={NotFound} />
            <Route path="/:page?" exact component={landingpage} />
            <Redirect to="/Not-Found" />
          </Switch>
          <Footercomp />
        </div>
      </CookiesProvider>
    </Router>
  );
}

export default App;

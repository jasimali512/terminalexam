import React from "react";
import Products from "./products";
const AllProducts = () => {
  return (
    <>
      <div className="blogcover">
        <h1>All Products</h1>
        <img
          className="img-responsive "
          src="../../task_1/blog-cover.jpg"
          alt="Clothes"
        />
      </div>
      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default AllProducts;

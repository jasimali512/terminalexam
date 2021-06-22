import React from "react";
import { Link, makeStyles } from "@material-ui/core";
const ProductCategories = () => {
  return (
    <div className="container">
      <div className="row" style={{ marginBottom: "3rem" }}>
        <div className="col-md-4">
          <Link
            href="/home/Women"
            // style={{
            //   fontSize: "2rem",
            //   fontWeight: "bold",
            //   textDecoration: "none",
            // }}
          >
            <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims ProductCategories ">
              <img
                className="ProductCategories__img"
                src="./task_1/women.jpg"
                alt="women"
                width="100%"
              />
              <div className="ProductCategories__overlay ProductCategories__overlay--primary">
                <div className="text ProductCategories__title">Women</div>
                <div className="text size ProductCategories__description">
                  Spring 2020
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            href="/home/Men"
            // style={{
            //   fontSize: "2rem",
            //   fontWeight: "bold",
            //   textDecoration: "none",
            // }}
          >
            {/* <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims">
              <img src="./task_1/men.jpg" alt="men" width="100%" />
              <div className="text">Men</div>
              <div className="text size">Spring 2020</div> */}
            <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims ProductCategories ">
              <img
                className="ProductCategories__img"
                src="./task_1/men.jpg"
                alt="men"
                width="100%"
              />
              <div className="ProductCategories__overlay ProductCategories__overlay--primary">
                <div className="text ProductCategories__title">Men</div>
                <div className="text size ProductCategories__description">
                  Spring 2020
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            href="/home/Accessories"
            // style={{
            //   fontSize: "2rem",
            //   fontWeight: "bold",
            //   textDecoration: "none",
            // }}
          >
            {/* <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims">
              <img src="./task_1/accessories.jpg" alt="men" width="100%" />
              <div className="text">Accessories</div>
              <div className="text size">Spring 2020</div> */}
            <div className="thumbnail shadow p-1 mb-2 bg-white rounded ims ProductCategories ">
              <img
                className="ProductCategories__img"
                src="./task_1/accessories.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="ProductCategories__overlay ProductCategories__overlay--primary">
                <div className="text ProductCategories__title">Accessories</div>
                <div className="text size ProductCategories__description">
                  Spring 2020
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductCategories;

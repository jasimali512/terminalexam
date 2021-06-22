import React from "react";
const Footercomp = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
            <h2 className="text-uppercase">Catergories</h2>
            <br />
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" id="fclr">
                  Women
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  Men
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  Watches
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
            <h2 className="text-uppercase">Help</h2>
            <br />
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" id="fclr">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  Returns
                </a>
              </li>
              <li>
                <a href="#!" id="fclr">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
            <h2 className="text-uppercase">Get in touch</h2>
            <br />
            <p id="tclr">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <a href="/" className="fa fa-facebook">
              {" "}
            </a>
            <a href="/" className="fa fa-twitter">
              {" "}
            </a>
            <a href="/" className="fa fa-instagram">
              {" "}
            </a>
          </div>
          <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
            <h2 className="text-uppercase">News Letter</h2>
            <br />
            <p>
              <form>
                <label id="tclr" for="email">
                  Email Address:{" "}
                </label>
                <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value="somantalha98@gmail.com"
                />
                <br />
              </form>
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(190, 179, 179, 0.2)" }}
      >
        © 2020 Copyright:
        <a
          className="text-light"
          href="https://colorlib.com/preview/#cozastore"
        >
          Copyright ©2021 All rights reserved | This template is made by Jasim
          Ali
        </a>
      </div>
    </footer>
  );
};

export default Footercomp;

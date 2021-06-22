import { Button } from "@material-ui/core";
// import { positions } from '@material-ui/system';
import React from "react";
import { Link } from "react-router-dom";
import userService from "../services/UserService";
const MenuNavbar = () => {
  const [navbar, setNavBar] = React.useState(false);
  const changeColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-sm fixed-top navbar-dark active"
            : "navbar navbar-expand-sm fixed-top navbar-dark"
        }
      >
        <div id="menu">
          <ul className="navbar-nav" style={{ height: "60px" }}>
            <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link active" id="clr" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/shop">
                Shop
              </Link>
            </li>
            {/* <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/features">
                Cart
              </Link>
            </li> */}
            {/* <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/blog">
                Blog
              </Link>
            </li> */}
            {/* <li className="nav-item " style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/about">
                About
              </Link>
            </li> */}
            {/* <li className="nav-item" style={{ padding: "9px" }}>
              <Link className="nav-link " id="clr" to="/addnew">
                Add new product
              </Link>
            </li> */}
            {!userService.isLoggedIn() ? (
              <>
                <li className="nav-item" style={{ padding: "9px" }}>
                  <Link className="nav-link " id="clr" to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item" style={{ padding: "9px" }}>
                  <Link className="nav-link " id="clr" to="/register">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" style={{ padding: "9px" }}>
                  <Link
                    className="nav-link "
                    id="clr"
                    onClick={(e) => {
                      userService.logout();
                      window.location.reload();
                    }}
                  >
                    Log out
                    {/* {userService.getLoggedInUser.name} */}
                    <p> {userService.getLoggedInUser.name} </p>
                  </Link>
                </li>
                <li className="nav-item " style={{ padding: "9px" }}>
                  <Link
                    className="nav-link "
                    id="clr"
                    // onClick={(e) => {
                    //   history.push("/features");
                    // }}
                    to="/features"
                  >
                    Shopping Cart
                  </Link>
                </li>
              </>
            )}
            {/* <li className="nav-item " > 
                    <Button variant="contained" color="primary" >Signup</Button>
                </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuNavbar;

// import React from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// const Women = () => {
//     return (
//         <div className="container">
//     <div>
//         <h1>Product Overview:</h1>
//     </div>
//     <div>
//     <ul class="list-inline">
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/AllProducts">All ptoducts</Link>
//     </li>
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/Women">Women</Link>
//     </li>
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/Men">Men</Link>
//     </li>
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/Bags">Bag</Link>
//     </li>
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/Shoes">Shoes</Link>
//     </li>
//     <li class="list-inline-item">
//         <Link className="nav-link active" id="clr"  to="/home/Watches">Watches</Link>
//     </li>
//     <li class="list-inline-item">
//             <Form inline>
//     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//     <Button variant="outline-success">Search</Button>
// </Form>
//     </li>
// </ul>
// </div>
//     <div className="row">
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/w1.jpg" alt="Women" width="100%" />
//         <div  className="centertext">Black Shirt and Handbag </div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize" src="../../task_1/w2.jpg" alt="Women" width="100%"/>
//         <div className="centertext" >Black Jeans and Shirt</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize" src="../../task_1/w3.jpg" alt="Women" width="100%"/>
//         <div className="centertext">Black Leather Jacket</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img  id="imgsize" src="../../task_1/w4.jpg" alt="Women" width="100%"/>
//         <div className="centertext">Long Sweat Shirt</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/w4.jpg" alt="Women" width="100%"/>
//         <div className="centertext" >Skinny Jeans with Black Shirt</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize" src="../../task_1/w6.jpg" alt="Women" width="100%"/>
//         <div  className="centertext">Heart Print Shirt with Jeans</div>
//     </div>
//     </div>
// </div>
// <div className="col-md-12 text-center bg-light">
//   <button type="button" id="btn" className="btn btn-primary">Load more</button>
// </div>
// </div>
//      );
// }

// export default Women;

import React from "react";
import SingleProduct from "./SingleProduct";
import { Fab, Grid, makeStyles } from "@material-ui/core";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Pagination from "@material-ui/lab/Pagination";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import { withRouter } from "react-router";
// import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));
// {product?.category === 'shirts' &&
//           <div>

//           </div>
//         }
const Women = (props) => {
  const handleNewProduct = () => {
    console.log(props);
    props.history.push("/addnew");
  };
  console.log(props);
  const value = "women";
  const [products, setProducts] = React.useState([]);

  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(9);
  const classes = useStyles();
  const page = props.match?.params?.page || 1;
  const getData = () => {
    productService
      .getProduct(page, perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, [page, perPage]);

  return (
    <>
      <div className="blogcover">
        <h1>Women</h1>
        <img
          className="img-responsive "
          src="../../task_1/blog-cover.jpg"
          alt="Clothes"
        />
      </div>
      <div className="container">
        <div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/AllProducts">
                All ptoducts
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/Women">
                Women
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/Men">
                Men
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/Bags">
                Bag
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/Shoes">
                Shoes
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="nav-link active" id="clr" to="/home/Watches">
                Watches
              </Link>
            </li>
            <li className="list-inline-item pull-right">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </li>
          </ul>
        </div>
        {userService.isAdmin() && (
          <Fab
            color="primary"
            aria-label="add"
            className={classes.addBtn}
            onClick={handleNewProduct}
          >
            <AddIcon />
          </Fab>
        )}
        <div className="container">
          {products.length == 0 ? (
            <p>No Product Found!</p>
          ) : (
            <Grid container spacing={3}>
              {products.map(
                (product, index) =>
                  product.category === value && (
                    <SingleProduct
                      key={index}
                      product={product}
                      // value={value}
                      onDelete={getData}
                    />
                  )
              )}
            </Grid>
          )}
          <Grid items xs={12}>
            <Pagination
              count={Math.ceil(total / perPage)}
              variant="outlined"
              shape="rounded"
              onChange={(e, value) => {
                console.log(value);
                console.log(props);
                props.history.push("/home/Women/" + value);
              }}
            />
            <p>Total produts: {total}</p>
            <div className="row">
              <p style={{ paddingRight: "5px" }}>Showing:</p>{" "}
              {total === 0 ? (
                0
              ) : (
                <p>
                  {(page - 1) * perPage + 1} to{" "}
                  {(page - 1) * perPage + products.length}{" "}
                </p>
              )}
            </div>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withRouter(Women);

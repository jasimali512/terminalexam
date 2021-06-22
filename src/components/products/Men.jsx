// import React from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// const Men = () => {
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
//         <div className="col-md-3">
//             <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//             <img id="imgsize" src="../../task_1/men1.jpg" alt="men" width="100%" />
//             <div className="centertext">Dress Shirt and jeans</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize" src="../../task_1/men2.jpg" alt="Men" width="100%"/>
//         <div className="centertext">Dress Shirt, jeans and coat</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/men3.jpg" alt="Men" width="100%"/>
//         <div className="centertext">Sweat Shirt and jeans</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/men4.jpeg" alt="Men" width="100%"/>
//         <div className="centertext">Brown three piece</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/men5.jpg" alt="Men" width="100%"/>
//         <div className="centertext">Blue Three Piece</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/men6.jpg" alt="Men" width="100%"/>
//         <div className="centertext">Jeans Trucker Jacket</div>
//     </div>
//     </div>
//     <div className="col-md-3">
//         <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
//         <img id="imgsize"  src="../../task_1/men7.png" alt="Men" width="100%"/>
//         <div  className="centertext">Off coat and Dress Pant</div>
//     </div>
//     </div>
// </div>
// <div className="col-md-12 text-center bg-light">
//   <button type="button" id="btn" className="btn btn-primary">Load more</button>
// </div>
// </div>
//      );
// }

// export default Men;

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
const Men = (props) => {
  const handleNewProduct = () => {
    console.log(props);
    props.history.push("/addnew");
  };
  console.log(props);
  const value = "men";
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
        <h1>Men</h1>
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
          <Fab color="primary" aria-label="add" className={classes.addBtn}>
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
                props.history.push("/home/Men/" + value);
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

export default withRouter(Men);

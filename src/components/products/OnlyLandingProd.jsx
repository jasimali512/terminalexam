import React from "react";
import AllInOnePRoducts from "./AllInOnePRoducts";
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
const OnlyLandingProd = (props) => {
  console.log(props);
  const handleNewProduct = () => {
    console.log(props);
    props.history.push("/addnew");
  };
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
    <div>
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
            {products.map((product, index) => (
              <AllInOnePRoducts
                key={index}
                product={product}
                onDelete={getData}
              />
            ))}
          </Grid>
        )}
        <Grid items xs={12} style={{ alignItems: "center" }}>
          <Pagination
            count={Math.ceil(total / perPage)}
            style={{ marginTop: "2rem" }}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => {
              console.log(value);
              console.log(props);
              props.history.push("/" + value);
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
  );
};

export default withRouter(OnlyLandingProd);

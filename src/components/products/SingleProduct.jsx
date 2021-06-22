import { Button, Grid, Link } from "@material-ui/core";
import React from "react";
import { useCookies } from "react-cookie";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import productService from "../../services/ProductService";
import userService from "../../services/UserService";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

const SingleProduct = (props) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const { product, onDelete, history } = props;
  console.log("in sigle product");

  const [cookies, setCookie, removeCookie] = useCookies(["Cart"]);
  React.useEffect(() => {
    if (!cookies.Cart) {
      setCookie("Cart", JSON.stringify([]));
    }
  }, []);
  const handleAddToCart = (product) => {
    console.log(product);
    let newCart = [...cookies.Cart];
    newCart.push(product);
    setCookie("Cart", JSON.stringify(newCart));
    toast.success(product.name + "is added to Cart");
  };
  return (
    <Grid item xs={4}>
      <div className="card" style={{ width: "15rem", height: "40rem" }}>
        <p>
          <img
            src={"http://localhost:4000/" + product.productImage}
            width="100%"
            style={{ height: "20rem" }}
          />
        </p>
        <div className="card-body">
          <h5 className="card-title">
            <p>
              <strong>Name:</strong> {product.name}
            </p>
          </h5>
          <p>
            <strong>Price: </strong>
            {product.price}{" "}
          </p>
          <p>
            <strong>Product Category: </strong>
            {product.category}
          </p>
          {userService.isLoggedIn() && (
            <>
              <p>
                <strong>Quantity: </strong>
                {product.quantity}{" "}
              </p>{" "}
              <hr />
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={(e) => {
                  productService
                    .deleteProduct(product._id)
                    .then((data) => {
                      console.log(data);
                      onDelete();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Delete
              </Button>{" "}
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  history.push("/update/" + product._id);
                }}
              >
                Edit
              </Button>
            </>
          )}
          {userService.isLoggedIn() && (
            <>
              <Button
                size="small"
                variant="contained"
                style={{
                  background: "black",
                  color: "white",
                  marginTop: "5px",
                }}
                onClick={(e) => {
                  handleAddToCart(product);
                }}
              >
                Add To Cart
              </Button>
            </>
          )}
          <div className={classes.root}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default withRouter(SingleProduct);

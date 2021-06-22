import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import productService from "../../services/ProductService";
import Admin from "../auth/Admin";
import Auth from "../auth/Auth";
// var name = " ";
// var quantity = 0;
// var price = 0;
// var category = "none";
const UpdateProduct = (props) => {
  const [name, setName] = React.useState(" ");
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [category, setCategory] = React.useState(" ");

  // console.log(props.match.params.id);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      console.log(data.name);
      // name = data.name;
      // quantity = data.quantity;
      // price = data.price;
      setName(data.name);
      setPrice(data.price);
      setCategory(data.category);
      setQuantity(data.quantity);
    });
  }, []);
  return (
    <Auth>
      <Admin>
        <Grid container spacing={20} justify="center">
          <Grid spacing={3}>
            <Grid item xs={12}>
              <h1>Update Product:</h1>
            </Grid>
            <br />
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <TextField
                label="Name:"
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                label="Price"
                fullWidth
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <TextField
                label="Product Category:"
                fullWidth
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <TextField
                label="Quantity"
                fullWidth
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <br />
            <Grid item xs={9}>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  productService
                    .updateProduct(id, { name, price, category, quantity })
                    .then(() => {
                      // console.log(data);
                      props.history.push("/home/AllProducts");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Update
              </Button>
            </Grid>
            <br />
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
      </Admin>
    </Auth>
  );
};

export default UpdateProduct;

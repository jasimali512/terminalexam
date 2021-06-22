const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Product } = require("../../models/product");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./uploads");
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    // var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//get products

router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 8);
  let skipRecords = perPage * (page - 1);
  let products = await Product.find().skip(skipRecords).limit(perPage);
  let total = await Product.countDocuments();
  return res.send({ total, products });
});
//get single products
// auth,
router.get("/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(product); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
// auth, admin,
router.put("/:id", validateProduct, async (req, res) => {
  console.log(req.body);
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  product.quantity = req.body.quantity;
  await product.save();
  return res.send(product);
});
//delete a record
router.delete("/:id", auth, admin, async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.send(product);
});
//Insert a record
// auth, admin,
router.post(
  "/",
  auth,
  admin,
  upload.single("productImage"),
  validateProduct,
  async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    // const url = req.protocol + "://" + req.get("host");
    // const error = new Error("Please choose image file!");
    // const file = req.file;
    let product = await Product.findOne({ name: req.body.name });
    if (product)
      return res.status(400).send("Product with same name already exist!");
    // if (!file) {
    //   error.httpStatusCode = 400;
    //   return error;
    // }

    product = new Product();
    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;
    product.quantity = req.body.quantity;
    product.productImage = req.file.filename;
    // url + "/public/" + req.file.filename;
    // req.file.path;
    await product
      .save()
      .then((result) => {
        res.status(201).json({
          message: " successfull!",
          userCreated: {
            productImage: result.productImage,
          },
        });
      })
      .catch((err) => {
        console.log(err),
          res.status(500).json({
            error: err,
          });
      });
    return res.send(product);
  }
);
module.exports = router;

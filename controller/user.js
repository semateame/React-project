const Product = require("../model/product");
const Order = require("../model/order");
const User = require("../model/user");
const ObjectId = require("mongodb").ObjectId;
const config = require("config");
const jwt = require("jsonwebtoken");

exports.getUser = (req, res, next) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};

exports.postOrder = async (req, res, next) => {
 let user= await User.findOne({email:req.body.email})
 let country= await Product.findOne({country:req.body.country})
  let totalPrice =  country.price + parseInt(req.body.amount)
  let  recevice = parseInt( req.body.amount) * country.rate

  user.addOrder(country)
  res.status(200).send(country)

};

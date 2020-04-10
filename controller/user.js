const Product = require('../model/product');
const Order = require('../model/order');
const User = require('../model/user');
const ObjectId = require("mongodb").ObjectId




// shows list of countries

exports.getProducts = (req, res, next) => {
    Product.find()
        .then(result => {
            res.json(result)
            })
    
        .catch(err => console.log(err));
};







exports.getOrders = (req, res, next) => {
    Order.find({ 'user.userId': req.params.user._id })
        .then(orders => {
        res.json(orders)
        })
        .catch(err => console.log(err));
};

exports.deleteHistory = (req, res) => {
    Order.deleteOne({ _id: req.body.orderId })
        .then(() => {
            res.status(200).send({sucess:true})
        })
        .catch(err=>res.status(400).send({sucess:false}))

}

exports.getPayment = (req, res, next) => {
    res.status(200).send({sucess:true})


}


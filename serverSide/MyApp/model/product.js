const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema= new Schema({

    price:{
        type:Number,
        required: true
    },

    country:{
        type:String,
        required:true,
    },

    rate :{
        type:Number,
        required:true
    }

})



module.exports = mongoose.model('money-products',productSchema)
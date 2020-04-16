const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },

    register_date: {
        type: Date,
        default: Date.now
    },
    banking: []
});



userSchema.methods.addOrder = function(product,tp,re){
  
    let arr = [...this.banking]
    arr.push(product)
this.banking = arr

    this.save()

}



module.exports = mongoose.model('User', userSchema)
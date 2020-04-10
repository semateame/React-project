const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    banking: {
        items: [
            {
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                amount: { type: Number, required: true }
            }
        ],
        totalprice: {
            type: Number,

        }
    }
});



module.exports = mongoose.model('User', userSchema)
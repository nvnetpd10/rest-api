const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    company: {
        type: String,
        enum: {
            values: ["apple" , 'samsung' , 'dell' , 'mi'],
        },
    },
});

module.exports = mongoose.model('Product' , productSchema);
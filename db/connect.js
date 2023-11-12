const mongoose = require("mongoose");

uri = "mongodb+srv://navneettiwari270103:Navneettiwari27@rest-api.oqn3t8u.mongodb.net/rest-api?retryWrites=true&w=majority";



const connectDB = () => {
    console.log('connect db');
    return mongoose.connect(uri , {
        
        
    });
} ;

module.exports = connectDB;
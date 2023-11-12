require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require('./db/connect');

const PORT = 3000;

const products_routes = require('./routes/products');


app.get("/", (req, res) => {
  res.send("hi . i am live");
});


// middleware or to set router
app.use('/api/products' , products_routes );


try {
     connectDB(process.env.MONGO_URL);
}
catch(error){
    console.log(error);
}



app.listen(PORT, () => {
    console.log(`${PORT} yes i am connected`);
  });
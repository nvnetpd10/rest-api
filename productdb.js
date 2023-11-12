require('dotenv').config();
const mongoose = require("mongoose");
const connectDB = require('./db/connect');
const Product = require('./models/product');
const ProductJson = require('./products.json');


async function seedDatabase() {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.create(ProductJson);
    console.log('Success: Data seeded to the database.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Make sure to close the database connection when done
    await mongoose.connection.close();
  }
}

// Call the asynchronous function
seedDatabase();

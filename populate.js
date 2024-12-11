import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connection.js";
import Product from "./models/product.js";
import { products } from "./products.js";

const start = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.create(products);
    console.log("Products Added Successfully!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

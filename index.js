import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connection.js";
import productRoutes from "./routes/products.js";

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Store API...");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

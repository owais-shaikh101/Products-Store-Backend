import express from "express";
import getAllProducts from "../controllers/products.js";
const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);

export default productRoutes;

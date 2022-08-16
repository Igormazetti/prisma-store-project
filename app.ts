import express from "express";
import router from "./src/modules/products/routes/ProductsRoutes";

const app = express();

app.use(express.json());
app.use("/products", router);

export default app;

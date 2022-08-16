import { Router } from "express";
import { ProductController } from "../controllers/ProductController";
import {
  createProductSchema,
  getProductByIdSchema,
} from "../schemas/productSchemas";

const router = Router();
const productController = new ProductController();

router.post("/", createProductSchema, productController.create);
router.get("/", productController.getAll);
router.get("/:id", getProductByIdSchema, productController.getById);

export default router;

import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { createProductSchema } from "../../../schemas/validationSchema";

const router = Router();
const createProductController = new CreateProductController();

router.post("/", createProductSchema, createProductController.create);

export default router;

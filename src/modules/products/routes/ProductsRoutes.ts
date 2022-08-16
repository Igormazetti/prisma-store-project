import { Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";

const router = Router();
const createProductController = new CreateProductController();

router.post("/", createProductController.create);

export default router;

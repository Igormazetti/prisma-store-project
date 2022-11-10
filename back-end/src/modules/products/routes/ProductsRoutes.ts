import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import {
  createProductSchema,
  getProductByIdSchema,
  updateProductSchema,
} from '../schemas/productSchemas';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', createProductSchema, productController.create);
productRouter.get('/', productController.getAll);
productRouter.get('/:id', getProductByIdSchema, productController.getById);
productRouter.put('/', updateProductSchema, productController.update);

export default productRouter;

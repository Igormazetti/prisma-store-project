import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProduct.service";
import { GetAllProductsService } from "../services/GetAllProducts.service";

export class ProductController {
  public async create(request: Request, response: Response) {
    const { title, quantity } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute(title, quantity);

    return response.status(200).json(product);
  }

  public async getAll(_request: Request, response: Response) {
    const getAllProducts = new GetAllProductsService();

    const products = await getAllProducts.execute();

    return response.status(200).json(products);
  }
}

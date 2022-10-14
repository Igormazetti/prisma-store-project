import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProduct.service";
import { GetAllProductsService } from "../services/GetAllProducts.service";
import { GetProductByIdService } from "../services/GetProductById.service";
import { UpdateProductByIdService } from "../services/UpdateProductById.service";

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

  public async getById(request: Request, response: Response) {
    const { id } = request.params;

    const getProductById = new GetProductByIdService();

    const product = await getProductById.execute(id);

    return response.status(200).json(product);
  }

  public async update(request: Request, response: Response) {
    const { id, quantity } = request.body;

    const updateProductById = new UpdateProductByIdService();

    const product = await updateProductById.execute(id, quantity);

    return response.status(200).json(product);
  }
}

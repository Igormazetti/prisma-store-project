import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProduct.service";

export class CreateProductController {
  public async create(request: Request, response: Response) {
    const { title, quantity } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute(title, quantity);

    return response.status(200).json(product);
  }
}

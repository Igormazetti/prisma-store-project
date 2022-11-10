import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProduct.service';
import GetAllProductsService from '../services/GetAllProducts.service';
import GetProductByIdService from '../services/GetProductById.service';
import UpdateProductByIdService from '../services/UpdateProductById.service';

export default class ProductController {
  private createProductService: CreateProductService;
  private getAllProductsService: GetAllProductsService;
  private getProductByIdService: GetProductByIdService;
  private updateProductService: UpdateProductByIdService;
  constructor() {
    this.createProductService = new CreateProductService();
    this.getAllProductsService = new GetAllProductsService();
    this.getProductByIdService = new GetProductByIdService();
    this.updateProductService = new UpdateProductByIdService();
  }

  public async create(request: Request, response: Response) {
    const { title, quantity } = request.body;

    const product = await this.createProductService.execute(title, quantity);

    return response.status(200).json(product);
  }

  public async getAll(_request: Request, response: Response) {
    const products = await this.getAllProductsService.execute();

    return response.status(200).json(products);
  }

  public async getById(request: Request, response: Response) {
    const { id } = request.params;

    const product = await this.getProductByIdService.execute(id);

    return response.status(200).json(product);
  }

  public async update(request: Request, response: Response) {
    const { id, quantity } = request.body;

    const product = await this.updateProductService.execute(id, quantity);

    return response.status(200).json(product);
  }
}

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../services/CreateProduct.service';
import GetAllProductsService from '../services/GetAllProducts.service';
import GetProductByIdService from '../services/GetProductById.service';
import UpdateProductByIdService from '../services/UpdateProductById.service';
import GetByCompanyIdService from '../services/GetProductsByCompanyId.service';

export default class ProductController {
  public async create(request: Request, response: Response) {
    const createProductService = container.resolve(CreateProductService);

    const product = await createProductService.execute(request.body);

    return response.status(200).json(product);
  }

  public async getAll(_request: Request, response: Response) {
    const getAllProductsService = container.resolve(GetAllProductsService);

    const products = await getAllProductsService.execute();

    return response.status(200).json(products);
  }

  public async getById(request: Request, response: Response) {
    const { id } = request.params;

    const getProductByIdService = container.resolve(GetProductByIdService);

    const product = await getProductByIdService.execute(id);

    return response.status(200).json(product);
  }

  public async update(request: Request, response: Response) {
    const { id, quantity } = request.body;

    const updateProductService = container.resolve(UpdateProductByIdService);

    const product = await updateProductService.execute(id, quantity);

    return response.status(200).json(product);
  }

  public async getByCompanyId(request: Request, response: Response) {
    const { id } = request.params;

    const getProductByCompanyIdService = container.resolve(
      GetByCompanyIdService,
    );

    const result = await getProductByCompanyIdService.execute(id);

    return response.status(200).json(result);
  }
}

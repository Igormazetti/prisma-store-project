import { ProductsRepository } from "../repositories/ProductsRepository";

export class GetAllProductsService {
  public async execute() {
    const createProduct = new ProductsRepository();

    const products = await createProduct.getAllProducts();

    return products;
  }
}

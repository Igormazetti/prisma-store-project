import { CreateProduct } from "../repositories/ProductsRepository";

export class GetAllProductsService {
  public async execute() {
    const createProduct = new CreateProduct();

    const products = await createProduct.getAllProducts();

    return products;
  }
}

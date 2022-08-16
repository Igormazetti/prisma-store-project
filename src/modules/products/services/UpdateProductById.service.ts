import { ProductsRepository } from "../repositories/ProductsRepository";

export class UpdateProductByIdService {
  public async execute(id: number, quantity: number) {
    const createProduct = new ProductsRepository();

    const product = await createProduct.updateProductById(id, quantity);

    return product;
  }
}

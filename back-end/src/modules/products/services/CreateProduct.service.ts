import { ProductsRepository } from "../repository/ProductsRepository";

export class CreateProductService {
  public async execute(title: string, quantity: number) {
    const createProduct = new ProductsRepository();

    const product = await createProduct.createProduct({ title, quantity });

    return product;
  }
}

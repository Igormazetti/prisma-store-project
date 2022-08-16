import { CreateProduct } from "../repositories/ProductsRepository";

export class CreateProductService {
  public async execute(title: string, quantity: number) {
    const createProduct = new CreateProduct();

    const product = await createProduct.createProduct({ title, quantity });

    return product;
  }
}

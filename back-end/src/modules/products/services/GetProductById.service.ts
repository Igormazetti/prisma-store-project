import { ProductsRepository } from "../repository/ProductsRepository";

export class GetProductByIdService {
  public async execute(id: string) {
    const createProduct = new ProductsRepository();

    const numberId = Number(id);

    const product = await createProduct.getProductById(numberId);

    return product;
  }
}

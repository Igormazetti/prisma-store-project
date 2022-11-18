import ProductsRepository from '../repository/ProductsRepository';

export default class UpdateProductByIdService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  public async execute(id: number, quantity: number) {
    const product = await this.productsRepository.updateProductById(
      id,
      quantity,
    );

    return product;
  }
}

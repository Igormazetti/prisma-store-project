import ProductsRepository from '../repository/ProductsRepository';

export default class CreateProductService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  public async execute(title: string, quantity: number) {
    const product = await this.productsRepository.createProduct({
      title,
      quantity,
    });

    return product;
  }
}

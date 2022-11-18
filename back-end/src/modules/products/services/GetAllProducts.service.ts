import ProductsRepository from '../repository/ProductsRepository';

export default class GetAllProductsService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  public async execute() {
    const products = await this.productsRepository.getAllProducts();

    return products;
  }
}

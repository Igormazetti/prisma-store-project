import ProductsRepository from '../repository/ProductsRepository';

export default class GetProductByIdService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  public async execute(id: string) {
    const numberId = Number(id);

    const product = await this.productsRepository.getProductById(numberId);

    return product;
  }
}

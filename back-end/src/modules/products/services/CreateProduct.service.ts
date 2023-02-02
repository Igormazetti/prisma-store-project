import ProductsRepository from '../repository/ProductsRepository';

interface IProducts {
  id?: number;
  title: string;
  quantity: number;
  companyId: number;
  value: number;
  imgUrl?: string;
  subtitle?: string;
}

export default class CreateProductService {
  private productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  public async execute(data: IProducts) {
    const product = await this.productsRepository.createProduct(data);

    return product;
  }
}

import { Products } from '@prisma/client';
import { prisma } from '../../../database/prismaClient';

interface IProducts {
  id?: number;
  title: string;
  quantity: number;
  companyId: number;
  value: number;
}

export default class ProductsRepository {
  private db: typeof prisma.products;
  constructor() {
    this.db = prisma.products;
  }

  public async createProduct({
    title,
    quantity,
    companyId,
    value,
  }: IProducts): Promise<Products> {
    const product = await this.db.create({
      data: {
        title,
        quantity,
        companyId,
        value,
      },
    });

    return product;
  }

  public async getAllProducts(): Promise<Products[]> {
    const products = await this.db.findMany();

    return products;
  }

  public async getProductById(id: number): Promise<Products | null> {
    const product = await this.db.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  public async updateProductById(
    id: number,
    quantityN: number,
  ): Promise<Products> {
    const product = await this.db.update({
      data: {
        quantity: quantityN,
      },
      where: {
        id,
      },
    });

    return product;
  }
}

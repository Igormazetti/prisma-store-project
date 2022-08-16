import { Products } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";

interface IProducts {
  id?: number;
  title: string;
  quantity: number;
}

export class ProductsRepository {
  public async createProduct({
    title,
    quantity,
  }: IProducts): Promise<Products> {
    const product = await prisma.products.create({
      data: {
        title,
        quantity,
      },
    });

    return product;
  }

  public async getAllProducts(): Promise<Products[]> {
    const products = await prisma.products.findMany();

    return products;
  }

  public async getProductById(id: number): Promise<Products | null> {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    return product;
  }

  public async updateProductById(
    id: number,
    quantityN: number
  ): Promise<Products> {
    const product = await prisma.products.update({
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

import { Company } from '@prisma/client';
import { prisma } from '../../../database/prismaClient';

interface ICompany {
  id?: number;
  name: string;
  employees?: string;
  product?: string;
}

export default class CompanyRepository {
  private db: typeof prisma.company;
  constructor() {
    this.db = prisma.company;
  }

  public async createCompany({ name }: ICompany): Promise<Company> {
    const user = await this.db.create({
      data: {
        name,
      },
    });

    return user;
  }

  public async getAllCompanies(): Promise<Company[]> {
    const company = await this.db.findMany();
    return company;
  }

  public async findById(id: number): Promise<Company | null> {
    const company = await this.db.findUnique({
      where: {
        id,
      },
    });

    return company;
  }
}

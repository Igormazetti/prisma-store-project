import { Users } from '@prisma/client';
import { prisma } from '../../../database/prismaClient';

interface IUsers {
  id?: number;
  name: string;
  email: string;
  password: string;
  companyId: number;
}

export default class UserRepository {
  private db: typeof prisma.users;
  constructor() {
    this.db = prisma.users;
  }

  public async createUser({
    name,
    email,
    password,
    companyId,
  }: IUsers): Promise<Users> {
    const user = await this.db.create({
      data: {
        name,
        email,
        password,
        companyId,
      },
    });

    return user;
  }

  public async getAllUsers(): Promise<Users[]> {
    const users = await this.db.findMany();
    return users;
  }

  public async findByEmail(email: string): Promise<Users | null> {
    const user = await this.db.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}

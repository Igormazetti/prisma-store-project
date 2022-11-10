import { Users } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";

interface IUsers {
  id?: number;
  name: string;
  email: string;
  password: string;
  companyId: number;
}

export class UserRepository {
  public async createUser({
    name,
    email,
    password,
    companyId,
  }: IUsers): Promise<Users> {
    const user = await prisma.users.create({
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
    const users = await prisma.users.findMany();
    return users;
  }

  public async getUserById(id: number): Promise<Users | null> {
    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}

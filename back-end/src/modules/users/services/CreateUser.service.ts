import { UserRepository } from "../repository/UserRepository";

export class CreateUserService {
  public async execute(
    name: string,
    email: string,
    password: string,
    companyId: number
  ) {
    const createUser = new UserRepository();

    const user = await createUser.createUser({
      name,
      email,
      password,
      companyId,
    });

    return user;
  }
}

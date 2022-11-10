import { UserRepository } from "../repository/UserRepository";
import { Encrypt } from "../../../utils/hash";

export class CreateUserService {
  public async execute(
    name: string,
    email: string,
    password: string,
    companyId: number
  ) {
    const createUser = new UserRepository();
    const encrypt = new Encrypt();

    const hashPassword = encrypt.encryptPassword(password);

    const user = await createUser.createUser({
      name,
      email,
      password: hashPassword,
      companyId,
    });

    return user;
  }
}

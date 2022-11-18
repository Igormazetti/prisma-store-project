import UserRepository from '../repository/UserRepository';
import Encrypt from '../../../utils/hash';

export default class CreateUserService {
  private userRepository: UserRepository;
  private encrypt: Encrypt;

  constructor() {
    this.userRepository = new UserRepository();
    this.encrypt = new Encrypt();
  }

  public async execute(
    name: string,
    email: string,
    password: string,
    companyId: number,
  ) {
    const hashPassword = this.encrypt.encryptPassword(password);

    const user = await this.userRepository.createUser({
      name,
      email,
      password: hashPassword,
      companyId,
    });

    return user;
  }
}

import UserRepository from '../repository/UserRepository';
import Encrypt from '../../../utils/hash';
import Token from '../../../utils/jwt';

export default class LoginService {
  private userRepository: UserRepository;
  private encrypt: Encrypt;

  constructor() {
    this.userRepository = new UserRepository();
    this.encrypt = new Encrypt();
  }

  public async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return { error: 404, message: 'Usuário não encontrado!' };
    }

    const checkHash = this.encrypt.checkPassword(password, user.password);

    if (!checkHash) return { error: 401, message: 'Senha inválida!' };

    const token = new Token();

    const createToken = token.createToken(String(user.id));

    return {
      user,
      token: createToken,
    };
  }
}

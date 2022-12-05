import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/CreateUser.service';
import LoginService from '../services/Login.service';

export default class UserController {
  public async create(request: Request, response: Response) {
    const { name, email, password, companyId } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute(
      name,
      email,
      password,
      companyId,
    );

    return response.status(200).json(user);
  }

  public async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const loginService = container.resolve(LoginService);

      const user = await loginService.execute(email, password);

      if (user.error) {
        return response.status(user.error).json(user.message);
      }

      return response.status(200).json(user);
    } catch (e) {
      console.log(e);
    }
  }
}

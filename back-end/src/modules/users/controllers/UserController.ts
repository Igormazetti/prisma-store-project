import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUser.service';
import LoginService from '../services/Login.service';
// import { GetProductByIdService } from "../services/GetProductById.service";
// import { UpdateProductByIdService } from "../services/UpdateProductById.service";

export default class ProductController {
  private createUserService: CreateUserService;
  private loginService: LoginService;

  constructor() {
    this.createUserService = new CreateUserService();
    this.loginService = new LoginService();
  }

  public async create(request: Request, response: Response) {
    const { name, email, password, companyId } = request.body;

    const user = await this.createUserService.execute(
      name,
      email,
      password,
      companyId,
    );

    return response.status(200).json(user);
  }

  public async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await this.loginService.execute(email, password);

    if (user.error) {
      return response.status(user.error).json(user.message);
    }

    return response.status(200).json(user);
  }

  // public async update(request: Request, response: Response) {
  //   const { id, quantity } = request.body;

  //   const updateProductById = new UpdateProductByIdService();

  //   const product = await updateProductById.execute(id, quantity);

  //   return response.status(200).json(product);
  // }
}

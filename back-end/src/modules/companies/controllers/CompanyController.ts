import { Request, Response } from 'express';
import CreateCompanyService from '../services/CreateCompany.service';
import FindCompanyService from '../services/FindCompany.service';

export default class CompanyController {
  private createCompanyService: CreateCompanyService;
  private findCompanyService: FindCompanyService;

  constructor() {
    this.createCompanyService = new CreateCompanyService();
    this.findCompanyService = new FindCompanyService();
  }

  public async create(request: Request, response: Response) {
    const { name } = request.body;

    const company = await this.createCompanyService.execute(name);

    return response.status(200).json(company);
  }

  public async findById(request: Request, response: Response) {
    const { id } = request.params;

    const company = await this.findCompanyService.execute(Number(id));

    if (!company) {
      return response.status(404).json({ message: 'Empresa não encontrada!' });
    }

    return response.status(200).json(company);
  }
}

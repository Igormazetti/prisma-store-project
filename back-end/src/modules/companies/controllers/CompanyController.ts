import { Request, Response } from 'express';
import CreateCompanyService from '../services/CreateCompany.service';
import FindCompanyService from '../services/FindCompany.service';
import { container } from 'tsyringe';

export default class CompanyController {
  public async create(request: Request, response: Response) {
    const { name } = request.body;
    const creteCompanyService = container.resolve(CreateCompanyService);

    const company = await creteCompanyService.create(name);

    return response.status(200).json(company);
  }

  public async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findCompanyService = container.resolve(FindCompanyService);

    const company = await findCompanyService.execute(Number(id));

    if (!company) {
      return response.status(404).json({ message: 'Empresa não encontrada!' });
    }

    return response.status(200).json(company);
  }
}

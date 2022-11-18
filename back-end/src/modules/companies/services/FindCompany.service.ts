import CompanyRepository from '../repository/CompanyRepository';

export default class FindCompanyService {
  private companyRepository: CompanyRepository;

  constructor() {
    this.companyRepository = new CompanyRepository();
  }

  public async execute(id: number) {
    const company = await this.companyRepository.findById(id);

    return company;
  }
}

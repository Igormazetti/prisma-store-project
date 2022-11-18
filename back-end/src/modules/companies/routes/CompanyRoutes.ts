import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';
import { createCompanySchema } from '../schemas/companySchemas';

const companyRouter = Router();
const companyController = new CompanyController();

companyRouter.post('/', createCompanySchema, companyController.create);
companyRouter.get('/:id', companyController.findById);

export default companyRouter;

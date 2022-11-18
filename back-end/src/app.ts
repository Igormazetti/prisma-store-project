import express from 'express';
import userRouter from 'modules/users/routes/UserRoutes';
import productRouter from './modules/products/routes/ProductsRoutes';
import companyRouter from './modules/companies/routes/CompanyRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use('/company', companyRouter);

export default app;

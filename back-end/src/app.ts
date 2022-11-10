import express from 'express';
import userRouter from 'modules/users/routes/UserRoutes';
import productRouter from './modules/products/routes/ProductsRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/user', userRouter);

export default app;

import { Router } from 'express';
import UserController from '../controllers/UserController';
import { createUserSchema, loginSchema } from '../schemas/userSchemas';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/', createUserSchema, userController.create);
userRouter.post('/', loginSchema, userController.login);

export default userRouter;

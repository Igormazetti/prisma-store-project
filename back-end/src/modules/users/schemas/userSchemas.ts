import { celebrate, Segments, Joi } from 'celebrate';

export const createUserSchema = celebrate({
  [Segments.BODY]: {
    id: Joi.number().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    companyId: Joi.number().required(),
  },
});

export const loginSchema = celebrate({
  [Segments.PARAMS]: {
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
});

export const getUserByIdSchema = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

export const updateUserSchema = celebrate({
  [Segments.BODY]: {
    id: Joi.number().required(),
    password: Joi.string().required(),
  },
});

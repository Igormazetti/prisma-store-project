import { celebrate, Segments, Joi } from 'celebrate';

export const createCompanySchema = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(5).required(),
  },
});

export const findCompanySchema = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

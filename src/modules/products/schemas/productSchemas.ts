import { celebrate, Segments, Joi } from "celebrate";

export const createProductSchema = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    quantity: Joi.number().required(),
  },
});

export const getProductByIdSchema = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
});

export const updateProductSchema = celebrate({
  [Segments.BODY]: {
    id: Joi.number().required(),
    quantity: Joi.number().required(),
  },
});

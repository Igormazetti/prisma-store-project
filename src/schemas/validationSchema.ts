import { celebrate, Segments, Joi } from "celebrate";

export const createProductSchema = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    quantity: Joi.number().required(),
  },
});

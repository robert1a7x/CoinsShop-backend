import Joi from 'joi';
import { Login, Product } from '../types';

const validateProductData = ({ name, description, price, image }: Product) =>
  Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().positive().greater(0).required(),
    image: Joi.string().required(),
  }).validate({ name, description, price, image });

const validateLogin = ({ email, password }: Login) =>
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
  }).validate({ email, password });

export { validateProductData, validateLogin };

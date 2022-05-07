import { NextFunction, Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const createdProduct = await productsService.createProduct(req.body);

  if (createdProduct.errCode) return next(createdProduct);

  return res.status(201).json(createdProduct);
};

export = {
  getAllProducts,
  createProduct,
};

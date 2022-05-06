import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

export = {
  getAllProducts,
};

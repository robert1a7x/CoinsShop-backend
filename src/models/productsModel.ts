import { Products } from '../db';
import { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await Products.findAll();

  return products as unknown as Product[];
};

export = { getAllProducts };

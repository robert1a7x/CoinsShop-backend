import productsModel from '../models/productsModel';
import { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getAllProducts();

  return products as unknown as Product[];
};

export = {
  getAllProducts,
};

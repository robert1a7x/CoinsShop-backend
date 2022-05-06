import productsModel from '../models/productsModel';
import { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getAllProducts();

  return products as unknown as Product[];
};

const createProduct = async (data: Product) => {
  const createdProduct = await productsModel.createProduct(data);

  return createdProduct;
};

export = {
  getAllProducts,
  createProduct,
};

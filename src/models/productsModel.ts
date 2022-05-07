import { Products } from '../db';
import { Product } from '../types';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await Products.findAll();

  return products as unknown as Product[];
};

const createProduct = async (data: Product): Promise<Product> => {
  const createdProduct = await Products.create({
    ...data,
    createdAt: new Date(),
  });

  return createdProduct as unknown as Product;
};

export = { getAllProducts, createProduct };

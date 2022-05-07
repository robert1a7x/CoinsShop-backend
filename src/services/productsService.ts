import productsModel from '../models/productsModel';
import { Product } from '../types';
import { ErrCode } from '../types';
import { validateProductData } from '../validations/joiValidations';

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productsModel.getAllProducts();

  return products;
};

const createProduct = async (data: Product): Promise<Product | ErrCode> => {
  const { error } = validateProductData(data);

  if (error) return { errCode: 400, message: error.message };

  const createdProduct = await productsModel.createProduct(data);

  return createdProduct;
};

export = {
  getAllProducts,
  createProduct,
};

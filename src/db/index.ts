import { Sequelize } from 'sequelize';
import ProductsModel from './products';
import UsersModel from './users';
import dotenv from 'dotenv';
dotenv.config();

const URI =
  process.env.MYSQL_URI || 'mysql://root:root@localhost:3306/CoinsShop';

const sequelize = new Sequelize(URI, { dialect: 'mysql' });

export const Products = ProductsModel(sequelize);

export const Users = UsersModel(sequelize);

export default sequelize;

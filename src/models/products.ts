import { Sequelize, DataTypes } from 'sequelize';

const ProductsModel = (sequelize: Sequelize) => {
  const model = sequelize.define(
    'products',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      coins: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false, tableName: 'users' }
  );

  return model;
};

export default ProductsModel;

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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE(3),
      },
    },
    { timestamps: false, tableName: 'products' }
  );

  return model;
};

export default ProductsModel;

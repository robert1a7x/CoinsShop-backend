import { Sequelize, DataTypes } from 'sequelize';

const UsersModel = (sequelize: Sequelize) => {
  const model = sequelize.define(
    'users',
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
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
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

export default UsersModel;

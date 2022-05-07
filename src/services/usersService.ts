import usersModel from '../models/usersModel';
import { User } from '../types';

const getAllUsers = async (): Promise<User[]> => {
  const users = usersModel.getAllUsers();

  return users;
};

export = {
  getAllUsers,
};

import { Users } from '../db';
import { User } from '../types';

const getAllUsers = async (): Promise<User[]> => {
  const users = Users.findAll();

  return users as unknown as User[];
};

export = {
  getAllUsers,
};

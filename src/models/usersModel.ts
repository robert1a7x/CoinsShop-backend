import { Users } from '../db';
import { User } from '../types';
import { Login } from '../types';

const getUser = async ({ email }: Login): Promise<User | null> => {
  const user = await Users.findOne({ where: { email } });

  return user as unknown as User | null;
};

const getAllUsers = async (): Promise<User[]> => {
  const users = Users.findAll();

  return users as unknown as User[];
};

export = {
  getAllUsers,
  getUser,
};

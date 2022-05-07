import usersModel from '../models/usersModel';
import { ErrCode, User } from '../types';

const getAllUsers = async (): Promise<User[]> => {
  const users = usersModel.getAllUsers();

  return users;
};

const updateCoins = async (
  id: number,
  coins: number
): Promise<number | ErrCode> => {
  if (coins < 0) return { errCode: 400, message: 'Coins cannot be negative' };

  const updatedCoins = await usersModel.updateCoins(id, coins);

  return updatedCoins;
};

export = {
  getAllUsers,
  updateCoins,
};

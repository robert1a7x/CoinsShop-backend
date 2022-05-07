import { Request, Response, NextFunction } from 'express';
import usersService from '../services/usersService';

const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  const users = await usersService.getAllUsers();

  return res.status(200).json(users);
};

const updateCoins = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { id } = req.params;
  const { coins } = req.body;

  const updatedCoins: any = await usersService.updateCoins(+id, coins);

  if (updatedCoins.errCode) return next(updatedCoins);

  return res.status(201).json(updatedCoins);
};

export = {
  getAllUsers,
  updateCoins,
};

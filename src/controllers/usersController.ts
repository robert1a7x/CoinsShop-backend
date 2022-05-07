import { Request, Response } from 'express';
import usersService from '../services/usersService';

const getAllUsers = async (_req: Request, res: Response): Promise<Response> => {
  const users = await usersService.getAllUsers();

  return res.status(200).json(users);
};

export = {
  getAllUsers,
};

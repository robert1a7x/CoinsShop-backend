import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const user: any = await loginService.login(req.body);

  if (user.errCode) return next(user);

  return res.status(200).json(user);
};

export = {
  login,
};

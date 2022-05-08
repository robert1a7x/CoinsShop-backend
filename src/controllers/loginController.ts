import { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';

const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token: any = await loginService.login(req.body);

  if (token.errCode) return next(token);

  return res.status(200).json({ token });
};

export = {
  login,
};

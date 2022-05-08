import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../auth/createAndValidateToken';

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decode = validateToken(token);

  if (!decode) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

export default authMiddleware;

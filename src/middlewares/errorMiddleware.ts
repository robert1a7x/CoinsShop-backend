import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  err: { errCode: number; message: 'string' },
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.errCode) {
    return res.status(err.errCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};

export default errorMiddleware;

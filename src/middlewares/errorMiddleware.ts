import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  err: { errCode: number; message: 'string' },
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  if (err.errCode) {
    return res.status(err.errCode).json({ error: err.message });
  }

  return res.status(500).json({ error: 'Internal server error' });
};

export default errorMiddleware;

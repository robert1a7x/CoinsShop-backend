import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createToken = (payload: object) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    return decoded;
  } catch (error) {
    return false;
  }
};

export { createToken, validateToken };

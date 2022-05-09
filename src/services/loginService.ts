import { createToken } from '../auth/createAndValidateToken';
import usersModel from '../models/usersModel';
import { ErrCode, Login } from '../types';
import { validateLogin } from '../validations/joiValidations';

const login = async (loginData: Login): Promise<string | ErrCode> => {
  const { error } = validateLogin(loginData);

  if (error) return { errCode: 400, message: error.message };

  const user = await usersModel.getUser(loginData);

  if (!user) return { errCode: 401, message: 'Invalid login or password' };

  const token = createToken({ ...user });

  return token;
};

export = { login };

import { createToken } from '../auth/createAndValidateToken';
import usersModel from '../models/usersModel';
import { ErrCode, Login } from '../types';
import { validateLogin } from '../validations/joiValidations';

const login = async (loginData: Login): Promise<object | ErrCode> => {
  const { error } = validateLogin(loginData);

  if (error) return { errCode: 400, message: error.message };

  const user = await usersModel.getUser(loginData);

  if (!user) return { errCode: 401, message: 'Invalid login or password' };

  const token = createToken({ ...user });

  const { id, name, email, role, coins } = user;

  const userObject = {
    user: { id, name, email, role, coins },
    token,
  };

  return userObject;
};

export = { login };

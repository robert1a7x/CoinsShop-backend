import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import Sinon from 'sinon';
import usersModel from '../../src/models/usersModel';
import loginService from '../../src/services/loginService';
import { listOfUsersMock, loginDataMock } from '../mocks';

describe('LOGIN Service tests', () => {
  describe('login method', () => {
    describe('When the login is successfull', () => {
      before(() => {
        Sinon.stub(usersModel, 'getUser').resolves(listOfUsersMock[0] as any);
        Sinon.stub(jwt, 'sign').resolves('9821y918y87387239823y80193892');
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return a token', async () => {
        const token = await loginService.login(loginDataMock);
        expect(token).to.be.equal('9821y918y87387239823y80193892');
      });
    });

    describe('When some attribute is missing or wrong in the request', () => {
      it('Should return an object with error code 400', async () => {
        const wrongLoginData: any = { email: 'email@email.com' };

        const token: any = await loginService.login(wrongLoginData);
        expect(token).to.have.property('errCode');
        expect(token.errCode).to.be.equal(400);
      });
    });

    describe('When the user does not exist in the database', () => {
      before(() => {
        Sinon.stub(usersModel, 'getUser').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return an object with error code 401 and message: "Invalid login or password"', async () => {
        const user: any = await loginService.login(loginDataMock);
        expect(user).to.have.property('errCode');
        expect(user.message).to.be.equal('Invalid login or password');
      });
    });
  });
});

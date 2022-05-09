import { expect } from 'chai';
import Sinon from 'sinon';
import usersModel from '../../src/models/usersModel';
import usersService from '../../src/services/usersService';
import { listOfUsersMock } from '../mocks';

describe('USERS Service tests', () => {
  describe('getAllUsers method', () => {
    before(() => {
      Sinon.stub(usersModel, 'getAllUsers').resolves(listOfUsersMock as any);
    });

    after(() => {
      Sinon.restore();
    });

    it('should return a list of users', async () => {
      const users = await usersService.getAllUsers();
      expect(users).to.deep.equal(listOfUsersMock);
    });
  });

  describe('updateCoins method', () => {
    describe('When the coins are updated successfully', () => {
      before(() => {
        Sinon.stub(usersModel, 'updateCoins').resolves(1 as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return 1', async () => {
        const user = await usersService.updateCoins(1, 10);
        expect(user).to.be.equal(1);
      });
    });

    describe('When the coins are not updated', () => {
      before(() => {
        Sinon.stub(usersModel, 'updateCoins').resolves(0 as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return 0', async () => {
        const user = await usersService.updateCoins(1, 10);
        expect(user).to.be.equal(0);
      });
    });

    describe('When the request is made with negative coins', () => {
      it('Should return an object with error code 400 and message: "Coins cannot be negative"', async () => {
        const user: any = await usersService.updateCoins(1, -10);
        expect(user).to.have.property('errCode');
        expect(user.message).to.be.equal('Coins cannot be negative');
      });
    });
  });
});

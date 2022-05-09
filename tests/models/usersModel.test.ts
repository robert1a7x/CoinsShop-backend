import { expect } from 'chai';
import Sinon from 'sinon';
import { Users } from '../../src/db';
import usersModel from '../../src/models/usersModel';
import { listOfUsersMock } from '../mocks';

describe('USERS Model tests', () => {
  describe('getAllUsers method', () => {
    before(() => {
      Sinon.stub(Users, 'findAll').resolves(listOfUsersMock as any);
    });

    after(() => {
      Sinon.restore();
    });

    it('should return a list of users', async () => {
      const users = await usersModel.getAllUsers();
      expect(users).to.deep.equal(listOfUsersMock);
    });
  });

  describe('getUser method', () => {
    describe('When it finds a user', () => {
      before(() => {
        Sinon.stub(Users, 'findOne').resolves(listOfUsersMock[0] as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return an object with the user data', async () => {
        const user = await usersModel.getUser(listOfUsersMock[0]);
        expect(user).to.deep.equal(listOfUsersMock[0]);
      });
    });

    describe('When no user is found', () => {
      before(() => {
        Sinon.stub(Users, 'findOne').resolves(null);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return null', async () => {
        const user = await usersModel.getUser(listOfUsersMock[0]);
        expect(user).to.be.null;
      });
    });
  });

  describe('updateCoins method', () => {
    describe('When the coins are updated successfully', () => {
      before(() => {
        Sinon.stub(Users, 'update').resolves([1] as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return 1', async () => {
        const user = await usersModel.updateCoins(1, 10);
        expect(user).to.be.equal(1);
      });
    });

    describe('When the coins are not updated', () => {
      before(() => {
        Sinon.stub(Users, 'update').resolves([0] as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return 0', async () => {
        const user = await usersModel.updateCoins(1, 10);
        expect(user).to.be.equal(0);
      });
    });
  });
});

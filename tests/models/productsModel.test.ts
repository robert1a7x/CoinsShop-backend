import { expect } from 'chai';
import Sinon from 'sinon';
import { Products } from '../../src/db';
import productsModel from '../../src/models/productsModel';
import { listOfProductsMock } from '../mocks';

describe('Products Model tests', () => {
  describe('getAllProducts method', () => {
    before(() => {
      Sinon.stub(Products, 'findAll').resolves(listOfProductsMock as any);
    });

    after(() => {
      Sinon.restore();
    });

    it('should return a list of products', async () => {
      const products = await productsModel.getAllProducts();
      expect(products).to.deep.equal(listOfProductsMock);
    });
  });

  describe('createProduct method', () => {
    describe('When a product is successfully created', () => {
      before(() => {
        Sinon.stub(Products, 'create').resolves(listOfProductsMock[0] as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return an object with the product data', async () => {
        const products = await productsModel.createProduct(
          listOfProductsMock[0] as any
        );
        expect(products).to.deep.equal(listOfProductsMock[0]);
      });
    });
  });
});

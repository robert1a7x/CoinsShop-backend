import { expect } from 'chai';
import Sinon from 'sinon';
import productsModel from '../../src/models/productsModel';
import productsService from '../../src/services/productsService';
import { listOfProductsMock } from '../mocks';

describe('Products Service tests', () => {
  describe('getAllProducts method', () => {
    before(() => {
      Sinon.stub(productsModel, 'getAllProducts').resolves(
        listOfProductsMock as any
      );
    });

    after(() => {
      Sinon.restore();
    });

    it('should return a list of products', async () => {
      const products = await productsService.getAllProducts();
      expect(products).to.deep.equal(listOfProductsMock);
    });
  });

  describe('createProduct method', () => {
    describe('When a product is successfully created', () => {
      before(() => {
        Sinon.stub(productsModel, 'createProduct').resolves(
          listOfProductsMock[0] as any
        );
      });

      after(() => {
        Sinon.restore();
      });

      it('Should return an object with the product data', async () => {
        const products = await productsService.createProduct(
          listOfProductsMock[0] as any
        );
        expect(products).to.deep.equal(listOfProductsMock[0]);
      });
    });

    describe('When some attribute is missing or wrong in the request', () => {
      it('Should return an object with error code 400', async () => {
        const wrongProductData = { name: 'test', price: 11 };

        const products: any = await productsService.createProduct(
          wrongProductData as any
        );
        expect(products).to.have.property('errCode');
        expect(products.errCode).to.be.equal(400);
      });
    });
  });
});

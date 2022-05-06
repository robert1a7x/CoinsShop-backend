import express from 'express';
import productsController from './controllers/productsController';

const app = express();

//req middlewares
app.use(express.json());

// routes
app.get('/products', productsController.getAllProducts);

// res middlewares

export default app;

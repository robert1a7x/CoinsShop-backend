import express from 'express';
require('express-async-errors');
import productsController from './controllers/productsController';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

//req middlewares
app.use(express.json());

// routes
app.get('/products', productsController.getAllProducts);

// res middlewares
app.use(errorMiddleware);

export default app;

import express from 'express';
require('express-async-errors');
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

//req middlewares
app.use(express.json());

// routes
app.get('/products', productsController.getAllProducts);
app.post('/products', productsController.createProduct);

app.put('/users/:id', usersController.updateCoins);
app.get('/users', usersController.getAllUsers);

// res middlewares
app.use(errorMiddleware);

export default app;

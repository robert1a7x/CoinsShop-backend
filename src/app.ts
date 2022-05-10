import express from 'express';
require('express-async-errors');
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import errorMiddleware from './middlewares/errorMiddleware';
import loginController from './controllers/loginController';
import authMiddleware from './middlewares/authMiddlware';
import cors from 'cors';

const app = express();

//req middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/products', authMiddleware, productsController.getAllProducts);
app.post('/products', authMiddleware, productsController.createProduct);

app.put('/users/:id', authMiddleware, usersController.updateCoins);
app.get('/users', authMiddleware, usersController.getAllUsers);

app.post('/login', loginController.login);

// res middlewares
app.use(errorMiddleware);

export default app;

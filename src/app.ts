import express from 'express';

const app = express();

//req middlewares
app.use(express.json());

// routes
app.get('/', (_req, res) => {
  res.send('oi');
});

// res middlewares

export default app;

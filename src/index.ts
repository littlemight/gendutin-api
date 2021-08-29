import express from 'express';
import dotenv from 'dotenv';
import { generateTopik } from './common/topik';
dotenv.config();

const app = express();

app.get('/topik', (req, res) => {
  res.send({
    topik: generateTopik(),
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

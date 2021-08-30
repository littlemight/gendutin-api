import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { generateTopik } from './common/topik';
dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get('/topik', (req, res) => {
  res.send({
    topik: generateTopik(),
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

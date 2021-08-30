import express from 'express';
import cors from 'cors';
import { generateTopik } from './common/topik';
import { env } from './common/env';

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get('/topik', async (req, res) => {
  res.send({
    topik: await generateTopik(),
  });
});

const port = env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

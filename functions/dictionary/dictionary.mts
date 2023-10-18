import fs from 'fs';
import path from 'path';
import express from 'express';
import process from 'process';
import serverless from 'serverless-http';

const app = express();
const port = process.env.PORT || 3000;

app.get('/dictionary', (_req, res) => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const filePath = path.join(__dirname, '/dictionary.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading the dictionary file');
    } else {
      res.set('Content-Type', 'text/plain');
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/.netlify/functions/api', app);

const handler = () => serverless(app);

export { handler };

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3100

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`node-demo listening on http://localhost:${port}`)
})

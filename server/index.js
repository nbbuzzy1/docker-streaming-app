const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hi There');
});

app.get('/get', (req, res) => {
  res.send({ status: 'success', message: 'basic message ' });
});

app.listen('3001', () => console.log('server running'));

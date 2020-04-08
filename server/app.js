/* eslint-disable prettier/prettier */
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.send('Server is open');
});

app.listen(PORT, () => {
  console.log('Server is started on the port ' + PORT);
});
const express = require('express');
const Banana = require('./controler/banana.controler');
const app = express();

app.use(express.json());

app.get('/bananas', Banana.getAll);

module.exports = app;
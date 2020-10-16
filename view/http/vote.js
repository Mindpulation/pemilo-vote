const { tot, getV } = require('../../controller/index');

const express = require('express');
const app = express.Router();

app.post('/get', getV);
app.post('/len', tot);

module.exports = app;
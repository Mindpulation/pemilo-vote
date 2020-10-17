const { tot, getV, checkTotal, checkGet } = require('../../controller/index');

const express = require('express');
const app = express.Router();

app.post('/len', checkTotal ,tot);
app.post('/get', checkGet ,getV);

module.exports = app;
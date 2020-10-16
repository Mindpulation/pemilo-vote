const { total, getVote } = require('../../controller/index');

const express = require('express');
const app = express.Router();

app.post('/get', getVote);
app.post('/len', total);

module.exports = app;
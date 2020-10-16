const { saveVote, total, getVote } = require('../../controller/mongo');

const express = require('express');
const app = express.Router();

app.post('/send', saveVote);
app.post('/get', getVote);
app.post('/len', total);

module.exports = app;
const { checkSchemaSave, checkSchemaGet, checkSchemaTotal } = require('../validator/index');
const { saveVote, total, getVote } = require('./mongo');

const save = async (req, res) => {    
  const data = await saveVote(req.body);
  res.send(data);
};
const tot = async (req, res) => {
  const data = await total(req.body);
  res.send(data);
}
const getV = async (req, res) => {
  const data = await getVote(req.body);
  res.send(data);
}
const checkSave = (req, res, next) => {(checkSchemaSave(req.body)) ? next() : res.send({res:"Salah Format"});}
const checkGet = (req, res, next) => {(checkSchemaGet(req.body)) ? next() : res.send({res:"Salah Format"});}
const checkTotal = (req, res, next) => {(checkSchemaTotal(req.body)) ? next() : res.send({res:"Salah Format"});}

module.exports = { save, tot, getV, checkSave, checkGet, checkTotal };
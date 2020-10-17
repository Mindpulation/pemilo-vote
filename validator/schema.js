const joi = require('joi');

const schemaSave = joi.object().keys({
  emailAnggota : joi.string().required(),
  codeRoom : joi.string().required(),
  idCandidate : joi.string().required()
});

const schemaTotal = joi.object().required();

const schemaGet = joi.object().keys({
  page : joi.number().required(),
  count : joi.number().required(),
  param : joi.object().required()
});

module.exports = { schemaSave, schemaTotal, schemaGet };
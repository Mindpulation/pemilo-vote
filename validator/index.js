const { schemaGet, schemaSave, schemaTotal } = require('./schema');

const checkSchemaGet = (param) => {
  const { value, error } = schemaGet.validate(param);
  return (error === undefined) ? true : false;
}

const checkSchemaSave = (param) => {
  const { value, error } = schemaSave.validate(param);
  return (error === undefined) ? true : false;
}

const checkSchemaTotal = (param) => {
  const { value, error } = schemaTotal.validate(param);
  return (error === undefined) ? true : false;
}

module.exports = {checkSchemaGet, checkSchemaSave, checkSchemaTotal};
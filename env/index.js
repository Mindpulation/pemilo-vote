const env = require('dotenv');

env.config();

const p = process.env;

module.exports = {
  mongoUrl : p.mongo_url,
  mongoCol : p.mongo_col,
  mongoDB : p.mongo_db,
  port : p.port
}


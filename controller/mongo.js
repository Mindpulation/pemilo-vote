const { mongoUrl, mongoDB, mongoCol } = require('../env/index');
const { Mongooo, Save, Find } = require('mongooo');
const { findPage, getCount } = Find;
const { save } = Save;


const { generateData, getLen, getPage, getParam } = require('./helper');

const mongo = new Mongooo();

let con;

(async()=>{  
  con = await mongo.setup(mongoUrl,mongoDB,mongoCol);
})();

const saveVote = async (param) => {  
  const param2 = generateData(param);
  const data  = await save(con, param2);  
  return data;
};

const total = async (param) => {
  const data = await getCount(con, param);
  return {count:data};
}

const getVote = async (param) => {
  const page  = getPage(param);
  const count = getLen(param);
  const param2 = getParam(param);
  const data  = await findPage(con, page, count, param2, { idCandidate : 1, date : 1 }, { date : -1 });  
  return (data === null) ? false : data;
}

module.exports = { saveVote, total, getVote };



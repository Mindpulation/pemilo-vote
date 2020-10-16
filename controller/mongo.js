const { Mongooo, Save, Find } = require('mongooo');
const { findPage, getCount } = Find;
const { save } = Save;

const { generateData, getLen, getPage, getParam } = require('./helper');

const mongo = new Mongooo();

let con;

(async()=>{
  con = await mongo.setup('mongodb://127.0.0.1:27017/','voteDB', 'vote');
})();

const saveVote = async (param) => {  
  const param = generateData(param);
  const data  = await save(con, param);  
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
  const data  = await findPage(con, page, count, { codeRoom : param2 }, { idCandidate : 1, date : 1 }, { date : -1 });  
  return (data === null) ? false : data;
}

module.exports = { saveVote, total, getVote };



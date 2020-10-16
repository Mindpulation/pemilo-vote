const { Mongooo, Save, Find, Compress } = require('mongooo');
const { findPage, getCount } = Find;
const { gzip } = Compress;
const { save } = Save;

const { generateData, getCount, getPage, getParam } = require('./helper');

const mongo = new Mongooo();

let con;

(async()=>{
  con = await mongo.setup('mongodb://127.0.0.1:27017/','voteDB', 'vote');
})();

const saveVote = async (req, res) => {  
  const param = generateData(req.body);
  const data  = await save(con, param);  
  res.send(data);
};

const total = async (req, res) => {
  const data = await getCount(con, req.body);
  res.send({count:data});
}

const getVote = async (req, res) => {
  const page  = getPage(req.body);
  const count = getCount(req.body);
  const param = getParam(req.body);
  const data  = await findPage(con, page, count, { codeRoom : param }, { idCandidate : 1, date : 1 }, { date : -1 });  
  (data === null) ? res.send(false) : res.send(data);
}

module.exports = { saveVote, total, getVote };




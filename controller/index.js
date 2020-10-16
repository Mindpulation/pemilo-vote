const { saveVote, total, getVote } = require('./mongo');

const save = async (req, res) => {    
  const data = await saveVote(req.body);
  res.send(data);
};

const tot = async (req, res) => {
  const data = await total(req.body);
  res.send({count:data});
}

const getV = async (req, res) => {
  const data = await getVote(req.body);
  res.send(data);
}

module.exports = { save, tot, getV };
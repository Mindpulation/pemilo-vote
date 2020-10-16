const { saveVote, total, getVote } = require('./mongo');

const saveVote = async (req, res) => {    
  const data = await saveVote(req.body);
  res.send(data);
};

const total = async (req, res) => {
  const data = await total(req.body);
  res.send({count:data});
}

const getVote = async (req, res) => {
  const data = await getVote(req.body);
  res.send(data);
}

module.exports = { saveVote, total, getVote };
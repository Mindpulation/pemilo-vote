const { saveVote } = require('../../controller/mongo');

const { Route } = require('wrap_socket');
const app = new Route();

app.add('sendVote', async (io, eng, param)=>{
  await saveVote(param);
  io.in(param.room).emit('getVote', {idCandidate:param.idCandidate, date:param.date});
});

module.exports = app.ex();
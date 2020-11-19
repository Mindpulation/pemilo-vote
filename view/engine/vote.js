const { checkSchemaSave } = require('../../validator/index');
const { saveVote } = require('../../controller/mongo');

const { Route } = require('wrap_socket');
const app = new Route();

app.add('sendVote', async (io, eng, param)=>{
  if(checkSchemaSave(param)){
    await saveVote(param);
    eng.to(param.room).emit('getVote', {idCandidate:param.idCandidate, date:new Date()});
  }
  else{console.log("Format Salah");}
});

module.exports = app.ex();
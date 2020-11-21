const { port } = require('./env/index');
const { checkSchemaSave } = require('./validator/index');
const { saveVote } = require('./controller/mongo');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors:{
    origin : "*"
  }
});

const cors = require('cors');

app.use(cors);

io.on("connection", (socket)=>{

  socket.on("test", ()=>{
    console.log("Test berhasil - I love you!");
  });

  socket.on("sendVote", async (param)=>{
    if(checkSchemaSave(param)){
      await saveVote(aram);
      socket.emit('getVote', {idCandidate:param.idCandidate, date:new Date()});
    }
    else{console.log("Salah Format");}
  });

});

http.listen(port);
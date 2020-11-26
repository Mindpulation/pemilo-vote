const { port } = require('./env/index');
const { checkSchemaSave } = require('./validator/index');
const { saveVote, finds } = require('./controller/mongo');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors:{
    origin : "*"
  }
});

const cors = require('cors');

app.use(cors);

app.post('/total_vote', async (req, res) => {
  const codeRoom = req.body.codeRoom;
  const data = await finds(codeRoom);
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    arr.push(data[i].idCandidate)
  }
  var count = {};
  arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  res.send(count)
});

io.on("connection", (socket)=>{

  socket.on("test", ()=>{
    console.log("Test berhasil - I love you!");
  });

  socket.on("sendVote", async (param)=>{
    console.log("Ke Hit Nih");
    if(checkSchemaSave(param)){
      await saveVote(aram);
      socket.emit('getVote', {idCandidate:param.idCandidate, date:new Date()});
    }
    else{console.log("Salah Format");}
  });

});

http.listen(port);
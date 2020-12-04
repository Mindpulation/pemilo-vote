const { port } = require('./env/index');
const { checkSchemaSave } = require('./validator/index');
const { saveVote, finds, getLenVote } = require('./controller/mongo');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors:{
    origin : "*"
  }
});

const cors = require('cors');

app.use(cors());
app.use(express.json());


app.post('/total', async (req, res) => {
  const codeRoom = req.body.codeRoom;
  const idCandidate = req.body.idCandidate;
  const ob = {
    codeRoom,
    idCandidate
  }
  const len = await getLenVote(ob);
  res.send(len);
});

io.on("connection", (socket)=>{

  socket.on("test", ()=>{
    console.log("Test berhasil - I love you!");
  });

  socket.on("sendVote", async (param)=>{	
    console.log("Ke Hit Nih");
    if(checkSchemaSave(param)){      
      await saveVote(param);
      socket.emit('getVote', {idCandidate:param.idCandidate, date:new Date()});
    }
    else{console.log("Salah Format");}
  });

});

http.listen(port);

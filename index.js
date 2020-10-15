const { Engine } = require('wrap_socket');

const svr = new Engine('8675');
const app = svr.net();



app.all('*',(req, res)=>{res.send({result:"Fuck you!!"});});

svr.listen();
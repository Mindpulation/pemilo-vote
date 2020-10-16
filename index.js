const voteEngine = require('./view/engine/vote');
const voteHttp = require('./view/http/vote');

const { Engine } = require('wrap_socket');

const svr = new Engine('8675');
const app = svr.net();

app.use('/api/vote', voteHttp);
svr.use(voteEngine);

app.all('*',(req, res)=>{res.send({result:"Fuck you!!"});});

svr.listen();
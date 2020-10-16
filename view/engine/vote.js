const { Route } = require('wrap_socket');
const app = new Route();

app.add();

module.exports = app.ex();
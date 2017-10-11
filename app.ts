import * as express from "express"
import * as bodyParser from "body-parser"

var app = express()
var port = process.env.PORT || 3001
app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/cvApiRoutes');
routes(app);

app.listen(port);

console.log('The proxy server for CV-API started on: ' + port);

app.use((req: any, res: any) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// module.exports = app;

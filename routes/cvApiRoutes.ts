import * as request from "request"
module.exports = function(app: any) {
  app.get('/', (req: any, res: any) =>{
    request('http://localhost:3000/', function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })

  app.get('/list', (req: any, res: any) =>{
    request.get('http://localhost:3000/cv', function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })
  app.post('/add', (req: any, res: any) =>{
    request.post({url:'http://localhost:3000/cv',form:req.body}, function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })
};

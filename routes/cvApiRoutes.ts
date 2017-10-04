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

  app.get('/cvlist', (req: any, res: any) =>{
    request('http://localhost:3000/cv', function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })
  app.post('/cvlist', (req: any, res: any) =>{
    request.post({url:'http://localhost:3000/cv'}, function optionalCallback(err, httpResponse, body) {
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
      res.send(JSON.parse(body))
    })
  })
};

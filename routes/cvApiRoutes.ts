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

// to see the whole list of cvs
  app.get('/list', (req: any, res: any) =>{
    request.get('http://localhost:3000/cv', function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })

  // to create a cv
  app.post('/add', (req: any, res: any) =>{
    request.post('http://localhost:3000/cv',{form:req.body}, function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })

  // to see a specific cv
  app.get('/list/:cvId', (req: any, res: any) =>{
    request.get('http://localhost:3000/cv/' + req.params.cvId, function (error:any, response:any, body:any) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
      res.send(JSON.parse(body))
    })
  })

    // to edit a specific cv (not being able to update, needs to be fixed)
    app.put('/edit/:cvId', (req: any, res: any) =>{
      request.put('http://localhost:3000/cv/' + req.params.cvId, function (error:any, response:any, body:any) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(JSON.parse(body))
      })
    })
}

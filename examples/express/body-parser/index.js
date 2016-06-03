var express = require('express');
var http = require('http');
var bodyParser  = require('body-parser');
var app = express();

app.set('port', 6666);

app.use(bodyParser.json());

app.get('/:first/second/:third',function(request,response,next){
    response.send("First "+request.params.first+" Second "+request.params.first+" Third "+request.params.first);
});

app.post('/',function(request,response,next){
    if (request.body.name){
        response.send("Hello "+request.body.name+"!");
    } else {
        response.send("Hello Express!");
    }

})

app.use(express.static('www'));

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

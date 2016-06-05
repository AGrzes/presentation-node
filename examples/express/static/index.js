var express = require('express');
var http = require('http');
var weekend = require('../../moment/weekend');
var app = express();

app.set('port', 6666);

app.get('/:year/:month/:day', function (request, response, next) {
    try {
        var nextWeekend = weekend(request.params.year + '-' + request.params.month + '-' + request.params.day);
        if (nextWeekend.isWeekend()) {
            response.send('Hooray it is weekend\nNext weekened starting at ' + nextWeekend.nextWeekend().format('L'));
        } else {
            response.send('Not weekend\nNext weekened starting at ' + nextWeekend.nextWeekend().format('L') + '\n' + nextWeekend.tillWeekend().humanize() + ' till next weekend');
        }
    } catch (e) {
        console.error(e);
        response.status(500).send(e);
    }
});

app.get("/weekend", function (request, response, next) {
    try {
        var nextWeekend = weekend(request.query.date);
        if (nextWeekend.isWeekend()) {
            response.send('Hooray it is weekend\nNext weekened starting at ' + nextWeekend.nextWeekend().format('L'));
        } else {
            response.send('Not weekend\nNext weekened starting at ' + nextWeekend.nextWeekend().format('L') + '\n' + nextWeekend.tillWeekend().humanize() + ' till next weekend');
        }
    } catch (e) {
        console.error(e);
        response.status(500).send(e);
    }
})

app.use(express.static('www'));

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

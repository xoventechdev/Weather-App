var http = require('http');

var server = http.createServer(function (req, res) {

 


    var json = {
        "name": "Hosen",
        "age": 21,
        "course": "B.Tech"
    };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));


    



}).listen(5050, function () {
    console.log('Server is listening on port 4040');
}).on('error', function (err) {
    console.error('Error starting server:', err.message);
});
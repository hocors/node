var hostname = '192.168.10.30';
var hostport = '314';

var express = require('express');
var app = express();
app.listen(hostport, function () {
    console.log(`web service start     http://${hostname}:${hostport}/`);
});

//var http = require('http');
//var hostname = '192.168.10.30';
//var hostport = '314';
//var fs = require('fs');
//var server = http.createServer((req, res) => {
//    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
//    switch (path) {
//        case '/form':
//            fs.readFile(__dirname + '/Client/Views/form.html', function (err, data) {
//                if (err) {
//                    res.statusCode = 200;
//                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
//                    res.end('error ' + path);
//                }
//                else {
//                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//                    res.end(data);
//                }
//            })
//            break;
//        default:
//            {
//                res.statusCode = 200;
//                res.setHeader('Content-Type', 'text/html; charset=utf-8');
//                res.end('no route：' + path);
//            }
//            break;
//    }

//}).listen(hostport, hostname, () => {
//    console.log(`web service start              http://${hostname}:${hostport}/`);
//});
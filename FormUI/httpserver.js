var app = require('express')();
var fs = require('fs');
var handlebars = require('express-handlebars').create({
    extname: 'html',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/Client/Views'
});

app.engine('html', handlebars.engine);
app.set('view engine', 'html');

app.set('host', '127.0.0.1');//定义全局变量
app.set('port', 600);//定义全局变量

app.get('/form', function (req, res) {
    res.status(200).sendFile(__dirname + '/Client/Views/form.html');//success
});

app.get('/index', function (req, res) {
    res.status(200).render(__dirname + '/Client/Views/index', { info: '测试模板文件' }, function (err, html) {
        if (err) {
            res.type('text/plain').status(500).send('页面被程序猿吃了！');
        }
        else {
            res.send(html);
        }
    });
});

app.use(function (req, res) {
    res.type('text/plain');
    res.status(200);
    res.send('页面被程序猿吃了！');
});

app.listen(app.get('port'), function () {
    console.log(`web service start     http://${app.get('host')}:${app.get('port')}/`);
});



//var http = require('http');
//var hostname = '192.168.10.30
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
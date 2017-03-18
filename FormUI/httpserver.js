//引入创建express模块服务
var express = require('express');
var app = express();

//引入文件读取模块
var fs = require('fs');

//引入视图handlebars模板引擎
var handlebars = require('express-handlebars').create({
    extname: 'html',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views',
    helpers: {
        section: function (name, options) {
            if (!this._sections) {
                this._sections = {};
            }
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});

//设置模板引擎
app.engine('html', handlebars.engine);
app.set('view engine', 'html');

//定义Internet Information Services服务地址
app.set('host', '127.0.0.1');
app.set('port', 600);

//定义资源地址目录
app.set('resources', __dirname + '/public');

//定义res上下文附加参数
var resContext = {
    jqueryBasePath: 'http://lib.sinaapp.com/js/jquery/1.9.1',
    resourcesPath: ''
}

//创建资源路由
app.use('/', express.static(app.get('resources')));

//表单路由
app.get('/form', function (req, res) {
    resContext['title'] = '表单组件开发&测试';
    page.render(req, res, '/Views/form', resContext);
});

//测试使用handlebars模板引擎
app.get('/index', function (req, res) {
    resContext['title'] = '我的nodejs学习计划';
    resContext['info'] = 'hello world ';
    page.render(req, res, '/Views/index', resContext);
});

app.get('/', function (req, res) {
    resContext['title'] = '我的nodejs学习计划';
    resContext['info'] = 'hello world ';
    page.render(req, res, '/Views/index', resContext);
});

//page 404错误
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('页面被程序猿吃了！');
});

//page 500错误 Internet Information Services
app.use(function (err, req, res, next) {
    res.type('text/plain');
    res.status(500);
    res.send('访问异常，正千里传音呼叫程序猿上线排查！/r/n' + err);
});

//创建 监听 
app.listen(app.get('port'), function () {
    console.log(`web service start     http://${app.get('host')}:${app.get('port')}/`);
});

var page = {
    render: function (req, res, pageurl, resData) {
        res.render(__dirname + pageurl, resContext, function (err, html) {
            if (err) {
                res.type('text/plain').status(500).send('访问异常，正千里传音呼叫程序猿上线排查！/r/n' + err);
            }
            else {
                res.status(200).send(html);
            }
        });
    }
}

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
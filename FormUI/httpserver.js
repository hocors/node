//引入创建express模块服务
var express = require('express');
var app = express();

var iresContext = require('./config/context');
var resContext = new iresContext();


var isysconfig = require('./config/sysconfig');
var sysconfig = new isysconfig({ express: express, app: app });

//注册pim路由
var userctr = require('./controllers/pim/usercontroller.js');
var userctrObj = new userctr({ express: express, app: app, context: resContext });
new userctrObj.route().register();

//测试使用handlebars模板引擎
app.get('/index', function (req, res) {
    resContext['title'] = '我的nodejs学习计划';
    resContext['info'] = 'hello world ';
    page.render(req, res, '/Views/index', resContext);
});

app.get('/login', function (req, res) {
    resContext['title'] = '登录页面';
    resContext['info'] = '登录页面';
    page.render(req, res, '/Views/login', resContext);
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

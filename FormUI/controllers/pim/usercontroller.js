//用户信息模块
function usercontroller(params) {
    var ijsobject = require('../../library/jsobject');
    var jsobject = new ijsobject();
    var parObj = jsobject.extend({ express: null, app: null, context: null }, params);

    var _this = this;

    //路由定义注册
    this.route = function () {
        this.register = function () {
            var context = require('../../config/context.js');
            parObj.context = new context();

            var app = parObj.app;
            app.get('/pim/login', function (req, res) {
                parObj.context['title'] = '用户登录';
                new _this.page().render(req, res, '../views/pim/login', parObj.context);
            });
        }
    };

    //视图解析控制对象
    this.page = function () {
        this.render = function (req, res, pageurl, resData) {
            console.log(`${pageurl}`)
            res.render(pageurl, parObj.context, function (err, html) {
                if (err) {
                    res.type('text/plain').status(500).send('访问异常，正千里传音呼叫程序猿上线排查！/r/n' + err);
                }
                else {
                    res.status(200).send(html);
                }
            });
        }
    };
};

//模块的访问接口
module.exports = usercontroller;

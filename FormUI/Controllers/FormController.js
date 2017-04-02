function FormController(params) {
    var reqObjectExt = require('../Library/ObjectExt');
    var reqPage = require('../Library/Page');
    var page = new reqPage();

    var parObj = new reqObjectExt().extend({ express: null, app: null, context: null }, params);
    var _this = this;

    //路由定义注册
    this.Route = (function () {

        this.Register = function () {
            parObj.context = require('../Config/Context.js');
            var app = parObj.app;

            parObj.context['info'] = '文件框';

            app.get('/Form/Text', function () {
                parObj.context['title'] = '表单组件计划_文件框';
                page.Render(req, res, app.get('rootpath') + '/Views/Form/Text', parObj.context);
            });

            //app.get('/Form/Index', function () {
            //})

            //app.get('/Form/Text', function (req, res) {

            //});
        }

        return this;
    })();
}

module.exports = FormController;

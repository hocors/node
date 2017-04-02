function FormUIConfig(params) {
    var reqObjectExt = require('../Library/ObjectExt');
    var parObj = new reqObjectExt().extend({ express: null, app: null }, params);

    //定义Internet Information Services服务地址
    parObj.app.set('host', '127.0.0.1');
    parObj.app.set('port', 600);

    //定义资源地址目录
    parObj.app.set('resources', '/Public');
    parObj.app.set('rootpath', process.cwd() + '/FormUI');

    //引入视图handlebars模板引擎
    var handlebars = require('express-handlebars').create({
        extname: 'html',
        defaultLayout: 'Layout',
        layoutsDir: parObj.app.get('rootpath') + '/Views',
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
    parObj.app.engine('html', handlebars.engine);
    parObj.app.set('view engine', 'html');

    //创建资源路由
    parObj.app.use('/', parObj.express.static(parObj.app.get('resources')));
}

module.exports = FormUIConfig;
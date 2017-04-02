//定义res上下文附加参数
module.exports = {
    resource: (function () {
        var util = require('../Library/NodeUtil').Util;
        this.jquery = (function () {
            var url = util.Format('<script type="text/javascript" src="%s"></script>', 'http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js');
            return url;
        })();
        this.bootstrapjs = (function () {
            var url = '\n<script src="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>'
            return url;
        })();
        this.bootstrapcss = (function () {
            var url = util.Format('<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">');
            return url;
        })();
        return this;
    })()
}
//Jowell 因为nodejs的Util接口可能存在变化,所以做这么一个适配器工具类，请不要在项目中直接使用nodejs的util，使用这个。
exports.Util = {
    Format: function () {
        var util = require('util');
        return util.format.apply(this, arguments);
    }
}


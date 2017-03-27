var user = function () {
    this.muser = require('./model/pim/muser');

    this.add = function (muser) {
        console.log(`模拟添加一条用户信息到db:${muser.account}`);
        return true;
    }

    this.login = function (account, password) {
        if (account == 'admin' && password == '123') {
            console.log(`登录成功 :${muser.account}`);
            return true;
        }
        else {
            console.log(`登录失败 :${muser.account}`);
            return false;
        }
    }
};

module.exports = user;
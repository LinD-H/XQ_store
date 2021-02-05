const md5 = require("md5");
const User = require("../models/user");

//登录
exports.login = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd)
    const result = await User.findOne({
        where: {
            loginId,
            loginPwd,
        },
    });
    if (result && result.loginId === loginId) {
        return result.toJSON();
    }
    return null;
};

//新增
exports.addUser = async function(loginId, loginPwd) {
    loginPwd = md5(loginPwd);
    const check = await User.findOne({
        where: {
            loginId
        },
    });
    if (check !== null) {
        return
    }


    const result = await User.create({
        loginId,
        loginPwd
    });
    return result
}
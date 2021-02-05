const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const needTokenApi = [
    { method: "GET", path: "/api/user/addUser" },
];

// 用于解析token
module.exports = (req, res, next) => {
    // /api/student/:id 和  /api/student/1771

    const apis = needTokenApi.filter((api) => {
        
        const reg = pathToRegexp(api.path);

        return api.method === req.method && reg.test(req.path);
    });

    if (apis.length === 0) {
        next();
        return;
    }

    let token = req.cookies.token;
    console.log('======>', token);
    if (!token) {
        // 从header的authorization中获取
        token = req.headers.authorization;
    }
    if (!token) {
        //没有认证
        handleNonToken(req, res, next);
        return;
    }

    next();
};

//处理没有认证的情况
function handleNonToken(req, res, next) {
    res
        .status(403)
        .send(getErr("you dont have any token to access the api", 403));
}
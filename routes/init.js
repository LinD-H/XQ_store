const express = require("express");
const app = express();

const path = require("path");

// 映射public目录中的静态资源
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// req对象中注入了cookies属性，用于获取所有请求传递过来的cookie
// res对象中注入了cookie方法，用于设置cookie
// 加入cookie-parser 中间件
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 应用token中间件
app.use(require("./tokenMid"));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());

// 处理 api 的请求
app.use("/api/user", require("./api/user"));

const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
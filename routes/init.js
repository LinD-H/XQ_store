const express = require("express");
const app = express();

const path = require("path");


// 映射public目录中的静态资源
const staticRoot = path.resolve(__dirname, "../client/dist");
const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
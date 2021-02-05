const express = require("express");
const router = express.Router();
const useServ = require("../../services/userServices");
const { asyncHandler } = require("../getSendResult");
const jwt = require('../jwt')

router.post(
    "/login",
    asyncHandler(async (req, res) => {

        const result = await useServ.login(req.body.loginId, req.body.loginPwd)
        console.log(req.body);
        if (result) {
            let value = result.id;
            //登录成功
            jwt.publish(res, undefined, { id: value });
        }
        return result
    })
);

router.get(
    "/addUser",
    asyncHandler(async (req, res) => {
        const result = await useServ.addUser(req.body.loginId, req.body.loginPwd)
        return result
    })
);


module.exports = router;
import request from "./request";

function delay(duratioin) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duratioin);
    });
}

//登录接口
export async function login(loginId, loginPwd) {
    await delay(2000);
    const resp = await request().post("/api/user/login", { loginId, loginPwd });
    return resp.data;
}

//登出接口
export function loginOut() {
    localStorage.removeItem("token");
}
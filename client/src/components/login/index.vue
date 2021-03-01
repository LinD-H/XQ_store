<template>
    <div>
        <div class="login">
            <p><input type="text" placeholder="请输入手机号"></p>
            <p><input type="text" placeholder="请输入收到的验证码"></p>
        </div>
        <button class="btn">登 录</button>
        <p class="flex p_login"><span>账号密码登录</span><span>手机快速注册</span></p>
        <div class="quick_login flex center">
            <span class="other_login">其他登录方式</span>
            <div class="qq_login">
                <span class="iconfont icon">&#xe73e;</span>
                <p class="text">QQ</p>
            </div>
        </div>
        <p class="bottom_text">未注册的手机号验证后将自动创建京东账号, 登录即代表您已同意<span class="jd_policy">京东隐私政策</span></p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .login {
        width: 100%;
        text-align: center;
        input {
            width: 98%;
            height: 40px;
            font-size: 16px;
            margin-top: 20px;
            border: 1px solid #fff;
            border-bottom-color: #efefef;
            outline: none;
        }
    }

    .btn {
        width: 100%;
        height: 47px;
        border-radius: 45px;
        outline: none;
        border:none;
        font-size: 16px;
        color: #fff;
        background-color: #ffcaba;
        margin: 20px 0;
    }

    .p_login {
        justify-content: space-between;
        font-size: 14px;
        color: #999;
    }
    .quick_login {
        width: 100%;
        height: 100px;
        border-top: 1px solid #ccc;
        margin-top: 80px;
        flex-direction: column;
        position: relative;
        .other_login {
            font-size: 12px;
            color: #ccc;
            width: 30vw;
            text-align: center;
            display: block;
            background: #fff;
            position: absolute;
            top: -8px;
        }
        .qq_login {
            text-align: center;
            margin-top: 20px;
            .icon {
                color: rgb(97, 97, 232);
                font-size: 40px;
            }
            .text {
                font-size: 12px;
                color: #999;
            }
        }
    }
    .bottom_text {
        font-size: 10px;
        color: #ccc;
        text-align: center;
        margin-top: 10px;
        .jd_policy {
            color: #4a90e2;
        }
    }
</style>
//第一个参数为倒计时结束的时间 格式："2021-1-28 16:53:53"
//返回从现在开始 到 倒计时结束时间的时间 格式：[时，分，秒]
export const seckill = (endTime) => {
    let time = new Date(endTime).getTime()
    let newTime = new Date().getTime()
    if (time - newTime <= 0) {
        throw new Error("你给的数太小了");
    }
    6
    const times = (time - newTime) / 1000
    let h = parseInt(times / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h
    let m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;
    let s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;
    return [h, m, s]
}
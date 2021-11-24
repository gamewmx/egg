module.exports = {
    //方法扩展

    currentTime(){
        return getTime()
    },
    get TimeAttr(){
        return getTime()
    }
}
function getTime(){
    let nowTime = new Date()
    return nowTime
}
const Subscription = require('egg').Subscription

class GetTime extends  Subscription{
    static get schedule(){
        return {
            cron:'*/3 * * * * *',// 秒 分 时 日 月 年
            type:'worker',
        }
    }

    async subscribe(){
        console.log(new Date())
    }
}

module.exports = GetTime
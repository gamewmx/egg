const Subscription = require('egg').Subscription

class GetTime extends  Subscription{
    static get schedule(){
        return {
            cron:'*/3 * * * * *',
            type:'worker',
        }
    }

    async subscribe(){
        console.log(new Date())
    }
}

module.exports = GetTime
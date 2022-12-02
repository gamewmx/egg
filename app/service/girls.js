const Service = require('egg').Service

class GirlsService extends Service{
    async addGirl(params){
        try{
            const res = await this.app.mysql.insert('girls',params)
            // if(res.affectedRows === 1){
            //     return res
            // }
            return res
        }catch (e) {
            return e
        }
    }
    async delGirl(id){
        try{
            const res = await this.app.mysql.delete('girls',id)
            return res
        }catch (e) {
            return e
        }
    }
    async updateGirl(params){
        const {ctx , app} = this
        try{
            const res = await app.mysql.update('girls',params)
            return res
        }catch (e) {
            return e
        }
    }
    async queryGirls(){
        const {ctx,app} = this
        try{
            const res = await app.mysql.select('girls')
            return res
        }catch (e) {
            console.log(e)
            return e
        }
    }
}

module.exports = GirlsService
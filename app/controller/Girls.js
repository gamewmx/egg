const Controller = require("egg").Controller;

class GirlManage extends Controller {
    async addGirl() {
        const { ctx } = this;
        try{
            ctx.validate(
                {
                    name: {type: 'string', required: true}
                },ctx.query)
            const params = ctx.params()
            const res = await ctx.service.girls.addGirl(params)
            console.log(res)
            ctx.body = "添加女孩";
        }catch (e) {
            console.log(e.errors)
            ctx.body = {
                success:false,
                message:"姓名",
                body:e.errors
            }
        }
        
    }

    async delGirl() {
        const { ctx } = this;
        const params = ctx.params()
        const res = await ctx.service.girls.delGirl(params)
        console.log(res)
        ctx.body = "删除女孩";
    }

    async updateGirl() {
        const { ctx } = this;
        const params = ctx.params()
        const res = await ctx.service.girls.updateGirl(params)
        console.log(res)
        ctx.body = res;
    }

    async queryGirls() {
        const { ctx } = this;
        const res = await ctx.service.girls.queryGirls()
        ctx.returnBody(200,'查询成功',res)
    }
}

module.exports = GirlManage;
'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
            const login = await this.ctx.service.login.index()
            if(login=="密码错误！"){
                 this.ctx.body = {
                     code:300,
                     data:"密码错误！"
                 }
            }else{
                this.ctx.body = {
                    code:200,
                    data:login
                }
            }
        // try {
        //     const login = await this.ctx.service.login.index()
        //     this.ctx.body = {
        //         code: 20000,
        //         data: login
        //     }
        // } catch (error) {
        //     this.ctx.body = {
        //         code: 30000,
        //         data: "登录失败"
        //     }
        // }
    }
}

module.exports = LoginController;

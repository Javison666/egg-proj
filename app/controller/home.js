'use strict';


const Controller = require('egg').Controller;

class HomeController extends Controller {
	async render() {
		try {
			if (!this.ctx.request.isParamExist('username')) {
				throw '请输入用户名'
			}
			if (!this.ctx.request.isParamExist('password')) {
				throw '请输入密码'
			}
			const row = await this.ctx.service.user.find(this.ctx.query.username)
			if (row === null) {
				throw '该用户不存在'
			}
			if(this.ctx.service.crypt.login.encryptLoginPwd(this.ctx.query.password)!==row.password){
				throw '密码输入不正确'
			}
			this.ctx.body = '登录成功'
			
		} catch (err) {
			this.ctx.body = {
				code: 400,
				msg: err.toString(),
				data: {},
				state: 'error'
			}
		}
	}
}

module.exports = HomeController;
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
			this.ctx.body = JSON.stringify(row.password)
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
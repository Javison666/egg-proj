'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async render() {
		const row = await this.ctx.service.user.find(this.ctx.query.username)
		console.log(row.password)
		return JSON.stringify(row.password)
	}
}

module.exports = HomeController;
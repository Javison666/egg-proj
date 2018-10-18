'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;
        ctx.body = `
          <div>
            <h2>${ctx.path}</h2>
            <a href="/admin">admin</a>
          </div>
        `;
    }

    async admin() {
        const { ctx } = this;
        if (ctx.isAuthenticated()) {
            // show user info
        } else {
            // redirect to origin url by ctx.session.returnTo
            ctx.session.returnTo = ctx.path;
            await ctx.render('login.html');
        }
    }

    async logout() {
        const ctx = this.ctx;

        ctx.logout();
        ctx.redirect(ctx.get('referer') || '/');
    }
}

module.exports = UserController;
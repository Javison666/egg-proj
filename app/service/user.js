const Service = require('egg').Service;

class UserService extends Service{
    async find(username){
        console.log(username)
        const user = await this.app.mysql.get('db1').get('user_basic',{
            username
        })
        return user
    }
}

module.exports = UserService;

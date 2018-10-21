// import sha1 from 'sha1'
const Service = require('egg').Service;
const sha1 =require('sha1')

class cryptService extends Service{
    // static loginCryptSalt='testSalt'
    encryptLoginPwd(pwd){
        return sha1(pwd+'testSalt')
    }
}

module.exports = cryptService;
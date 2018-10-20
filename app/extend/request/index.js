module.exports={
    isParamExist(param){
        if(this.query[param] === undefined){
            return false
        }else{
            return true
        }
    }
}
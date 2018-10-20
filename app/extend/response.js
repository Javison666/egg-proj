module.exports={
    set data(data){
        this.set('Cache-Control','no-cache')
    },
    set jsonData(data){
        this.set('content-type','application/json')
    }
}
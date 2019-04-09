var app = require('express')()


app.get('/',function(req,res){
    res.send('1234')
})

// 監聽 port
var port = process.env.PORT ||3000;
app.listen(port)

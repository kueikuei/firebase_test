var firebase = require("firebase")

var app = require('express')()

var config = require("./config.json");

firebase.initializeApp(config);


var admin = require("firebase-admin");
// console.log(admin)
var serviceAccount = require("./tutorchinese-5296f-firebase-adminsdk-herpz-3edd8d83c7.json");
// console.log(serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tutorchinese-5296f.firebaseio.com"
});

var ad = admin.database()

// console.log('ad')
// console.log(ad)

ad.ref().once('value',function(snapshot){
    console.log(snapshot.val());
})
// console.log(ad)

// app.get('/',function(req,res){
//     res.send(ad)
// })

// var db = firebase.database();
// var ref = db.ref("/");
// var value = {
//  Test1: "t1",
//  Test2: "t2"
// }
// ref.set(value);

// ref.once("value", function(snapshot) {
//     console.log(snapshot.val());
// });



// 監聽 port
// var port = 3000;
// app.listen(port)

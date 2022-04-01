
const { MongoClient, } = require('mongodb');
const uri = "mongodb+srv://udemy-learn:ayomiku123@cluster0.xcjno.mongodb.net/udemyFirstDatabase?retryWrites=true&w=majority";


MongoClient.connect(uri).then(data=>{
  console.log("connected")
})
.catch(err=>{
  console.log("failed")
})



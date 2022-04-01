
const { MongoClient, } = require('mongodb');
const uri = "mongodb+srv://udemy-learn:ayomiku123@cluster0.xcjno.mongodb.net/udemyFirstDatabase?retryWrites=true&w=majority";

let _db;

const connectDb=(callback)=>{
  return MongoClient.connect(uri)
  .then(data=>{
    console.log("connected")
     _db=data.db 
     callback()
  })
  .catch(err=>{ 
    throw err
  })
}
const getDb=()=>{
  if(_db){
    return _db
  }
  throw "No database found"
}
module.exports={connectDb,getDb}




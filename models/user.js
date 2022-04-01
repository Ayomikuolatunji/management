const { getDb } = require("../util/database");
const {ObjectId}=require("mongodb")

class User{
  constructor(name){
     this.name=name;
     this.email=email
  }

  static save(){
    const db=getDb
      return db.collection("users").insertOne(this)
      .then(data=>{
         console.log(data)
      })
      .catch(err=>{
            console.log("error")
      })
  }

  findById(userId){
      const db=getDb()
      return db.collection("users")
      .findOne({_id:new ObjectId(userId)})
      .then(data=>{
        console.log("")
      })
  }
}

module.exports=User
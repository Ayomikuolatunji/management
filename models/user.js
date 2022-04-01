const { getDb } = require("../util/database");
const mongodb=require("mongodb")

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
         return data
      })
      .catch(err=>{
            console.log("error")
      })
  }

   static findById(userId){
      const db=getDb()
      return db.collection("users")
      .findOne({_id:new mongodb.ObjectId(userId)})
      .then(data=>{
        console.log("created for user")
        return data
      })
  }
}

module.exports=User
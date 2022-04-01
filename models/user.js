const { Db } = require("mongodb");
const { getDb } = require("../util/database");

class User{
  constructor(name){
     this.name=name;
     this.email=email
  }

  static save(){
      return Db.collection("user").insertOne(this)
      .then(data=>{
         console.log(data)
      })
      .catch(err=>{

      })
  }

  findById(userId){

  }
}
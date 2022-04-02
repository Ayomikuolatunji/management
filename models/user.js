const { getDb } = require("../util/database");
const mongodb=require("mongodb")

class User{
  constructor(name,email,cart,id){
     this.name=name;
     this.email=email,
     this.cart=cart
     this._id=id
  }

   save(){
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
   addToCart(product){
     const db=getDb()
      // const cartProducts=this.cart.findIndex(item=>{
      //     return item._id===prodId
      // })
     const cartProduct={items:[{productId:new mongodb.ObjectId(product._id),qantity:1}]}
     return db.collection('users').updateOne({_id:new mongodb.ObjectId(this._id)},{$set:{cart:cartProduct}})
     .then(data=>{
        return data
     })
     .catch(err=>{
       console.log(err)
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
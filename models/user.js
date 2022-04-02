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
    //  connect to the database
    const db=getDb()
    // check if cart item is already in the database
    const cartProductIndex=this.cart.items.findIndex(item=>{
          return item.productId===product._id
    })
    // set quantity valriable to one
    let newQuantity=1;
    // update spread all the elements in the cart items
    const updatedcartItems=[...this.cart.items]
    // check if the product index is greater than zero
    if(cartProductIndex >=0){
      //  update the quantity
        newQuantity=this.cart.items[cartProductIndex].qantity+1;

        updatedcartItems[cartProductIndex]=newQuantity
    }else{
      updatedcartItems.push({productId:new mongodb.ObjectId(product._id),qantity:1})
    }
     const cartProduct={items:[updatedcartItems ]}
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
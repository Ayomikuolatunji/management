const {getDb}=require("../util/database.js")
const mongodb=require("mongodb")

class Product{
  constructor(title,price,description,imageUrl,id){
     this.title=title;
     this.price=price;
     this.description=description;
     this.imageUrl=imageUrl;
     this._id=id ? new mongodb.ObjectId(id) :null;
  }
  save() {
    const db = getDb();
    let sendReqeuest;
    if(this._id){
       sendReqeuest=db.collection("products").updateOne({_id:this._id},{$set: this})
    }else{
       sendReqeuest=db  
       .collection('products')
       .insertOne(this)
    }
    return sendReqeuest.
    then(result => {
        console.log("data");
      })
      .catch(err => {
        console.log(err);
    });
  }
  static fetchAll(){
      const db = getDb();
      return db
      .collection("products")
      .find()
      .toArray()
      .then(data=>{
        return data
      })
      .catch(err=>{
          console.log(err)
      })
  } o
  static findById(prodId){
     const db=getDb()
     return db.collection("products")
     .find({_id:new mongodb.ObjectId(prodId)})
     .next()
     .then(data=>{
        console.log(data)
        return data
      })
      .catch(err=>{
          console.log(err)
      }) 
  }
  static deleteById(prodId){
    const db=getDb()
        return db.collection("products")
        .deleteOne({_id:new mongodb.ObjectId(prodId)})
        .then(data=>{
          return data
        })
        .catch(err=>{
          console.log(err)
        })
  }
}



module.exports = Product;
// const Poduct = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true 
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });
const {getDb}=requre("../util/database.js")


class Product{
  constructor(title,price,description,imageUrl ){
     this.title=this.title,
     this.price=price,
     this.description=this.description,
     this.imageUrl=this.imageUrl
  }
  save(){
     const db=getDb()
     db.connection('products').RecordsDB.insertOne({
        this
     }).then(()=>{
         
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
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();
const {mongoConnect}=require("./util/database") ;
const User=require("./models/user") 


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  User.findById("624745db96954b1cfe348853")
    .then(user => {
      console.log(user)
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  next()
});


app.use('/admin', adminRoutes); 
app.use(shopRoutes);

app.use(errorController.get404);


mongoConnect(()=>{  
  app.listen(5000,()=>{
    console.log("running")
  })
})




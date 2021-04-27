const express= require('express')
require('dotenv').config()
const db =require('./db/models')
const {usersRoute}=require('./routes/users')
const {postsRoute}=require('./routes/posts')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/',express.static(__dirname+'/public'))
const PORT=process.env.PORT||8383;
console.log(process.env.PORT)

db.sync().then(()=>{
    console.log(process.env.PORT)
    app.listen(PORT,()=>{
        console.log(`server listeing at port http://localhost:8383`)
    })
   
}).catch((err)=>{
    console.error(new Error(`could not start server`))
    console.error(err);

})
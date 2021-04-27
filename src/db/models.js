const Sequelize=require('sequelize');
const db=new Sequelize({
    dialect:"postgres",
    database:"d6mpe0caeoi8ej",
    username:"pvoguahgvyuusp",
    password:"4aaf748417840bc235e992f1212a06e60aea9b6a39af6e13d7707382534d0725",
    host:"ec2-34-233-0-64.compute-1.amazonaws.com",

})
const COL_ID_DEF={
    type:Sequelize.DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
}
const COL_NAME_DEF={
    type:Sequelize.DataTypes.STRING(30),
    unique:true,
    allowNull:false
} 
const COL_TITLE_DEF={
    type:Sequelize.DataTypes.STRING(140),
    allowNull:false
} 
const Users=db.define("user",{
    id:COL_ID_DEF,
    username:COL_NAME_DEF

    
})
const Posts=db.define('post',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type:Sequelize.DataTypes.TEXT,
        allowNull:false
    }
})
const Comments=db.define('comment',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,body:{
        type:Sequelize.DataTypes.TEXT(`tiny`),
        allowNull:false
    }
    
})
Users.hasMany(Posts) //one extra column in post is formed with userid(includeing primary key of users)
Posts.belongsTo(Users)
Users.hasMany(Comments)
Comments.belongsTo(Users)
Posts.hasMany(Comments)
Comments.belongsTo(Posts)




module.exports={
    db,Users,Posts,Comments
}
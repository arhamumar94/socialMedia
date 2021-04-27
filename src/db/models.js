const Sequelize=require('sequelize');
let db;
var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    }
  });

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
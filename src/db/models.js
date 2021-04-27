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


module.exports={
    db
}
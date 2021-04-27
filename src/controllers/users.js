const {Users}=require('../db/models')
const {genRandomUserName}=require('../utils/username')


async function createAnonUser(){
    const user= await Users.create({
        username:genRandomUserName()
    })
    return user;
}
async function getUserById(id)
{
    return await Users.findOne({
        where:{id} //important
    })
}
async function getUserByUsername(username)
{
    return await Users.findOne({
        where:{username} //important
    })
}

module.exports={
    getUserById,
    createAnonUser,
    getUserByUsername
    }
    

/* 
async function task()
{
    console.log(await createAnonUser())
    console.log("------------------")
    console.log(await createAnonUser())
    console.log("------------------")
    console.log(await createAnonUser())
    console.log("------------------")
    console.log(await createAnonUser())
    console.log("------------------")
}
task()
*/





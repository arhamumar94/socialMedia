const {Posts,Users}=require('../db/models')
async function createNewPost(userId,title,body){
    const post=await Posts.create({
        title,
        body,
        userId //this is generated due to reelation with primary key help
        
    })
    return post;
}
/* query is for search fliter by title username or whatever
*/
async function findAllPosts(query)
{
    //todo handel query params
    const posts=await Posts.findAll(
        {
            include:[Users]
        }
    );
    return posts;
}  

module.exports={
    findAllPosts,createNewPost
}


/*
async function task()
{
    /*
    console.log(await createNewPost(1,"this is title","this body of first"));
    console.log(await createNewPost(2,"this is title user 2","this body of second"));
    console.log(await createNewPost(3,"this is title 3","this body of third"));

    
    const posts=await showAllPosts();
    for(let p of posts)
    {
        console.log(`${p.title}\n${p.user.username}\n${p.body}\n-----------\n`)
    }
  
       
   
   

}
task();

*/


const {Router}=require('express')
const route=Router();
const {findAllPosts,createNewPost}=require('../../controllers/posts')
const {getUserByUsername}=require('../../controllers/users')



route.get('/',async (req,res)=>{
    const posts=await findAllPosts();
    res.status(200).send(posts)
})
route.post('/',async (req,res)=>{
    const {userId,title,body}=req.body
    if((!userId)||(!title)||(!body))
    {
        return res.status(402).send({
            error:"can not create Post"
        })
    }
    const post=await createNewPost(userId,title,body)
    res.status(200).send(post);
})

module.exports = {
    postsRoute: route
  }
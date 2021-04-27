

$(()=>{
    $('#navbar').load('/components/navbar.html',loginIfNeeded)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/all-posts.html')
    
    
})
function loginIfNeeded() {
    let currentUser = window.localStorage.user
      ? JSON.parse(window.localStorage.user)
      : null
    if (!currentUser) {
      $.post('/api/users', {}, (user) => {
        if (user) {
          console.log('registered current user as ', user.username)
          window.localStorage.user = JSON.stringify(user)
          currentUser=user;
          $('#nav-username').text(`UserId-${currentUser.id} 
           UserName-${currentUser.username} `)
        
        }
      })
    } else {
      console.log('resuming session as ', currentUser.username)
      $('#nav-username').text(`UserId-${currentUser.id} || UserName-${currentUser.username} `)
      
    }
  }
  function addProduct(name,tit,bdy){
    $.post('/api/posts',{
        userId:name,
        title:tit,
        body:bdy

    },function(data){
        done(data)
    })
}
  
  
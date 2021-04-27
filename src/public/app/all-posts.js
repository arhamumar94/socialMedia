
function loadPosts(){
    $.get('/api/posts',(posts)=>{
        for(let p of posts)
        {
            $('#post-container').append(
                $(`
                <div class="col4 m-4 p-auto">
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">
                  ${p.body.substr(0,20)}
                  ...<a href"#">.....read more</a>
                  
                  
                  </p>
                  <a href="#" class="card-link">Comment</a>
                  <a href="#" class="card-link">Like</a>
                </div>
              </div>
                </div>
                `)
            )
        }

    })
}

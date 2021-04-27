$(function(){
    let formUser=$('#formUser')
    let formTitle=$('#formTitle')
    let formBody=$('#formBody')
    let submit=$('#formPost')
    submit.click((data)=>{
        console.log(formUser.val())
        console.log(formTitle.val())
        console.log(formBody.val())
        addProduct(formUser.val(),formTitle.val(),formBody.val(),function(data){
            window.alert(`added`)
        })
       
    })
})
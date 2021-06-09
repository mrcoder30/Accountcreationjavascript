let userName=document.getElementById("txtUser")
let email=document.getElementById("txtEmail")
let pwd=document.getElementById("txtPwd")
let conPwd=document.getElementById("txtCpwd")
let form=document.querySelector("form")

function validateinput(){
    console.log("validate input")
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault()
    validateinput()
});

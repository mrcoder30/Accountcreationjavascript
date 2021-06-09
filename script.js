let userName=document.getElementById("txtUserName")
let email=document.getElementById("txtEmail")
let pwd=document.getElementById("txtPwd")
let conPwd=document.getElementById("txtCpwd")
let form=document.querySelector("form")

function validateinput(){
    //check username has been entered
    if(userName.Value.trim()==""){
        let parent=userName.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="Visible";
        messageEle.innerText="User Name cannot be left blank";
    }
    else{ //should then hide error again
        let parent=userName.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="Visible";
        messageEle.innerText="";
    }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateinput();
});

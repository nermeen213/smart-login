var emailInput=document.getElementById("emailInput");
var passwordInput=document.getElementById("passwordInput");
var loginbtn=document.getElementById("loginBTN");
var alertMessage=document.getElementById("alertMessage");





var userContainer=[];



if(localStorage.getItem("users")!=null){
    userContainer=JSON.parse(localStorage.getItem("users"));
}

function login(){
    var user={
        email:emailInput.value,
        password:passwordInput.value,
    }
    if(checkInput()==true){
        getAlertMessage('All inputs is required','red')
    }else{
        if(checkemailpassword()==true){
            window.location='./login.html'
            
            

        }else{
            getAlertMessage('incorrect email or password','red')
          

        }

    }
}


function checkInput(){
    if(emailInput.value=='' || passwordInput.value==''){
        return true;
    }else{
        return false;
    }
}

function getAlertMessage(text,color){
    alertMessage.classList.replace('d-none','d-block')
    alertMessage.innerHTML=text;
    alertMessage.style.color=color
   
  

}





function checkemailpassword(){
    for(var i=0 ; i<userContainer.length ;i++){
        if(userContainer[i].email==emailInput.value && userContainer[i].password==passwordInput.value){
            localStorage.setItem('userName',userContainer[i].name)
            return true;
          

        }
    }
}
loginbtn.addEventListener('click',login);





// validation




let touchedEmail =false;
let touchedPassword =false;

emailInput.addEventListener('focus',()=>{
    touchedEmail=true;
})
passwordInput.addEventListener('focus',()=>{
    touchedPassword=true;
})


function validation(){


if(touchedEmail){
    if(emailvalid()){
        document.getElementById('validemail').classList.replace('d-block','d-none')
    
    }else{
        document.getElementById('validemail').classList.replace('d-none','d-block')
    
    }
}

if(touchedPassword){
    if(passwordValid()){
        document.getElementById('validpassword').classList.replace('d-block','d-none')
    
    }else{
        document.getElementById('validpassword').classList.replace('d-none','d-block')
    
    }
}




if(
   
    emailvalid()&&
    passwordValid()
){
loginbtn.removeAttribute('disabled')
}else{
    loginbtn.setAttribute('disabled',true)
}
}

function emailvalid(){
    return(/[^\s]*@[a-z0-9.-]*/i.test(emailInput.value)
    )

}
function passwordValid(){
    return(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value))
    
}

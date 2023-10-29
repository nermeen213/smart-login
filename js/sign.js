var userNameInput=document.getElementById("usernameInput");
var emailInput=document.getElementById("emailInput");
var passwordInput=document.getElementById("passwordInput");
var signBTN=document.getElementById("signbtn");
var alertMessage=document.getElementById("alertMessage");



var userContainer=[];

if(localStorage.getItem("users")!=null){
    userContainer=JSON.parse(localStorage.getItem("users"));
}



function addUsers(){

    var user= {
        name:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value,

    }
    if(checkInput()==true){
        getAlertMessage('All inputs is required','red')
        
    }else{

        if(checkemailpassword()== true){
            getAlertMessage('email already exists','red')
        }else{
            userContainer.push(user);
            localStorage.setItem('users',JSON.stringify(userContainer));
            getAlertMessage('success','green');

        }

        
      
        
       
    }
    clear()
   

}









function checkInput(){
    if(userNameInput.value == '' || emailInput.value=='' ||passwordInput.value==''){
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

        if(userContainer[i].email==emailInput.value){
            return true;
            

        }

       
    }

}
function clear(){
    userNameInput.value='';
    emailInput.value='';
    passwordInput.value='';
}


signBTN.addEventListener('click',addUsers)


//   validation/

let touchedName =false;
let touchedEmail =false;
let touchedPassword =false;
userNameInput.addEventListener('focus',()=>{
    touchedName=true;
})
emailInput.addEventListener('focus',()=>{
    touchedEmail=true;
})
passwordInput.addEventListener('focus',()=>{
    touchedPassword=true;
})


function validation(){

if(touchedName){
    if(nameValid()){
        document.getElementById('validname').classList.replace('d-block','d-none')
    
    }else{
        document.getElementById('validname').classList.replace('d-none','d-block')
    
    }
}
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
    nameValid()&&
    emailvalid()&&
    passwordValid()
){
signBTN.removeAttribute('disabled')
}else{
    signBTN.setAttribute('disabled',true)
}
}
function nameValid(){
    return(/^[a-zA-Z]{2,12}/.test(userNameInput.value))

}
function emailvalid(){
    return(/[^\s]*@[a-z0-9.-]*/i.test(emailInput.value)
    )

}
function passwordValid(){
    return(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value))
    
}

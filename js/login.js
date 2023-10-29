
var para=document.getElementById("welcomeMessage");


para.innerHTML=`welcome ${localStorage.getItem('userName')}`;


document.getElementById("logoutbtn").addEventListener('click',function(){
    window.location='./index.html';
    localStorage.removeItem('userName');
})






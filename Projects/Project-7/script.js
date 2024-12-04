let loginbtn=document.getElementById("login_btn");
let singuppage=document.getElementById("signup");
let loginpage=document.getElementById('login');
let singupbtn= document.getElementById("sign_upbtn");
let signupbttn=document.getElementById("signuupbtn");
let logedinn=document.getElementById("logedin");
loginbtn.addEventListener('click',(e)=>{
    singuppage.style.display="none";
    loginpage.style.display='block';
})
 singupbtn.addEventListener('click',(e)=>{
    loginpage.style.display="none";
    singuppage.style.display='block';
 })
 let email=document.getElementById("email").value;
 let password=document.getElementById("password").value;
 
 signupbttn.addEventListener('click',(e)=>{
    if (localStorage.getItem(email)===password){
        alert("Already user registered")
        return;
    }
    localStorage.setItem(email, password);
    alert("new user registered")
 })
  
 logedinn.addEventListener('click',(e)=>{
    if (localStorage.getItem(email)===password){
        alert("Successfully login")
    } else{
        alert("try again")
    }
})
//  console.log("Email:", email);
// console.log("Password:", password);
// console.log("LocalStorage match:", localStorage.getItem(email) === password);
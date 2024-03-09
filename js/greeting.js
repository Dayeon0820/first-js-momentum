const loginForm= document.querySelector(".login-form");
const loginInput= document.querySelector(".login-form input");
const greeting= document.querySelector("#greeting");
const CLASSNAME_HIDDEN="hidden";
const KEY_USERNAME="username";

function onSubmit(event){
    const username= loginInput.value;
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    localStorage.setItem(KEY_USERNAME, username);
    greetingText(username);
   
}

function greetingText(username){
    greeting.innerText=`Hello ${username}!` ;
}

const savedUsername= localStorage.getItem(KEY_USERNAME);
if(savedUsername===null){
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", onSubmit);
}else{
    greetingText(savedUsername);
}
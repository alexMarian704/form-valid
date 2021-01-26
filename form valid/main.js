const username = document.getElementById("userN");
const email =document.getElementById("emaill");
const password = document.getElementById("passwordd");
const passwordValid =document.getElementById("passworddvalid");
const submit =document.getElementById("submit");
const form =document.getElementById('form');

form.addEventListener('submit',(a) => {
        a.preventDefault();

    check();
});

function check(){
    //trim transforma valoare in sir de caractere si scoate spatiile
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    const password2Value = passwordValid.value.trim();
    
    if(usernameValue === ''){
        setError(username,'Please enter the username');
    }else{
        succes(username); 
    }

    if(passwordValue === ''){
        setError(password,'Please enter the password');
    }else{
        succes(password);
    }

    if(emailValue === ''){
         setError(email,'Please enter a email');
    }else if(!checkEmail(emailValue)){
        setError(email,'Please enter a valid email');
    }else{
       succes(email); 
    }

    if(password2Value === ''){
        setError(passwordValid,'Please enter the password check');
    }else if(passwordValue !== password2Value){
        setError(passwordValid,'Passwords needs to be the same')
    }else{
        succes(passwordValid); 
    }
}

function setError(input,message){
    const principalForm = input.parentElement;
    const small = principalForm.querySelector('small');
    input.style.border = "2px solid #DA2802 ";
    small.innerHTML = message;
}

function succes(input){
    const principalForm = input.parentElement;
    const small = principalForm.querySelector('small');
    input.style.border = "2px solid #05CE05 "
    small.innerHTML=null;
}

function checkEmail(a){
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(a);
}
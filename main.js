
const form = document.querySelector("#registerionForm");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    success.textContent = "";
    error.textContent = "";

    const isUsernacmeValid = validateUsername();
    const isEmailVaild = validateEmail();
    const isPasswordValid = validatePassword();
    
    

    if (!isUsernacmeValid) {
        username.focus();
        return
    }else if (!isEmailVaild){
        email.focus();
        return
    }else if(!isPasswordValid){
        password.focus();
        return
    }

    success.textContent = "Registration successfully!";

})

function validateUsername() {
    if (username.value === "") {
        setError(username, "Username is required");
        return
    } else {
        setSuccess(username);
        return true;
    }
}

 function validateEmail(){
   
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!email.value.match(emailPattern)){
    setError(email, "Please enter a valid email address");
    return false;
  }else{
    setSuccess(email);
    return true;
  }
 }

function validatePassword() {
  if (password.value.length < 8) {
    setError(password, "Password must be at least 8 characters");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}


function setError(element, message) {
    element.classList.add("invalid");
    element.classList.remove("valid");
    error.textContent = message;
}

function setSuccess(element) {
    element.classList.add("valid");
    element.classList.remove("invalid");
}
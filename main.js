
const Form =  document.querySelector("#registerionForm");
const username =  document.querySelector("#username");
const email =  document.querySelector("#email");
const password =  document.querySelector("#password");
const confirmPassword =  document.querySelector("#confirmPassword");
const error =  document.querySelector("#error");
const success =  document.querySelector("#success");

Form.addEventListener("submit", function(event){
 event.preventDefault();

 error.textContent = "";
 error.textContent = "";

 const isUsername = VUsername();
 
 if(!isUsername){
    username.focus();
    return
 }
 
 success.textContent = "SuccessFully!"
})

function VUsername(){
   if(username.value === ""){
    sError(username,"username is required");
    return false
   }else{
    sSuccess(username);
    return true
   }
}

  function sError(element,massege){
   element.classList.add("invalid");
   element.classList.remove("valid");
   error.textContent = massege;
}

  function sSuccess(element){
   element.classList.add("valid");
   element.classList.remove("invalid");
}
function errorMsg(elementId, message, status){
    if(status){
        document.querySelector(`#${elementId}`).classList.remove("active");
        document.querySelector(`#${elementId}`).innerHTML = "";
    } else {
        document.querySelector(`#${elementId}`).classList.add("active");
        document.querySelector(`#${elementId}`).innerHTML = message.trim();
    }
}

function nameValidation(){
    let input = document.querySelector("#name");
    if(input.value.trim() == ""){
        errorMsg("nameErr","Name is Required!!!",false);
        return false;
    } else if(input.value.trim().length < 3){
        errorMsg("nameErr","Name at least 3 characters!!!",false);
        return false;
    } else if(input.value.trim().length > 20){
        errorMsg("nameErr","Enter Name maximum 20 characters!!!",false);
        return false;
    } else {
        errorMsg("nameErr","",true);
        return true;
    }
}
function emailValidation(){
    let input = document.querySelector("#email");
    if(input.value.trim() == ""){
        errorMsg("emailErr","Email Address is Required!!!",false);
        return false;
    } else if(!input.value.trim().match(/^(?=.*[a-z])(?=.*\d)[a-z\d@$!%*?&]+@[a-z\d.-]+\.[a-z]{2,}$/)){
        errorMsg("emailErr","Email Address must contain at least one Lowercase letter, one Digit, and valid email address!!!",false);
        return false;
    } else if(input.value.trim().length > 40){
        errorMsg("emailErr","Enter Email Address maximum 40 characters!!!",false);
        return false;
    } else {
        errorMsg("emailErr","",true);
        return true;
    }
}
function subjectValidation(){
    let input = document.querySelector("#subject");
    if(input.value.trim() == ""){
        errorMsg("subjectErr","Subject is Required!!!",false);
        return false;
    } else if(input.value.trim().length < 5){
        errorMsg("subjectErr","Subject at least 5 characters!!!",false);
        return false;
    } else if(input.value.trim().length > 20){
        errorMsg("subjectErr","Enter Subject maximum 20 characters!!!",false);
        return false;
    } else {
        errorMsg("subjectErr","",true);
        return true;
    }
}
function messageValidation(){
    let input = document.querySelector("#message");
    if(input.value.trim() == ""){
        errorMsg("messageErr","Message is Required!!!",false);
        return false;
    } else if(input.value.trim().length < 20){
        errorMsg("messageErr","Message at least 20 characters!!!",false);
        return false;
    } else if(input.value.trim().length > 500){
        errorMsg("messageErr","Enter Message maximum 500 characters!!!",false);
        return false;
    } else {
        errorMsg("messageErr","",true);
        return true;
    }
}

function validation(){
    let nameErr = false, emailErr = false, subjectErr = false, messageErr = false;
    nameErr = nameValidation();
    emailErr = emailValidation();
    subjectErr = subjectValidation();
    messageErr = messageValidation();
    if(nameErr == true && emailErr == true && subjectErr == true && messageErr == true){
        alert("send Message");
    }
}
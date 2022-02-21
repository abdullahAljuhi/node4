const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let inputs = document.querySelectorAll(".input");
let textarea = document.querySelector("textarea");
let ok = document.querySelector(".submet");
let errors={
    name:"name too long",
    email:"not valid email",
    message:"too log",
}
inputs.forEach((element) => {
    element.addEventListener("keyup", (e) => {
        if (element.value.length < 1 || element.value == "") {
            if (
                e.target.parentElement.nextElementSibling.classList.contains("valid")
            ) {
                e.target.parentElement.nextElementSibling.classList.remove("valid");
                e.target.parentElement.nextElementSibling.innerText =
                    "thia falid is reqired";
            }
            e.target.parentElement.nextElementSibling.classList.add("novalid");
        } else {
            if (
                e.target.parentElement.nextElementSibling.classList.contains("novalid")
            ) {
                e.target.parentElement.nextElementSibling.classList.remove("novalid");
            }
            e.target.parentElement.nextElementSibling.classList.add("valid");
        }
        if(e.target.name=="name"){
            checkinputs(e.target,15)
        }
        if(e.target.name=="message"){
            checkinputs(e.target,30)
        }
        if(e.target.name=='email'){
            validmail(email);
        }
    });
});
ok.addEventListener("click", function (e) {
    e.preventDefault();
    inputs.forEach((element) => {
        if (element.value == "" || element.value.length < 1) {
            if (element.parentElement.nextElementSibling.classList.contains("valid")) {
                element.parentElement.nextElementSibling.classList.remove("valid");
                element.parentElement.nextElementSibling.innerText =
                "thia falid is reqired";
            }
            element.parentElement.nextElementSibling.classList.add("novalid");
        } else {
            if (element.parentElement.nextElementSibling.classList.contains("novalid")) {
                element.parentElement.nextElementSibling.classList.remove("novalid");
            }
            element.parentElement.nextElementSibling.classList.add("valid");
        }
        if(element.name=="name"){
            checkinputs(element,15)
        }
        if(element.name=="message"){
            checkinputs(element,30)
        }
        if(element.name=='email'){
            validmail(email);
        }
    });
});
function checkinputs(input ,long){
    if(input.value.length > long){
        if (
           input.parentElement.nextElementSibling.classList.contains("valid")
        ) {
           input.parentElement.nextElementSibling.classList.remove("valid");
           input.parentElement.nextElementSibling.innerText = errors[input.name]
        }
       input.parentElement.nextElementSibling.classList.add("novalid");
    }
}
function validmail(email){
    if (!email.value.match(validateEmail)) {
        if (
            email.parentElement.nextElementSibling.classList.contains("valid")
         ) {
            email.parentElement.nextElementSibling.classList.remove("valid");
            email.parentElement.nextElementSibling.innerText = errors[email.name]
         }
         email.parentElement.nextElementSibling.classList.add("novalid");
        }

}
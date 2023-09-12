const formOpenBtn = document.querySelector("#form_open");
home = document.querySelector(".home");
formContainer = document.querySelector(".form_container");
formCloseBtn = document.querySelector(".form_close");
signUpBtn = document.querySelector("#signup");
loginBtn = document.querySelector("#login");
showSignUp = document.querySelector(".signup_form");
closeLogin = document.querySelector(".login_form");
retrunToLogin = document.querySelector("#login");
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => {
    home.classList.add("show");
});

formCloseBtn.addEventListener("click", () => {
    home.classList.remove("show");
});

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye","uil-eye-slash" );
        }   
    })
   
})

signUpBtn.addEventListener("click", () => {
    showSignUp.style.display = "block";
    closeLogin.style.display = "none";
});

retrunToLogin.addEventListener("click", () => {
    showSignUp.style.display = "none";
    closeLogin.style.display = "block";
});
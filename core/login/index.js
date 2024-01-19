import {useApi} from "../api/UseApi.js";
import {useLogin} from "../api/doctor/UseLogin.js";

document.getElementById("btnLogin").addEventListener("click", () => {
    onclickLogin();
})

document.getElementById("btnRegister").addEventListener("click", () => {
    window.location.href = "http://trynot2die/registration"
})

function onclickLogin(){
    useApi(
        async () => useLogin({
            email: document.getElementById("inputEmail").value,
            password: document.getElementById("inputPassword").value
        }),
        (data) => onLoginSuccess(data),
        (error) => onLoginError(error)
    )
}

function onLoginSuccess(){
    window.location.href = "http://trynot2die/profile/"
}

function onLoginError(error){
    if (error == "Unauthorized"){
        console.log(error)
    }
    else {
        console.log(error)
    }
}
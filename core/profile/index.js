import {useApi} from "../api/UseApi.js";
import {useProfile} from "../api/doctor/UseProfile.js";
import {useProfileEdit} from "../api/doctor/UseProfileEdit.js";
import {useLogout} from "../api/doctor/UseLogout.js";


getProfile()

document.getElementById("ddbtnLogout").addEventListener("click", () => {
    onclickLogout()
})

document.getElementById("ddbtnToProfile").addEventListener("click", () => {
    getProfile()
})

function getProfile(){
    useApi(
        async () => useProfile(),
        (data) => {
            console.log(data)
            onGetProfileSuccess(data)
        },
        (error) => {
            console.log(error)
            onGetProfileError(error)
        }
    )
}

function onGetProfileSuccess(data){
    document.getElementById("dropdownProfile").innerHTML = data.name

    document.getElementById("inputFullName").setAttribute("value",data.name)

    document.getElementById("inputGender").value = data.gender
    document.getElementById("inputDOB").value = data.birthday
    document.getElementById("inputPhone").value = data.phone
    document.getElementById("inputEmail").value = data.email
}

function onGetProfileError(error){
    if(error === "Unauthorized"){
        window.location.href = "http://trynot2die/login/"
    }
    else{
        console.log(error)
    }
}

function onclickEditProfile(){
    useApi(
        async () =>
            useProfileEdit({
                email: document.getElementById("inputEmail"),
                name: document.getElementById("inputFullName"),
                birthday: document.getElementById("inputDOB"),
                gender: document.getElementById("inputGender"),
                phone: document.getElementById("inputPhone")
            }),
        (data) => console.log(data),
        (error) => console.log(error)
    )
}

function onclickLogout(){
    useApi(
        async () => useLogout(),
        (data) => onLogoutSuccess(),
        (error) => onLogoutError(error)
    )
}

function onLogoutSuccess(){
    window.location.href = "http://trynot2die/login"
}

function onLogoutError(error){
    console.log(error)
}
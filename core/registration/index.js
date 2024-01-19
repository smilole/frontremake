import {useApi} from "../api/UseApi.js";
import {useRegister} from "../api/doctor/UseRegister.js";
import {useSpeciality} from "../api/dictionary/UseSpecialities.js";

document.getElementById("btnAuth").addEventListener("click", () => {
    window.location.href = "http://trynot2die/login"
})

document.getElementById("btnRegister").addEventListener("click", () => {
    onclickRegister()
})

document.getElementById("inputSpec").addEventListener("input", () => {
    onchangeSpecs()
})

function onclickRegister(){
    useApi(
        async () => useRegister({
            name: document.getElementById("inputFullName").value,
            password: document.getElementById("inputPassword").value,
            email: document.getElementById("inputEmail").value,
            birthday: document.getElementById("inputDOB").value,
            gender: document.getElementById("inputGender").value,
            phone: document.getElementById("inputPhone").value,
            speciality: document.getElementById("list-specs").options.namedItem(document.getElementById("inputSpec").value).getAttribute("data-id")
        }),
        (data) => onRegisterSuccess(),
        (error) => onRegisterError(error)
    )
}

function onchangeSpecs(){
    useApi(
        async () => useSpeciality({
            name: document.getElementById("inputSpec").value,
            page: 1,
            size: 5
        }),
        (data) => onSpecsSuccess(data),
        (error) => console.log(error)
    )
}

function onRegisterSuccess(){
    window.location.href = "http://trynot2die/"
}

function onRegisterError(error){
    if (error == "Unauthorized"){
        console.log(error)
    }
    else {
        console.log(error)
    }
}

function onSpecsSuccess(data){
    const datalist = document.getElementById("list-specs")

    datalist.innerHTML = ""

    for(let i = 0; i < data.specialties.length; i++){
        const opt = document.createElement("option")

        opt.setAttribute("data-id", data.specialties[i].id)
        opt.innerHTML = data.specialties[i].name
        opt.setAttribute("name", data.specialties[i].name)

        datalist.appendChild(opt)
    }
}

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#inputPhone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});
let emailDIV;
let phoneDIV;
let selector;

window.onload = function onLoad() {
    emailDIV = document.getElementById("email");
    phoneDIV = document.getElementById("phone");
    selector = document.getElementById("contactWay");
}

selector.value.onChange = function poop() {
    console.log("success");
}
// Variables.
let expert_cash;
let form_sections;
let expert_chosen_cash;
var license_number;
var alreadyCompleted;
var chosenRequest;
var step = 0;

// This function makes absolute sure that the elements in the document load.
window.onload = function onLoad() {
    expert_cash = Math.floor((Math.random() * 20000) + 10000);
    form_sections = document.getElementsByClassName("card-section");
    expert_chosen_cash = document.getElementById("cash-expert");
}

function checkNotStep(rqNumber) {
    return step != rqNumber;
}

function checkStep(rqNumber) {
    return step == rqNumber;
}

function nextSection() {
    chosenRequest = selector.value;

    form_sections[step].style.display = "none";
    form_sections[step + 1].style.display = "block";
    step++;
}

function backSection() {
    chosenRequest = selector.value;

    form_sections[step].style.display = "none";
    form_sections[step - 1].style.display = "block";
    step--;
}

function restartPage() {
    window.location.reload();
}

function secondSection() {
    document.getElementById("projected-price").textContent = "Expert's Projected Price with " + "#" + document.getElementById("license-plate").value;
}
function moneyAnimation() {
    let extratemp;
    let textCash;
    extratemp = expert_cash.toString();
    textCash = "$" + extratemp.substring(0, 2) + "," + extratemp.substring(2, 6);
    if (alreadyCompleted != true) {
        setTimeout(function() {
            expert_chosen_cash.textContent = textCash;
        }, 2000);

        alreadyCompleted = true;
        console.log("ran function moneyAnimation() with conditional");
    }
}

function hasWhiteSpace(string) {
    return string.indexOf(' ');
}
function license_plate_filled() {
    license_number = document.getElementById("license-plate").value

    if (hasWhiteSpace(license_number) != -1 || license_number.trim().length <= 5 ) {
        alert("Your license number must be 6 characters long!");
    } else {
        console.log("no whitespaces and is long enough");
        nextSection();
        secondSection();
        moneyAnimation();
    }
}
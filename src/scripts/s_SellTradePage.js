// Variables.
let expert_cash;
let form_sections;
let expert_chosen_cash;
var license_number;
var email_address;
var alreadyCompleted;
var alreadyShown_error;
var chosenRequest;
var step = 0;

// This function makes absolute sure that the elements in the document load.
window.onload = function onLoad() {
    alreadyShown_error = false;
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

    console.log("NEXT")
}

function backSection() {
    chosenRequest = selector.value;

    form_sections[step].style.display = "none";
    form_sections[step - 1].style.display = "block";
    step--;

    console.log("BACK")
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

function hasAtLetter(string) {
    return string.indexOf('@');
}
function license_plate_filled() {
    license_number = document.getElementById("license-plate").value

    if (hasWhiteSpace(license_number) != -1 || license_number.trim().length <= 5 ) {
        document.getElementById("user-created-error").style.display = "block";
        document.getElementById("user-created-error").textContent = "Your license number must be 6 characters long!";

        if (alreadyShown_error == false) {
            alreadyShown_error = true;
            setTimeout(function() {
                document.getElementById("user-created-error").style.display = "none";
                alreadyShown_error = false;
            }, 1000);
        }
    } else {
        console.log("no whitespaces and is long enough");
        nextSection();
        secondSection();
        moneyAnimation();
    }
}

function email_address_filled() {
    email_address = document.getElementById("email-address").value

    if (hasWhiteSpace(email_address) != -1 || hasAtLetter(email_address) == -1 || email_address.trim().length <= 5 ) {
        document.getElementById("user-created-error").style.display = "block";
        document.getElementById("user-created-error").textContent = "Your email address doesn't seem to be typed in correctly.";

        if (alreadyShown_error == false) {
            alreadyShown_error = true;
            setTimeout(function() {
                document.getElementById("user-created-error").style.display = "none";
                alreadyShown_error = false;
            }, 1000);
        }
    } else {
        console.log("no whitespaces, long enough, and has the @ key.");
        nextSection();
    }
}
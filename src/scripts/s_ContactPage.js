// Variables.
let header1;
let header2;
let phoneNumber;
let selector;
let form_sections;
let descriptionBox;
var chosenRequest;
var step = 0;

// This function makes absolute sure that the elements in the document load.
window.onload = function onLoad() {
    header1 = document.getElementById("header1");
    header2 = document.getElementById("header2");
    phoneNumber = document.getElementById("phoneNumber");
    selector = document.querySelector("#selector");
    descriptionBox = document.getElementById("detailed-request");
    form_sections = document.getElementsByClassName("email-form");
}

// This function lets us do the ability of a little animating when we scroll, to give it more life.
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;

    // This checks whether the scrolling has passed this point or not.
    if (offset <= 1990) {
        header2.style.right = -3482.5 + offset * 1.75 + "px";
    } else {
        header2.style.right = 0 + "px";
    }

    if (offset <= 700) {
        header1.style.right = 1225 + offset * -1.75 + "px";
    } else {
        header1.style.right = 0 + "px";
    }

    if (offset <= 800) {
        phoneNumber.style.right = 1400 + offset * -1.75 + "px";
    } else {
        phoneNumber.style.right = 0 + "px";
    }
  })

// this be my dummy function for a little fun when making a support ticket >:) don't mind it for now.
function checkNotStep(rqNumber) {
    return step != rqNumber;
}

function checkStep(rqNumber) {
    return step == rqNumber;
}

function submission() {
    if (checkNotStep(4)) {
        chosenRequest = selector.value;

        form_sections[step].style.display = "none";
        form_sections[step + 1].style.display = "block";
        step++;
        document.getElementById("me").textContent = "You picked " + chosenRequest + ". What's your First Name and Last Name?";
    } else {
        document.getElementById("email-submission").style.display = "none";
        document.getElementById("success").style.display = "inline-block";
        document.getElementById("success").textContent = "Your request ticket was sent to us. We'll get back to you as soon as we can! Here's your ticket number: " + Math.floor((Math.random() * 1000000) + 0);
    }  

    if (checkStep(4)) {
        console.log("true");
        descriptionBox.style.padding = "0";
    }
    
    if (checkNotStep(1) == false) {
        document.getElementById("submitter").style.display = "inline-block";
    }
}
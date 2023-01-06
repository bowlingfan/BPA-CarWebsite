// Variables.
let header1;
let header2;
let phoneNumber;
let submitter;
let success;

// This function makes absolute sure that the elements in the document load.
window.onload = function onLoad() {
    header1 = document.getElementById("header1");
    header2 = document.getElementById("header2");
    phoneNumber = document.getElementById("phoneNumber");
    submitter = document.querySelector("#email-submission");
    success = document.querySelector("#success")
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
function working() {
    if (submitter && success) {
        submitter.style.display = "none";
        success.style.display = "block";
    }
}
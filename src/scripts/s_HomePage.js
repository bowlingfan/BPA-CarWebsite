let signup_text;
let signup_button;
let circle1;
let circle2;
let circle3;

window.onload = function onLoad() {
  signup_text = document.getElementById("signup-text");
  signup_button = document.getElementById("signup-button");
  circle1 = document.getElementById("gi5-circle1");
  circle2 = document.getElementById("gi5-circle2");
  circle3 = document.getElementById("gi5-circle3");
  //window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  if (offset <= 1613) {
    signup_text.style.bottom = 161.3 + offset * -0.1 + "rem";
  } else {
    signup_text.style.bottom = 0 + "rem";
  }

  if (offset <= 1713) {
    signup_button.style.top = -259.45 + offset * 0.15 + "rem";
  } else {
    signup_button.style.top = -2.5+ "rem";
  }

  circle1.style.left = 15 + offset * 1 + "px";
  circle2.style.right = 565 + offset * 0.5 + "px";
  circle3.style.right = 200 + offset * 0.78 + "px";
})
<script setup lang="ts">
  let signup_text;
  let signup_button;
  let circle1;
  let circle2;
  let circle3;

  window.onload = function ONLOAD() {
    signup_text = document.getElementById("signup-text");
    signup_button = document.getElementById("signup-button");
    circle1 = document.getElementById("gi5-circle1");
    circle2 = document.getElementById("gi5-circle2");
    circle3 = document.getElementById("gi5-circle3");
    window.scrollTo(0, 0);
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
</script>

<template>
  <div class="gridbox"> 
    <div class="grid-item grid-item-1">
      <router-link class="decor" tag="div" to="/">Home</router-link> &nbsp;
      <router-link class="decor" tag="div" to="/about">About</router-link> &nbsp; 
      <router-link class="decor" tag="div" to="/about">PlaceHolder</router-link> &nbsp;
      <router-link class="decor" tag="div" to="/about">PlaceHolder</router-link> &nbsp;
      <router-link class="decor" tag="div" to="/about">PlaceHolder</router-link> 
      <p class="name">2022 Honda Civic</p>
      <a class="button" href="">BUY NOW</a>
      <p class="cost">Used: $20,674</p>
    </div>
    
    <div class="grid-item card-main grid-item-2">
      <div class="card-item">
        card1
      </div>
    </div>
    <div class="grid-item card-main grid-item-3">
      <div class="card-item">
        card2
      </div>
    </div>
    <div class="grid-item card-main grid-item-4">
      <div class="card-item">
        card3
      </div>
    </div>
    <div class="grid-item grid-item-5">
      <div id="gi5-circle1" class="shapes-circle"></div>
      <div id="gi5-circle2" class="shapes-circle"></div>
      <div id="gi5-circle3" class="shapes-circle"></div>
      <p id="signup-text">Ready to get started now?</p>
      <a id="signup-button" href="">SIGN UP</a>
    </div>
    <div class="grid-item grid-item-6">footer placeholder</div>
  </div>
</template>
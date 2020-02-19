"use strict";

window.addEventListener("DOMContentLoaded", getColor);

const log = document.getElementById("theLogBit");

// function to get color
function getColor() {
  console.log("getColor");
  //   let initColor = document.getElementById("picker").value;
  let theColor = document.getElementById("picker").addEventListener("input", displayColor);
}

// function to display color
function displayColor(e) {
  console.log("displayColor");
  log.textContent = e.target.value;
}

getColor();

// console.log(getColor());

// function to convert to HEX

// Function to convert to RGB

// Function to convert to HSL

"use strict";

window.addEventListener("DOMContentLoaded", getColor);

const logHex = document.getElementById("theLogBit");
const logRGB = document.getElementById("theRGBLog");

// function to get color
function getColor() {
  //   console.log("getColor");
  let theColor = document.getElementById("picker").addEventListener("input", displayColor);
}

// function to display color
function displayColor(e) {
  //   console.log("displayColor");
  logHex.textContent = e.target.value;
}

// function to convert to RGB
function convertRGB() {
  console.log("convertRGB");
  let theColor = document.getElementById("picker").addEventListener("input", displayRGB);
}

// function to display RGB
function displayRGB(e) {
  console.log("displayRGB");
  logRGB.textContent = e.target.value;
}

getColor();
convertRGB();

// Function to convert to HSL

"use strict";

window.addEventListener("DOMContentLoaded", getColor);

const logHex = document.getElementById("theHEXLog");
const logRGB = document.getElementById("theRGBLog");
const logHSL = document.getElementById("theHSLLog");

// function to get color from picker
function getColor() {
  console.log("getColor");
  const chosenColor = document.getElementById("picker").addEventListener("input", displayColor);
}

// function to display color as HEX code
function displayColor(e) {
  console.log("displayColor");
  logHex.textContent = e.target.value;
  centerBoxColor();
  convertRGB();
}

// function to display chosen color in center box
function centerBoxColor() {
  console.log("centerBoxColor");
  const getBox = document.getElementById("thirdBox");
  document.getElementById("picker").addEventListener("input", function() {
    document.documentElement.style.setProperty("--third-box-color", this.value);
  });
}

// function to convert to RGB values
function convertRGB() {
  console.log("convertRGB");
  const chosenColor = document.getElementById("picker").addEventListener("input", displayRGB);
}

// function to display RGB values
function displayRGB(e) {
  console.log("displayRGB");
  logRGB.textContent = e.target.value;
  convertHSL();
}

// function to convert to HSL values
function convertHSL() {
  console.log("convertHSL");
  const chosenColor = document.getElementById("picker").addEventListener("input", displayHSL);
}

// function to display HSL values
function displayHSL(e) {
  console.log("displayHSL");
  logHSL.textContent = e.target.value;
}

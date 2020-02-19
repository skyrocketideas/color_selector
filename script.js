"use strict";

window.addEventListener("DOMContentLoaded", getColor);

// console.log(alert(0xee));

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
  document.getElementById("picker").addEventListener("input", function() {
    const hexCode = this.value;
    const convertToString = `${hexCode}`;
    const r = convertToString.substring(1, 3);
    console.log(r);
    const g = convertToString.substring(3, 5);
    const b = convertToString.substring(5);
  });
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
  // const chosenColor = document.getElementById("picker").addEventListener("input", displayHSL);
  let r = 200;
  let g = 200;
  let b = 100;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  // console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}

// function to display HSL values
function displayHSL(e) {
  console.log("displayHSL");
  logHSL.textContent = e.target.value;
}

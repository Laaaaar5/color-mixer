const rangeRed = document.querySelector("#red");
const rangeGreen = document.querySelector("#green");
const rangeBlue = document.querySelector("#blue");
const colorVP = document.querySelector("#colorValue");

rangeRed.value = 255;
rangeGreen.value = 150;
rangeBlue.value = 180;

function setBackgroundColor() {
  const redHex = (+rangeRed.value).toString(16);
  const greenHex = (+rangeGreen.value).toString(16);
  const blueHex = (+rangeBlue.value).toString(16);

  document.body.style.backgroundColor = `#${redHex}${greenHex}${blueHex}`;
  colorValue.innerText = `#${redHex}${greenHex}${blueHex}`;
}

function setColorCode() {
  colorVP;
}

document.addEventListener("input", setBackgroundColor);
setBackgroundColor();

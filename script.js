const rangeRed = document.querySelector("#red");
const rangeGreen = document.querySelector("#green");
const rangeBlue = document.querySelector("#blue");
const colorVP = document.querySelector("#colorValue");
const colorBtn = document.querySelector("#randomClr");

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

function randomColor() {
  const randomValue = fetch("https://dummy-apis.netlify.app/api/color");
  randomValue
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      rangeRed.value = data.rgb.r;
      rangeGreen.value = data.rgb.g;
      rangeBlue.value = data.rgb.b;
      setBackgroundColor();
    });
}

setBackgroundColor();
document.addEventListener("input", setBackgroundColor);

colorBtn.addEventListener("click", randomColor);

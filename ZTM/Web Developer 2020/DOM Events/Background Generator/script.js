var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.innerHTML = "Color 1 :  " + color1.value + "  Color 2 : " + color2.value;

}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

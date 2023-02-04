console.log("Salom world");

let tText = document.querySelector(`.text`);
let bButton = document.querySelector(`.toggleButton`);
let body = document.querySelector("body");
let press = document.querySelector(`.toggle`);
let m1 = document.querySelector(`.m1`);
let m2 = document.querySelector(`.m2`);
let m3 = document.querySelector(`.m3`);

let bos = () => {
  press.classList.toggle("active");

  if (press.classList.contains("active")) {
    tText.style.color = "#020";
    body.style.background = "#fff";
    m1.style.backgroundColor = "#000";
    m2.style.backgroundColor = "#000";
    m3.style.backgroundColor = "#000";
  }
  else {
    tText.style.color = "#fff";
    body.style.background = "#424141";
    m1.style.backgroundColor = "#fff";
    m2.style.backgroundColor = "#fff";
    m3.style.backgroundColor = "#fff";
  }

}
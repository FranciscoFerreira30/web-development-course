const box = document.querySelector(".box");
const title = document.querySelector("h1");

console.log(box);
console.log(title.innerHTML);

box.innerHTML = "Text";

box.innerHTML = "<p>Parágrado</p>";
const pragraph = document.querySelector("p");

title.style.color = "red";
pragraph.style.color = "green";

const calculator = document.querySelector(".calculator");

for (let i = 0; i < 10; i++) {
  console.log(i);
  box.innerHTML += `<button class = "btn">${i}</button>`;
}
const buttonsCalc = document.querySelectorAll(".btn");
buttonsCalc.forEach((button) => {
  button.addEventListener("click", () => {
    if (num1) {
      num2 = Number(button.innerHTML);
    } else {
      num1 = Number(button.innerHTML);
    }
  });
});
function basic() {
  console.log("Clicou!");
}

let num1;
let num2;
function basic() {
  console.log(num1 + num2);
  num1 = null;
  num2 = null;
}

title.addEventListener("mouseenter", () => {
  console.log("Title");
});

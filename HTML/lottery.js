"use strict";

// let beginValue = 2;
// let endValue = 70;
// let qty = 6;

let beginValue = Number(document.querySelector(".start").value);
let endValue = Number(document.querySelector(".end").value);
let qty = Number(document.querySelector(".qty").value);
let randNums = []


document.querySelector(".btn").addEventListener("click", function () {
for (let i = 0; i < qty; i++) {
  return randNums.push(Math.trunc(Math.random() * endValue) + 1);
}

document.querySelector(".lucky").textContent = randNums.join(",");
})

console.log(randNums);

clg             
const square = document.querySelector(".four");
// console.log(square);

const a = 8;
const b = 12;

// rectangle square = a * b
square.insertAdjacentHTML(
  "beforeend",
  ` <p>Площа прямокутника = ${a * b} см<p/>`
);

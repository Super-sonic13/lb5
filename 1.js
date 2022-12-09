const x = document.getElementById("x");
const y = document.getElementById("y");
// console.log(x.textContent, y.textContent);

setInterval(() => {
  [x.textContent, y.textContent] = [y.textContent, x.textContent];
}, 2000);


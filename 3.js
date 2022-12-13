const btn = document.getElementById("addBtn");
const input = document.getElementById("inputNumber");
const numVisualiztion = document.getElementById("forNumbers");
const form = document.getElementById("form");

setInterval(() => {
  input.value === "" ? (btn.disabled = true) : (btn.disabled = false);
});

const numbers = [];

const addNumber = (e) => {
  e.preventDefault();

  numbers.push(parseInt(input.value));
  // input.value = "";

  numVisualiztion.textContent = `Наразі ви додали ${numbers.length} чисел`;

  if (numbers.length === 10) {
    btn.removeEventListener("click", addNumber);

    min = Math.min(...numbers);
    max = Math.max(...numbers);

    document.cookie = "min=" + min + ";";
    document.cookie = "max=" + max + ";";
    alert(
      `Мінімальне введене число = ${min}\n` +
        `Максимальне введене число = ${max}`
    );
  }
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

let min = getCookie("min");
let max = getCookie("max");

if (typeof min !== "undefined" || typeof max !== "undefined") {
  form.remove();
}

const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

btn.addEventListener("click", addNumber);

document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.keyCode == 116) {
    e.preventDefault();

    if (
      confirm(
        `Мінімальне введене число = ${min}\n` +
          `Максимальне введене число = ${max}\n` +
          "Ви бажаєте зберегти ці дані у cookies?"
      )
    ) {
      alert("На сторінці наявні cookie файли, її потрібно перезавантажити.");
      location.reload();
    } else {
      deleteAllCookies();
      location.reload();
    }
  }
});

console.log(document.cookies);

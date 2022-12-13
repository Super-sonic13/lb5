const table = document.getElementById("table");
const img = document.getElementById("img");
const html =
  "<tbody><tr><td>Kirill</td></tr><tr><td>Danyil</td></tr><tr><td>Ivan</td></tr><tr><td>Den</td></tr></tbody>";
const local = localStorage.getItem("table");

const action = () => {
  table.insertAdjacentHTML("beforeend", html);

  table.insertAdjacentHTML(
    "beforeend",
    '<button type="button" id="btn">Save</button>'
  );
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    localStorage.setItem("table", html);
  });
  img.remove();
};

if (local) {
  img.remove();
  table.insertAdjacentHTML("beforeend", local);
} else {
  img.addEventListener("mouseover", action);
}

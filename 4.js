const block = document.getElementById("five");
const checkbox = document.getElementById("bold");
const text = document.getElementById("text");

if (localStorage.getItem("bold") === "true") {
  text.style.fontWeight = "900";
  checkbox.checked = true;
}

block.addEventListener("focus", () => {
  if (document.activeElement.id === "five" && checkbox.checked) {
    text.style.fontWeight = "900";
    localStorage.setItem("bold", "true");
    localStorage.setItem("checked", "true");
  } else text.style.fontWeight = "400";
});

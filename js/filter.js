let radio = document.querySelectorAll(`input[name="category"]`);
usp = new URLSearchParams(r).toString().split("&");
let category = "";
if (usp && usp[0].split("=")[0] == "category" && usp[0].split("=")[1])
  document.querySelector(`input[value="${usp[0].split("=")[1]}"]`).checked = true;
document.body.addEventListener("click", event => {
  element = event.target;
  if (element.classList.contains(`form-check-input`)) {
    if (element.value != "all")
      category = element.value;
    else
      category = "";
    console.log(element.value);
    location.assign(`/html/category.html?category=${category}`);
  }
})
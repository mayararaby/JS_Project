document.body.addEventListener('click', event => {
  let element = event.target.parentElement;
  let quantity = event.target.parentElement.parentElement.firstElementChild;
  let json = [];
  let obj = {};
  // console.log(element);
  if (element.dataset.id && element.dataset.category) {
    obj.id = element.dataset.id;
    obj.category = element.dataset.category;
    obj.quantity = 1;
    json.push(obj);
    json = JSON.stringify(json);
    localStorage.setItem("cart", json);
  }
  // else if (event.target.firstElementChild.id == "increment") {
  //   quantity.innerText = parseInt(quantity.innerText) + 1;
  // }
  // else if (event.target.firstElementChild.id == "decrement") {
  //   quantity.innerText = parseInt(quantity.innerText) - 1;
  // }
})


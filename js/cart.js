document.body.addEventListener('click', event => {
  let element = event.target.parentElement;
  let json = [];
  let obj = {};
  console.log(element);
  if (element.dataset.id && element.dataset.category) {
    obj.id = element.dataset.id;
    obj.category = element.dataset.category;
    obj.quantity = 1;
    json.push(obj);
    json = JSON.stringify(json);
    localStorage.setItem("cart", json);
  }
})
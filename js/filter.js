let radio = document.querySelectorAll(`input[name="category"]`);
let cardSection = document.querySelector(`section.section.pt-4 .row`);
let products = JSON.parse(localStorage.getItem("productsJSON"));
usp = new URLSearchParams(r).toString().split("&");
let priceRange = document.querySelector(`#calculatorSlider`);
let category = "";
function printElements(json) {
  cardSection.innerHTML = '';
  for (let i = 0; i < json.length; i++) {
    cardSection.innerHTML +=
    `
      <div class="col-lg-4 col-md-12 mb-4">
      <!-- Card -->
      <div class="card card-ecommerce">
        <!-- Card image -->
        <div class="view overlay">
          <img src="../img/${json[i].image}" class="img-fluid"
            alt="">
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
        <!-- Card image -->
        <!-- Card content -->
        <div class="card-body">
          <!-- Category & Title -->
          <h5 class="card-title mb-1"><strong><a href="./product.html?category=${json[i].category}&id=${json[i].id}" class="dark-grey-text">${json[i].productName}</a></strong></h5><span
            class="badge badge-danger mb-2">bestseller</span>
          <!-- Rating -->
          <ul class="rating">
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
            <li><i class="fas fa-star blue-text"></i></li>
          </ul>
          <!-- Card footer -->
          <div class="card-footer pb-0">
            <div class="row mb-0">
              <span class="float-left"><strong>${json[i].price}</strong></span>
              <span class="float-right">
                <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart" data-id="${json[i].id}" data-category="${json[i].category}"><i
                    class="fas fa-shopping-cart ml-3"></i></a>
              </span>
            </div>
          </div>
        </div>
        <!-- Card content -->
      </div>
      <!-- Card -->
    </div>
  `;
  }
}
if (usp && usp[0].split("=")[0] == "category" && usp[0].split("=")[1])
  document.querySelector(`input[value="${usp[0].split("=")[1]}"]`).checked = true;
document.body.addEventListener("click", event => {
  element = event.target;
  if (element.classList.contains(`form-check-input`)) {
    if (element.value != "all")
      category = element.value;
    else
      category = "";
    location.assign(`/html/category.html?category=${category}`);
  }
  if (element.dataset.order) {
    let text = document.querySelector(`p.blue-text`);
    products = JSON.parse(localStorage.getItem("productsJSON"));
    text.classList.remove('blue-text');
    text.classList.add('dark-grey-text');
    element.parentElement.classList.remove('dark-grey-text');
    element.parentElement.classList.add('blue-text');
    if (element.dataset.order == "low to high") {
      let data = products.sort((item1, item2) => parseInt(item1.price) - parseInt(item2.price));
      printElements(data);
    }
    else if (element.dataset.order == "high to low") {
      let data = products.sort((item1, item2) => parseInt(item2.price) - parseInt(item1.price));
      printElements(data);
    }
    else if (element.dataset.order == "default") {
      printElements(json);
    }
  }
});
let sortProduct = products.sort((item1, item2) => parseInt(item2.price) - parseInt(item1.price));
priceRange.max = sortProduct[0].price;
document.querySelector(`#endRange`).innerHTML = `${sortProduct[0].price}$`
priceRange.addEventListener('input', event => {
  let data = products.filter(item => parseInt(item.price) <= priceRange.value);
  document.querySelector(`#startRange`).innerHTML = `${priceRange.value}$`;
  if (data.length > 0) {
    printElements(data)
    localStorage.setItem("productsJSON", JSON.stringify(data));
  }
  else
    printElements(products);
});
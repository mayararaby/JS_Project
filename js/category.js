let r = location.search;
let usp = new URLSearchParams(r).toString().split("&");
let categories = ["laptops", "mobiles"];
let xhr = new XMLHttpRequest();
let section = document.querySelector(".section .row");
window["json"] = [];
let data = [];
function loadJSON(name, ...url) {
  window[name] = [];
  for (let i = 0; i < url.length; ++i) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      window[name].push(...JSON.parse(xhr.responseText));
    }
    xhr.open("GET", `../json/${url[i]}.json`, false);
    xhr.send();
  }
}
function getAllProducts () {
  loadJSON("json", ...categories);
  for (let i = 0; i < json.length; ++i) {
    do {
      ges = Math.floor(Math.random() * json.length);
    } while (data.includes(ges))
    data[i] = ges;
  }
  data = data.map(item => item = json[item]);
  for (let i = 0; i < Math.floor(data.length / 3) * 3; ++i) {
    section.innerHTML +=
      `
    <div class="col-lg-4 col-md-12 mb-4">
    <!-- Card -->
    <div class="card card-ecommerce">
      <!-- Card image -->
      <div class="view overlay">
        <img src="../img/${data[i].image}" class="img-fluid"
          alt="">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <!-- Card image -->
      <!-- Card content -->
      <div class="card-body">
        <!-- Category & Title -->
        <h5 class="card-title mb-1"><strong><a href="./product.html?category=${data[i].category}&id=${data[i].id}" class="dark-grey-text">${data[i].productName}</a></strong></h5><span
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
            <span class="float-left"><strong>${data[i].price}</strong></span>
            <span class="float-right">
              <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart" data-id="${data[i].id}" data-category="${data[i].category}" data-name="${data[i].productName}" data-img="${data[i].image}" data-price="${data[i].price}"><i
                  class="fas fa-shopping-cart ml-3"></i></a>
            </span>
          </div>
        </div>
      </div>
      <!-- Card content -->
    </div>
    <!-- Card -->
  </div>
    `
  }
  localStorage.setItem("productsJSON", JSON.stringify(data));
}
function getCategory(category) {
  loadJSON("json", category);
  for (let i = 0; i < json.length; i++) {
    section.innerHTML +=
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
                <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart" data-id="${json[i].id}" data-category="${json[i].category}" data-name="${json[i].productName}" data-img="${json[i].image}" data-price="${json[i].price}"><i
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
  localStorage.setItem("productsJSON", JSON.stringify(json));
}
if (usp[0].split("=")[0] == "category" || !usp[0].split("=")[0]) {
  let category = usp[0].split("=")[1];
  if (categories.includes(category)) {
    getCategory(category)
  }
  else {
    getAllProducts();
  }
} else if (usp[0].split("=")[0] == "search") {
  let key = usp[0].split("=")[1];
  if (categories.includes(key))
    getCategory(key);
  else {
    loadJSON("json", ...categories);
    function getnames() {
      let names = [];
      for (let i = 0; i < json.length; i++) {
        names[i] = json[i].productName
      }
      return names
    }
    loadJSON("json", ...categories);
    let productNames = getnames();
    let productList = [];
    let flag = true;
    if (key && key.trim().length > 0) {
      let myPro = productNames.filter(namp => namp.includes(key));
      for (let i = 0; i < json.length; i++) {
        for (let j = 0; j < myPro.length; ++j) {
          if (myPro[j] == json[i].productName && !productList.includes(json[i].productName)) {
            productList.push(json[i].productName);
            flag = false;
            section.innerHTML +=
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
                          <a class="" data-toggle="tooltip" data-placement="top" title="Add to Cart" data-id="${json[i].id}" data-category="${json[i].category}" data-name="${json[i].productName}" data-img="${json[i].image}" data-price="${json[i].price}"><i
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
      }
      localStorage.setItem("productsJSON", JSON.stringify(json));
      if (flag)
        getAllProducts();
    }
  }
}
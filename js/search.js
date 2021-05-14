let search = document.getElementById("search");
let searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", event => {
  event.preventDefault();
  if (search.value)
    location.assign(`./html/category.html?search=${search.value}`);
})
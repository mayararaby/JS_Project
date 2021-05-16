if (location.href.includes("cart")) {
  if (localStorage.getItem("userEmail") == undefined) {
    document.location.assign(("login-page.html"));
  }
}
document.body.addEventListener('click', event => {
  let element = event.target.parentElement;
  let obj = {};
  let json = [];
  let quantity = event.target.parentElement.parentElement.firstElementChild;
  let flag=false;
  if (element.dataset.id && element.dataset.category) {
    var arr = localStorage.getItem('cart');
    if (arr && arr.length) {
      let myArray = JSON.parse(arr);
      obj.id = element.dataset.id;
      obj.category = element.dataset.category;
      obj.name=element.dataset.name;
      obj.img=element.dataset.img;
      obj.price=element.dataset.price;
      obj.quantity = 1;
      for(var i=0;i<myArray.length;i++)
      {
        if(myArray[i].id==obj.id&&myArray[i].category==obj.category)
        {
          flag=true;
        }
      }
      if(!flag)
      {
      myArray.push(obj);
      myArray = JSON.stringify(myArray);
      localStorage.setItem("cart", myArray);
      }
      

    }
    else {
      obj.id = element.dataset.id;
      obj.category = element.dataset.category;
      obj.name=element.dataset.name;
      obj.img=element.dataset.img;
      obj.price=element.dataset.price;
      obj.quantity = 1;
      json.push(obj);
      json = JSON.stringify(json);
      localStorage.setItem("cart", json);
    }
  }
  else if (event.target.dataset.originalTitle && event.target.dataset.originalTitle == "Remove item") {
    var serachName=event.target.dataset.name;
    var arr = localStorage.getItem('cart');
    if (arr && arr.length) {
      let myArray = JSON.parse(arr);
      for(var i=0;i<myArray.length;i++)
      {
        if(myArray[i].name==serachName)
        {
          myArray.splice(i, 1);
          break;
        }
      }
      myArray = JSON.stringify(myArray);
      localStorage.setItem("cart", myArray);
      location.reload();
    }
  }
  else if (event.target.firstElementChild.id && event.target.firstElementChild.id == "increment") {
    quantity.innerText = parseInt(quantity.innerText) + 1;
    let serachName=event.target.firstElementChild.dataset.name;
    var arr = localStorage.getItem('cart');
    if (arr && arr.length) {
      let myArray = JSON.parse(arr);
      for(var i=0;i<myArray.length;i++)
      {
        if(myArray[i].name==serachName)
        {
        myArray[i].quantity= parseInt(quantity.innerText);
        document.getElementById(myArray[i].name).innerHTML="$"+myArray[i].quantity*myArray[i].price;
        break;
        }
      }
      myArray = JSON.stringify(myArray);
      localStorage.setItem("cart", myArray);
      total();
    } 
  }
  else if (event.target.firstElementChild.id && event.target.firstElementChild.id == "decrement") {
    if(parseInt(quantity.innerText) > 1) {   
      quantity.innerText = parseInt(quantity.innerText) - 1;
      quantityUser=parseInt(quantity.innerText);
      let serachName=event.target.firstElementChild.dataset.name;
      var arr = localStorage.getItem('cart');
      if (arr && arr.length)
      {
        let myArray = JSON.parse(arr);
        for(var i=0;i<myArray.length;i++)
        {
          if(myArray[i].name==serachName)
          {
          myArray[i].quantity= parseInt(quantity.innerText);
          document.getElementById(myArray[i].name).innerHTML="$"+myArray[i].quantity*myArray[i].price;
          break;
          }
        }
        myArray = JSON.stringify(myArray);
        localStorage.setItem("cart", myArray);
        total();
      }
    }
  } 
})
function total()
{
  var arr = localStorage.getItem('cart');
  if (arr && arr.length) {
    let myArray = JSON.parse(arr);
    var tot=0;
    for(var i=0;i<myArray.length;i++)
    {
      tot+=myArray[i].price*myArray[i].quantity;
    }
    document.getElementById("totalPrice").innerHTML="$"+tot;
  }

}
function cart()
{
  var arr = localStorage.getItem('cart');
  total();
  if (arr && arr.length) {
    let myArray = JSON.parse(arr);    
    for(var i=0;i<myArray.length;i++)
    {
      let tableBody=document.querySelector("table.product-table tbody");
      tableBody.innerHTML +=`
      <tr>
        <th scope="row">
          <img src="${myArray[i].img}" alt="" class="img-fluid z-depth-0">
        </th>
        <td>
          <h5 class="mt-3">
              <strong>${myArray[i].name}</strong>
          </h5>
        </td>
        <td>White</td>
        <td></td>
        <td>$${myArray[i].price}</td>
        <td class="text-center text-md-left">
            <span class="qty">${myArray[i].quantity} </span>
            <div class="btn-group radio-group ml-2" data-toggle="buttons">
              <label class="btn btn-sm btn-primary btn-rounded">
                <input type="radio" name="options" id="decrement" data-name="${myArray[i].name}">&mdash;
              </label>
              <label class="btn btn-sm btn-primary btn-rounded">
                <input type="radio" name="options" id="increment" data-name="${myArray[i].name}">+
              </label>
            </div>
        </td>
        <td class="font-weight-bold">
          <strong id="${myArray[i].name}">$${myArray[i].price*myArray[i].quantity}</strong>
        </td>
        <td>
          <button type="button" class="btn btn-sm btn-primary" data-toggle="tooltip" data-placement="top" data-original-title="Remove item" data-name="${myArray[i].name}">X</button>
        </td>
      </tr>`     
    }
  }
}
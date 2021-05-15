var r = window.location.search;
var arr = [];
var objLocal={};
var flag=true;
var usp = new URLSearchParams(r).toString().split("&");
    
    // console.log(usp)
    
    for(i=0 ; i< usp.length; i++){
        arr[usp[i].split("=")[0].trim()] = usp[i].split("=")[1]

    }
    console.log(arr["category"])
var xhttp = new XMLHttpRequest();
xhttp.open("GET", `../json/${arr["category"]}.json`, true);
var id=arr["id"];
//console.log(id)
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
   //console.log(this.responseText)
    var obj = JSON.parse(this.responseText)
 //   console.log(obj[id])
 //  console.log(obj[id].productName)
 //  console.log(obj[id].image)
for(var i = 0 ; i < obj.length; i++){
  if(obj[i].id == id){
    document.getElementById("productName").innerHTML = obj[id].productName;
    document.getElementById("Description").innerHTML = obj[id].description;
    document.getElementById("prodcutimg").src = obj[id].image;
    document.getElementById("prodcutimg2").src = obj[id].image;
    document.getElementById("prodcutimg3").src = obj[id].image;
    objLocal.name=obj[id].productName;
    objLocal.img=obj[id].image;
    objLocal.price=obj[id].price;
    objLocal.quantity=1;
    objLocal.id=obj[id].id;
    objLocal.category=obj[id].category;
    


    break;
  }
  
}
  
      }
  }

xhttp.send();
function fillloacl()
{
  if(flag)
  {
  var arr = localStorage.getItem('cart');
  if (arr && arr.length) {
    let myArray = JSON.parse(arr);
    myArray.push(objLocal);
    myArray = JSON.stringify(myArray);
    localStorage.setItem("cart", myArray);
  }
}
flag=false;
   
}
document.getElementById("addCart").addEventListener('click',fillloacl);
  
 
      


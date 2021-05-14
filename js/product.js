var r = window.location.search;
var arr = [];
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
    document.getElementById("productName").innerHTML=obj[id].productName;
    document.getElementById("Description").innerHTML=obj[id].description
    document.getElementById("prodcutimg").src=obj[id].image
    break;
  }
  
}
  
      }
  }

xhttp.send();

  
 
      


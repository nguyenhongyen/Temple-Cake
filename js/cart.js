document.querySelector(".btn-dec").setAttribute("disabled","disabled");

var valueCount;
var price = document.getElementById("price").innerHTML;

function priceTotal(){
    var total = valueCount * price;
    document.getElementById("price").innerHTML = total;
}

document.querySelector(".btn-inc").addEventListener("click",function(){
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount

    if(valueCount > 1){
        document.querySelector(".btn-dec").removeAttribute("disabled");
        document.querySelector(".btn-dec").classList.remove("disabled");
    }
    if(valueCount > 50 ){
        document.querySelector(".btn-inc").setAttribute("disabled","disabled");
    }

    

    priceTotal()
})

document.querySelector(".btn-dec").addEventListener("click",function(){
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount

    if(valueCount == 1 ){
        document.querySelector(".btn-dec").setAttribute("disabled","disabled");
    }

    if(valueCount < 51 ){
        document.querySelector(".btn-inc").removeAttribute("disabled");
        document.querySelector(".btn-inc").classList.remove("disabled");
    }
    priceTotal()
})
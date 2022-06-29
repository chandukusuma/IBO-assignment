const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

var arr1 = listOfProducts;

var sum = 0;
var sum1 = 0;
var sum2 = 0;

for(let i = 0; i < arr1.length; i++){
    if(arr1[i].productName == "TV"){
        sum += arr1[i].quantity
    }
    
    else if(arr1[i].productName == "AC"){
        sum1 += arr1[i].quantity
    }
    else{
        sum2 += arr1[i].quantity
    }
}




var uniqueArray = [
    ...new Map(arr1.map((item) => [item["productName"], item])).values(),
];



for(var i = 0; i < uniqueArray.length; i++){
    if(uniqueArray[i].productName == "TV"){
        uniqueArray[i].quantity = sum
    }
    else if(uniqueArray[i].productName == "AC"){
                uniqueArray[i].quantity = sum1
    }
    else{
        uniqueArray[i].quantity = sum2
    }
}

console.log(uniqueArray)




//console.log(arr)

var obj = [];


for(var i = 0; i < arr1.length; i++){
   var k = arr1[i].productName;

   if(obj[k] == undefined){
    obj[k] = 1
   }
   else{
    var prev = obj[k];
    obj[k] = prev+1
   }
}

var obj1 = {};

for(key in obj){
    //obj1 = (key + ":" + obj[key]);
    obj1 = (Object.assign({}, obj));
}

console.log(obj1)







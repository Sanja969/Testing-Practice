function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverse(str){
    var revStr="";
    for(i=str.length-1;i>=0;i--){
      revStr+=str[i];
    }
    return revStr;
}
calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};
function caesarCipher(str,key){
  // str=str.toLowerCase();
  let result='';
  let charcode = 0;
  for (var i = 0; i < str.length; i++) {
    
    charcode = str[i].charCodeAt() + key;
    if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
      while (charcode > 122) {
        charcode = charcode - 122 + 96;
      }
      while (charcode < 97) {
        charcode = charcode + 122 - 96;
      }

      
    } 
    
    else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {

      while (charcode > 90) {
        charcode = charcode - 90 + 64;
      }
      while (charcode < 65) {
        charcode = charcode + 90 - 64;
      }

    }
    else{
      charcode = str[i].charCodeAt(); 
    }
   result += String.fromCharCode(charcode);
  }
  return result;
 
}


function analyzeArray(arr){

  let obj={};
  
  average=function (){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum/arr.length;

  }
 min = function () {
   let min = arr[0];
   for (let i = 1; i < arr.length; i++) {
     if(arr[i]<min){
       min=arr[i];
     }
   }
   return min;
 };
 max = function () {
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
     if (arr[i] > max) {
       max = arr[i];
     }
   }
   return max;
 };
  obj.average=average();
  obj.min=min();
  obj.max = max();
  obj["length"]= arr.length;
  return obj;
  
}

console.log(analyzeArray([5,2,1]));

module.exports.capitalize = capitalize;
module.exports.reverse = reverse;
module.exports.calculator = calculator;
module.exports.caesarCipher = caesarCipher;
module.exports.analyzeArray = analyzeArray;
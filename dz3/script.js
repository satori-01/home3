function getDataType(input) {
  return typeof input;
}
console.log(getDataType(false));        
console.log(getDataType('hello world!')); 
console.log(getDataType(42));   


function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}


console.log(reverseString('hello'));     
console.log(reverseString('world'));      
console.log(reverseString('JavaScript'));   

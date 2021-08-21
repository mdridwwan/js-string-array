const numbers = [2, 4, 6, 78, 8, 3, 67, 43, 57, 23, 20];
const numberSliced = numbers.slice(3, 10);
//console.log(numberSliced);

//splice remove the element and array. korano and show jai..!
const numbersSpliced = numbers.splice(4, 2);
console.log(numbersSpliced);
console.log(numbers);
//splice remove the element and array , abr array er modde elemnt add korse...!10 20 30!
const numbersSpliced2 = numbers.splice(4, 2, 10, 20, 30);
console.log(numbersSpliced2);
console.log(numbers);
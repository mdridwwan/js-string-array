const anthem = 'Amr Sonar Bangla Ami Tomai Valobashi';
const word = anthem.split(' ');
const wordA = anthem.split('a');
// console.log(wordA);

const smallslice = anthem.slice(5, 13);
//console.log(smallslice);

// 13 tar porer 5ta deo
const anotherPart = anthem.substr(13, 5);
//console.log(anotherPart);

//13 theke 18 element dekhabe
const anotherThePart = anthem.substring(13, 19);
//console.log(anotherThePart);

// concat
const first = 'Amader';
const second = 'city';
// const fullString = first + second;
// concat hochhe sob element  k jora lagai..! superglow r moto.
const fullString = first.concat(second).concat('abd').concat('Brisal').concat('Alfa')
    //console.log(fullString);

// Join sob gula ry aksathe korbe...
const words2 = ['a', 'b', 'c', 'd', 'e'];
const alljoind = words2.join('');
//console.log(alljoind);
console.log('Raisa tomi koto gula Bachhar ma hoty chao..?')
const raisa = Math.round(Math.random() * 10);
console.log('Ami ' + raisa + ' Bachhar ma hoty cahi..!');

const task = "Practice Makes a person perfect";

const index = task.toLowerCase().indexOf("M");
console.log(index);

const str1 = 'Bangladesh is a beautiful country.';
console.log(str1.endsWith("country"));

const str = 'I love coding more than eating.';
const qix = str.slice(2, 6);
console.log(qix);

const names = ["rafiq", "jabbar", "bakkar", "habib", "dalim"];
const Names = names.reverse();
console.log(Names);
// console.log('hello')

////////////////////////1/////////////////////////
//пример 1
// Result: ["a", "b", "c", 0, 1, 2, 3];
// const a = ["a", "b", "c"];//
// const b = [1, [2, 3]];//
// const c = 0;
// const d = [...a, c, b[0], ...b[1]];
// console.log(d)

//пример 2
// const a = ["a", "b", "c"];//
// const b = [1, [2, 3]];//
// const c = 0;
// //деструктуризируем переменную b
// const [d, f] = b;

// const array = [...a, c, d, ...f];
// console.log(array)

////////////////////////2/////////////////////////
//const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// const b = [...a]

// const c = b.splice(3, 3, "a", "b", "c");
// console.log(c)

// b.splice(3, 3, "a", "b", "c");
// console.log(b)

//////////////////////3////////////////////////
// const a = [];
// for (let i = 1; i <= 10; i += 1){
//     a.push(i)
// }

// const b = [...a];

// console.log("Массив а:", a);
// console.log("Массив b:", b);

// const c = b.fill(0, 5, 8); //(0)-значение которым хотим заменить; второй параметр это индекс с которого хотим заменить; третий до какого индекса;
// console.log(c)

////////////////////////4///////////////////
//Последний индекс буквы "n"
//Пример1//
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// const b = [...a];
// let index = 0;
// for (let i = 0; i < b.length; i += 1){
//     if (b[i] === 'n') {
//         index =  i;
//     }

// }
// console.log(index);

// //Пример2//
// //Через lastIndexOf()
// const c = b.lastIndexOf("n")
// console.log(c)

//////////////////////5//////////////////
//Получить одноуровневый массив
//Result: [1, 2, 3, 4, 5, 6, 7]
//Пример 1///////
//

///////////////////7/////////////////
//Получить массив ключей
// function getKeys(object) {
//     let keys = [];
//     for (const key in object) {
//         keys.push(key);
//     }
//     return keys
// }

// function getValues(object) {
//     let values = [];
//     for (let key in object) {
//         values.push(object[key])
//     }
//     return values
// }

// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }))
// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }))

/////////////////////8///////////////////////
//Реверс числа -12345
// Write a function that reverse an integer number.
//You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321

// function reverseNumber(number) {
//     let reverseStrinr = '';

//     let number2 = 0;
//     let numberResult = 0;
//     if (number < 0) {
//         number2 = number * -1;
//     } else {
//         number2 = number
//     }
//     const numberString = String(number2)
//     for (let i = numberString.length - 1; i >= 0; i -= 1) {
//         reverseStrinr += `${numberString[i]}`
//     } console.log(reverseStrinr);
//     numberResult = Number(reverseStrinr)
//     if (number < 0) {
//         numberResult = numberResult * -1;
//     } return numberResult
// } console.log(reverseNumber(-12345));
// console.log(reverseNumber(12345));

// function reverseNumber(number) {
//     const numberString=String(number)
//     console.log(numberString)
//     let reversString = '';
//     for (let i = numberString.length - 1; i > 0; i -= 1){
//         reversString += i;

//     }
//     return Number(reversString*-1)
// }

// console.log(reverseNumber(-12345))

//////////////////9//////////////////////////
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// function createObject(array) {
//     const newObject = {};
//     for (let key in array[0]) {
//         newObject[key] = [];
//     }
//     console.log(newObject);

//     for (let key in newObject) {
//         for (const user of array) {
//             newObject[key].push(user[key])
//         }
//         newObject[key] = newObject[key].flat()

//         for (let repit of newObject[key]) {
//         let index = newObject[key].indexOf(repit);
//         if (newObject[key].includes(repit)) {
//             newObject[key].splice(index, 1);
//         }
//     }
//     }
//     return newObject;

// console.log(createObject(users))

// function createObject(array) {
//     const newObject = {};
//     for (let key in array[0]) {
//         newObject[key] = [];
//     }
//     console.log(newObject);

//     for (let key in newObject) {
//         for (const user of array) {
//             newObject[key].push(user[key])
//         }
//         newObject[key]=newObject[key].flat()
//     }
//     console.log(newObject);

//     for (let repit of newObject[key]) {
//         let index = newObject[key].indexOf(repit);
//         if (newObject[key].includes(repit)) {
//             newObject[key].splice(index, 1);
//         }
//     }
//     console.log(newObject[key]);
//     // return newObject;
// }

// createObject(users)

// // Write a function that converts the argument values.
// If it will be a string, convert it to number and wise versa.
// // It should return an array of converted values.
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// const x = function (...args) {
//   const array = [];
//   for (let i of args) {
//     if (i===String(i)) {
//       array.push(Number(i))
//     } else {
//       array.push(String(i))
//     }

//   }
//   return array;
// }

// console.log(x('1', 2, 3, '4'))

// 1
// const x = function (...args) {
//     const array = [];
//     for (let i of args) {
//         if (typeof i === "number") {
//             array.push(String(i));
//         } else {
//             array.push(Number(i));
//         }
//     }
//     return array;
// }
// console.log(x('1', 2, 3, '4'));
// // 2
// const x = ['1', 2, 3, '4', 7, "7"];
// const array = x.map(number => typeof number === "number" ? String(number) : Number(number));

////////////////////////////////////////2////////////////////////////////////////////////

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const a = [2, 4, 6, 8];
// const b = [0, -3, 5, 7];
// const positiveSum = function (args){
//     return args.filter(number => number > 0).reduce((acc, number) => acc += number);
// }
// console.log(positiveSum(b));
// const positiveSum = function (args){
//     return args.reduce((acc, number) => number > 0 ? acc += number : acc);
// }
// console.log(positiveSum(a));

////////////////////////////

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count
// of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = function (string, letter) {
//   const lettersArr = string.toLowerCase().split("");
//   const lettersSum = lettersArr.filter(elem => elem === letter).length;
//   return lettersSum;
// }

// console.log(letterCount("MagggggGGGy", "g"))

//reduce

// const letterCount = function (string, letter) {
//   const lettersArr = string.toLowerCase().split("");
//   const lettersSum = lettersArr.reduce((acc, elem) =>  elem === letter? acc+=1:acc , 0);
//   return lettersSum;
// }

// console.log(letterCount("Maggy", "g"));

///////////////////////////////////4////////////////////////////////////////
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the
// points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = function (array) {
//   const points = array.reduce((acc, elem) => {
//     if (Number(elem[0]) > Number(elem[2])) {
//      return acc += 3;
//     } else if (Number(elem[0]) === Number(elem[2])) {
//      return acc += 1;
//     } else {
//      return acc
//     }
//   }, 0)
//   return points;
// }

// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']))

// const countPoints = function (array) {
//   const points = array.reduce((acc, elem) => {
//     const elemArr = elem.split(":");
//     console.log(elemArr)
//     if (Number(elemArr[0])> Number(elemArr[1])) {
//       return (acc += 3);
//     } else if (Number(elemArr[0]) === Number(elemArr[1])) {
//       return (acc += 1);
//     } else {
//       return acc;
//     }
//   }, 0);
//   return points;
// };

// console.log(
//   countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])
// );

// const countPoints = function (array) {

//   const pointWin = array.filter(elem => Number(elem[0]) > Number(elem[2]));
//   console.log(pointWin)
//   const point = array.filter(elem => Number(elem[0]) === Number(elem[2]));
//   console.log(point)
//   return pointWin.length*3+point.length
  
// }


// console.log(
//   countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])
// );




///////////////////////////////////////////5//////////////////////////////////////
// getSums([1, 2, 3, 4, 5])
// [1, 3, 6, 10, 15]

// function getSum(array) {
//   const SumArray=array.reduce((acc, item, index)=>index===0? acc.push(item):,[])
// }







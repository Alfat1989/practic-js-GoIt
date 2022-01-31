console.log('hello')

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
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


function createObject(array) {
    const newObject = {};
    for (let key in array[0]) {
        newObject[key] = [];
    }
    console.log(newObject);

    for (let key in newObject) {
        for (const user of array) {
            newObject[key].push(user[key])
        }
        newObject[key] = newObject[key].flat()
        
        for (let repit of newObject[key]) {
        let index = newObject[key].indexOf(repit);
        if (newObject[key].includes(repit)) {
            newObject[key].splice(index, 1);
        }
    }
    }
    return newObject;

    
    
}

console.log(createObject(users))

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








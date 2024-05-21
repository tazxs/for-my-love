// let price = 2500;

// if (price >= 2500) {
//     price = price * 0.9;
//     console.log(`2700`);
// } else {
//     console.log(`не хватает денЯг`);
// }

//========

// let count = 20;

// if ((count = 0)) {
//   count = count + 5;
//   console.log(count);
// } else if (count < 5) {
//   count = count + 10;
//   console.log(count);
// } else if (count === 20) {
//   count = count - 10;
//   console.log(count);
// }

// -------------

// let score = 75;

// if (score > 70) {
//     console.log(`отличная работа`);
//     if (score > 50) console.log(`отличная работа, но есть куда расти`);
// } else {
//     console.log(`попробуй еще раз`);
// }

// =============

// let age = 25;
// let hasLisence = true;

// if (age >= 18 && hasLisence) {
//   console.log(`вы можете водить автомобиль`);
// } else if (age === 23 || age > 30) {
//   console.log(`хорошо`);
// } else {
//   console.log(`к сожелению нет!`);
// }

// //* задание 211

// //1
// let isSunny = false;
// let isRaining = true;

// if (isSunny) {
//   console.log(`хорошая погода!`);
// } else if (isSunny && isRaining) {
//   console.log("необычная погода");
// } else if (isSunny){
//   console.log(`на улице жарко! можно одется легко`);
// }else{
//   console.log(`не забудьте зонт!`);
// }

// // //2
// let price = 2500;

// if (price > 2000) {
//   price = price * 0.9;
//   console.log("ваша скидка составляет: " + price + "тг");
// }else if(price > 1500){
//   price = price * 0.9;
//   console.log("ваша скидка составляет: " + price + "тг");
// }else if (price > 1200){
//   price = price * 0.9;
//   console.log("ваша скидка составляет: " + price + "тг");
// }else{
//   console.log(`у вас не хвотает средств, пожалуста пополните счет!`);
// }
// // //3
// let age = 14;
// if (age >= 18) {
//   console.log(`можно смотреть фильм`);
// } else if (age >= 14 ){
//   console.log(`вам нет 18 лет!, порекомендовать ли вам другой фильм?`);
// }else {
//   console.log(`где твои родители,мальчик?`);
// }

// // //4
// let isSunnyDay = true;
// let isWindlyDay = true;
// let isRainyDay = false;
// if (isSunnyDay || !isWindlyDay) {
//   console.log(`рекомендуемый транспорт : велосипед`);
// }  else if (isRainyDay && isWindlyDay) {
//   console.log(`рекомендуемый транспорт: машина`);
// }
//   else if(!isRainyDay && !isWindlyDay){
//   console.log(`рекомендуемый транспорт: истрибитель нахуй`);
// }else{
//   console.log(`пешком ходи заебал`);
// }

//========

// for (let i = 0; i < 5; i++ ) {
//   console.log(`иттерация номер ` + i);
// } 

//=======

// for (let i = 2; i <=10; i += 2){
//   console.log(i);
// }

// for (let j = 5; j <=55; j += 5){
//   console.log(j);
// }

// let N = 20;
// let i = 1;
// let sum = 0;

// while(i <= N){
//   if (i % 2 === 0) {
//     sum++;
//   }
//   i++;
// }

// let count = 0;
// while (count < 5) {
//   console.log(count);
//   count++;
// }

// let i = 1;
// while (i !== 10) {
  
// }

// let num = 0;

// while (num < 100) {
//   num += Math.floor(Math.random() * 10)
//   console.log(num);
// }

//!база
// let i = 1;
// while (i <= 10){
//   console.log(i);
//   i++;
// }
// let i = 2;
// while (i <= 20){
//   console.log(i);
//   i += 2;
// }

// let i = 10;
// while (i >= 1){
//   console.log(i);
//   i--;
// }
// let count = 1;
// while (count <= 7 ) {
//     console.log('Итерация - ' + count);
//     count++;
// }

// let  i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// let N = 10;
// let i = 1;
// while (i <= N) {
//     console.log(i);
//     i++;
// }

// let N = 10;
// let i = 1;
// let sum = 0;
// while (i <= N) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log('сумма четных чисел равна от 1 до ' + N + ': ' + sum);

// let x = 10;
// let i = 1;
// while (i <= 100) {
//     console.log(`${x} * ${i} = ${x * i}`);
//     i++;
// }

// let count = 0;
// while (count <= 5) {
//     console.log('итеераци номер - ' + count);
//     count++;
// }


// let i = 0;
// while (i !== 10) {
//     i++;
// }

//! random
// let num = 0;
// while (num < 100) {
//     num += Math.floor(Math.random() * 10)
//     console.log(num);
// }

//! обратный отчет
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//* сумма чисел
// let N = 10;
// let i = 1;
// let sum = 0;
// while (i <= N) {
//     sum += i;
//     i++;
// }

// console.log('сумма чисел от 1 до ' + N + ' равна ' + sum );

//! колво цифер
// let number = 123456;
// let count = 0;
// while (number > 0) {
//     count++;
//     number = Math.floor(number / 10)
// }
// console.log("количество цифер: " + count);

//! делятся на три
// let N = 30;
// let i = 1;
// while (i <= N) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }

//! первое число
// let i = 101;
// while (i % 17 !== 0) {
//     i++;
// }
// console.log('первое число, больше 100, делящися на 17 ' + i);

//! поиск символов
// let str = 'привет, нахуй блять';
// let i = 1;
// while (i < str.length) {
//     console.log(str[i]);
//     i += 2;
// }


// let N = 50;
// let i = 1;
// let sum = 0;
// while (i <= N) {
//     if (i % 5 === 0) {
//         sum += i;
//     }
//     i++;
//     console.log(sum);
// }

// let N = 10;
// for (let i = N; i >= 1; i--) {
//     console.log(i);
// }


//! подчет гласных
// let str = 'Hello world';
// let vowels = 'aeiouAEIOU';
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++;
//     }
// }
// console.log(count);


//! реверс
// let number = 123454321;
// let revers = 0;

// while (number > 0) {
//     let digit = number % 10;
//     revers = (revers * 10) + digit;
//     number = Math.floor(number / 10)
//     console.log(revers);
// }

// let number = 123456789;
// let revers = 0;
// while (number > 0) {
//     let digit = number % 10;
//     revers = (revers * 10) + digit;
//     number = Math.floor(number / 10);
//     console.log(revers);
// }

//! палиндром
// const originalNumber = 123456789;
// let number = originalNumber;
// let reversedNumber = 0;

// while (number > 0) {
//     let digit = number % 10;
//     reversedNumber = (reversedNumber * 10) + digit;
//     number = Math.floor(number / 10);
// }

// if (originalNumber === reversedNumber) {
//     console.log('полиндром: ' + originalNumber);
// } else {
//     console.log('не полиндром: ' + originalNumber );
// }


// let number = 12345;
// let count = 0;

// while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log('количество цифер равен: ' + count);

let passwordLength = 8;
let password = '';
let symbol = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

while (password.length < passwordLength) {
    let randomIndex = Math.floor(Math.random() * symbol.length);
    password += symbol[randomIndex]
}
console.log('Случайный пароль: ' + password);
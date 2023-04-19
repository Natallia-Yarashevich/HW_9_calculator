// msgBox('Hello World');
// console.log('Hello World');
// // msg('Hello World');
// let name = "Ilya";
// alert( 'hello ${1}' );
// alert( 'hello ${"name"}' );
// alert( 'hello ${name}' );
// let x = 5;         
// let y = 2;        
// let z = x + y;
// console.log(z);
// function showX(x)
// { 
// 	return x;
// }
// console.log(showX(28));
// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2 
x = 5; 
x = 2;
console.log(x);

x = 5; 
x -= 2;
console.log(x);
let cleaner=22000;
let vocalTeacher=22000;
console.log(cleaner + vocalTeacher );

let city="Владивосток";
let ears=2000;
console.log(city + " " + ears );

let messagere=128;
let likePhoto=254;
let vk=137;
let yuotube=201;
console.log(Number((messagere + likePhoto + vk + 201)/60));

let a=2;
console.log(a ** 5 );

console.log("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!");

const greetings = "Привет";
const names = "Кот";
console.log(greetings + ", " + " " + names );

let time;
console.log(time);
time = 34;
console.log(time);
console.log("Старт поездки. Осталось минут: " + time);
time = time - 15;
console.log("Немного сторис в соцсетях. Осталось минут: " + time);
time = time - 10;
console.log("Немного не новостей, но событий. Осталось минут: " + time);
time = 0;
console.log("Вы приехали. Добро пожаловать в Москву.");

const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градусов по Фаренгейту равны ${celsius.toFixed(2)} градусам Цельсия.`);

// const deposit = 30000;
// const rate = 18.5;
// const growth = 150;
// const finalDeposit = deposit + growth;
// console.log(`Ваш депозит на начало расчётного периода составлял ${deposit} руб.`);
// console.log(`Согласно вашему тарифу, вам была присвоена ставка ${rate}%`);
// console.log(`К концу расчётного периода прирост составил ${growth} руб., и на данный момент ваш депозит составляет ${finalDeposit} руб.`);

// Для кодепена
const rate = 7;
const years = 1;

let deposit = +prompt('Введите сумму, которую вы хотите внести на вклад:');
let interest = deposit * rate / 100;
let finalDeposit = deposit + interest;

alert(`Через ${years} год у вас будет ${finalDeposit} руб. на счету`);
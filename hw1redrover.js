// 1.1 Объявите две переменные: firstName и lastName

let firstName
let lastName

//  1.2 Передайте значение “John”в переменную firstName и значение “Adams”  в переменную lastName.
firstName='John'
lastName='Adams'

//  1.3 Выведите на страницу значение firstName и lastName (должно показать John Adams).
document.write(firstName,' ', lastName,'<br>')
// 1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
firstName='Anna'
lastName='Karenina'
document.write(firstName,' ', lastName);
// В итоге на экране должно быть две строки:
// John Adams
// Anna Karenina

// 2  Выведите в консоль тип данных следующих переменных:
let a
let c = 9  
let str = 'Hi 5!' 
let b = true
let y = 9 + '1'
let x =  'a' / 6
console.log(typeof(a))
console.log(typeof(c))
console.log(typeof(str))
console.log(typeof(b))
console.log(typeof(y))
console.log(typeof(x));
// 3 Подумайте, какие переменные логично объявить через const. Придумайте 3 разных,  объявите их и  выведите на экран
const PI = 3.141592653589793;
const carName = "Volvo";
const myBirthday='05.01.1994';
document.write(PI,'<br>', carName,'<br>',myBirthday);
// Креативное задание*:
//  1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.
/*
DATA: cofee,sugar
cofee: grain, instant, ground
sugar: white sugar or without sugar
syrup:vanilla,caramel, without syrup
Task: Make a cup of coffee
1

*/

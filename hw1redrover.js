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
document.write(firstName,' ', lastName,'<br>');
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
document.write(PI,'<br>', carName,'<br>',myBirthday,'<br>','<br>');
// Креативное задание*:
//  1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.
/*
DATA: coffee,sugar,milk,syrup
coffee: grain 100% Arabica
sugar: white
milk: cold
syrup: caramel

Task: Make a cup of classic cappuccino in a coffee machine
1.Turn on the coffee maker
2.Take a cold milk
3.Pour milk into the milk compartment
4.Pour beans into the bean chute
5.Select cappuccino mode on the coffee maker
6.Press the 'Cappuccino' button 
7.Pour the caramel syrup into the finished coffee
Get a subtle shade reminiscent of a creamy punch

*/

let coffee= 'beans "100% Arabica"'
let sugar= 'white'
let topping1 = 'cold milk'
let topping2='caramel syrup'

let step1='1.Turn on the coffee maker'
let step2=`2.Take a ${topping1}`
let step3=`3.Pour ${topping1} into the milk compartment `
let step4=`4.Pour ${coffee} into the bean chute `
let step5=`5.Select cappuccino mode on the coffee maker`
let step6=`6.Press the 'Cappuccino' button `
let step7=`7.Pour the ${topping2} into the finished coffee`



document.write ('Make a cup of classic cappuccino in a coffee machine','<br>')

document.write ('<br>',step1,'<br>', step2, '<br>',step3, '<br>',step4, '<br>',step5,'<br>',step6,'<br>',step7,'<br>','<br>')

document.write (`Get a subtle shade reminiscent of a creamy punch!`)


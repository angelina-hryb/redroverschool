// document.write('Hello world!', '<br>') --где '<br>' заменяет enter -- используют для вывода в html формате
console.log('Hello world!')
let a=7
let b='Hello'
let c= true
let x
console.log(a,c,b,x);

// document.write(a + '<br>'+c +'<br>', b,' ',x )

// ===Типы данных===
// string '' "2" `` - строка
// Number         -число целое -integer и десятичное float , NaN- not a number, infinity(при делении на нуль)
// Boolean        - true or false
// null           -что-то есть, но пока не решили (object)
// undefined      - не присвоено значение
// BigInt         -большие числовые данные
// Symbol          
// Object
// array          -массивы

// ==Переменные==
// var-это устаревший способ объявления.
// let- это современный способ объявления.
// const- переменные,которые не должны изменяться
// const pi=3.14  похоже на let, но значение переменной не может изменяться.

let bread= "white bread"
let topping1='turkey'
let topping2='cheese'
let sandwich='Cold turkey sandwich'

// ${}- чтобы внедрить переменную в другую переменную

let step1=`1.Take a slice of ${bread}`
console.log(step1);

//----Отличия var-let-const---
//let,const- есть область видимости например: внутри {} изолированного участка кода будут вести себя независимо
// var - можно задекларировать дважды, будет виден внутри {} изолированного участка кода 
//const нужно декларировать и сразу присваиваем значение
//let не можем задекларировать дважды

// ====сравненение переменных
// = одно равно - присвоение
// == два равно - сравнение значение - а равно с  или а == с нестрогое,только value
// === три равно - сравнение с учетом типа переменной а === с строгое,value/typeof
//!= нестрогое не равно
// !==- строгое неравно
let num1='5'
console.log(num1)
console.log(num1==5) //true
console.log(num1===5) //false

let num2=-10
console.log(num2)
console.log(num2 !='-10') //false
console.log(num2 !=='-10') //true
let m='m'
let M='M'
console.log(m == M) //false
console.log(m === "m") //true
// console.log(`${}`) -так можно перевести число в строку


// =====Aritmetic Operators======
//  1.   +;-;*;/;
//  2.            % 5%2=1 Modulus (остаток от деления)
// 3. ++ Increment- увеличивает значение n На 1
// 4.             -- Decrement -уменьшает значение n На 1
// ** -возведение в степень ( let c=a**b например 7 во второй степени=49)

let myModulus=7%2 // 2*3=6 7-6=1
console.log(myModulus)  

let myvariable=10
console.log(myvariable++) 
console.log(myvariable)  
console.log(myvariable--) 
console.log(myvariable) 
//'Use strict'- использовать строгий режим


//======Логические операторы=======
// &&-- ‘И’--- надо чтобы было true&&true=true   true&&false=false false&&false=false
// || - ‘или’---одного true достаточно,чтобы было true
// !-не
let massakg=70
console.log(massakg>50||massakg>90)  //true||false=true
console.log(!(massakg>50||massakg>90)) //!true||!false=false

console.log(massakg>50&&massakg>90)  //true&&false=false
console.log(!(massakg>50&&massakg>90)) //!true&&!false=false
// Приоритет &&(и) больше, чем ||(или) поэтому он выполняется раньше
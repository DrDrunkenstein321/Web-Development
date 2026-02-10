/* Основы JavaScript
 Польза отдельных файлов в том, что браузер загрузит скрипт отдельно и сможет хранить его в кеше. Другие страницы, которые подключают тот же скрипт, смогут брать его из кеша вместо повторной загрузки

 Задачи
alert("Я JavaScript!")


"use strict" -> набор более жестких правил выполнения кода
x = 5 -> при "use strict" выдаст ошибку так как запрещены случайные глоабльные переменные

Переменные:
First way:  
    let message;
    message = "Hello";
    alert(message);
Second way:
    let message = 'hello';
    alert(message);
*/

// let user = 'John', age = 25, message = 'Hello'; -> not recommended because it's not the best for readability
// let user = 'John';
// let age = 25;
// let message = 'Hello';

// or
/*
let user = "John",
  age = 25,
  message = "Hello"; 
console.log(user);

*/


// var message = 'Hello';  -> var почти то же самое, что и let. Тут тонкое различие между let и var. 
// 1. Если вкратце, то для var не существует блочной области видимости. Типо:
/*
if(true) {
    var s = 5;
}
console.log(s); -> выдаст 5 все окей, но если бы вместо var был let либо const -> выдало бы ошибку

if(true) {
    const v = 5;
}
console.log(v); -> can't find variable: v

2. var допускает повторное обьявление
var n = 5;
var n = 6; 
Это норм для var
*/

/*

let $ = 3;
let _ = 2;
console.log($ + _); -> 3 + 2 = 5

let 1a; -> не может начинаться с цифры
let my-name; -> дефис - не разрешен в имени

let apple;
let APPLE; -> регистр имеет значение, APPLE и apple это разные переменные

const - константы, неизменяемая переменная

const myBirthday = '18.04.1982';
myBirthday = '19.01.2222' -> ошибка

const COLOR_RED = "F00"; -> частая практика использования констант в качестве псевдонимов для трудно запоминаемых значений ( названия таких констант пишутся с CAPS )

ЗАДАЧИ:

----
let admin;
let name;
name = "Джон";
admin = name;
alert(admin);
----

const PLANET_NAME = "Earth";
let currentUserName;



alert(1 / 0) -> infinity
alert(Infinity);

let n = 2 / 'sd'; -> NaN - not a number
let m = NaN + 1 -> NaN
let g = 3 * NaN -> NaN
Любая математическая операция с NaN возвращает NaN; ( кроме NaN ** 0 = 1)

const bigInt = 20000n; -> добавляем в конце n чтобы создать значение типа BigInt

let name = "Ivan"; // 'Ivan', `Ivan`
Но обратные кавычки позволяюь нам встраивать выражения в строку, заключая их в ${}.
let name = "Dastan";
console.log(`Hello ${name}`)


let age;
alert(age); // undefined
let age = 123;
age = undefined; // мы можем присвоить значение undefined

typeof - имеет две формы: typeof x, typeof(x)

typeof null; -> object. Это официально признанная ошибка в typeof


result = prompt("DEBUUUT", "YES")
console.log(result)

let isBoss = confirm("Are you boss?");
console.log(isBoss);

Задача:
const currentUserName = prompt("What's your name?", "IVAN");
alert(currentUserName);

ПРЕОБРАЗОВАНИЕ ТИПОВ:
В Строку с помощью String
let value = true;
let anotherValue = String(value);

К числу с помощью Number
console.log(Number("2") + Number("3"));
*/

console.log(Boolean(undefined));
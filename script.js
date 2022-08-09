"use strict";
// alert("Я JavaScript!");
// let admin, name;
// name = "Джон";
// admin = name;
// let ourPlanetName, currentUserName;
// currentUserName = "Джон";
// let result = prompt("Принять?", []);
// let curUser;
// curUser = prompt("Как вас зовут?", '');
// alert(curUser);
// let officialName;
// officialName = prompt("Какое оффициальное название javaScript?", []);
// if (officialName == "ECMAScript") {
// 	alert("Верно!");
// }
// else {
// 	alert("Не знаете? EcmaScript!")
// }
// let number;
// number = +prompt("Введите число", '');
// if (number > 0) {
// 	alert('1');
// }
// else if (number < 0) {
// 	alert('-1');
// }
// else {
// 	alert('0');
// }
// let result;
// result = (a + b < 4) ? "Мало" : "Много";
// let message;
// message = (login == "Сотрудник") ? "Привет" :
// 	(login == "Директор") ? "Здравствуйте" :
// 		(login == "") ? "Нет логина" : '';
let login;
let password;

login = prompt("Кто там?", '');
if (login === 'admin') {

	password = prompt('Пароль?', '');

	if (password === 'admin') {
		alert('Здравствуйте!');
	} else if (password === '' || password === null) {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}

} else if (login === '' || login === null) {
	alert('Отменено');
} else {
	alert("Я вас не знаю");
}

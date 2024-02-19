//                 РЕПЕТА Модуль 2, затятие 4 ФУНКЦИИ

/*
1. Напиши ф - цию calculateTotalPrice(item), которая принимает масив цен(чисел) и возвращает их сумму.

const calculateTotalPrice = function (items) {
    let total = 0;
    
    for (let item of items) {
        total += item;
    };
    return total;
};

const cart = [52, 84, 96, 45, 36, 23, 78, 101, 7, 16];
console.log(calculateTotalPrice(cart));
console.log(calculateTotalPrice([1,2,3]));
*/



/*
// 2. Напиши ф-цию  findLogin(logins, login) для поиска логина.  
// - Если логина нет, то вывести сообщение: “Пользователь <login> не найден”. 
// - Если нашли логин, то вывести сообщение: “Пользователь <login> найден”. 

const logins = ['fgfgbhgf', 'dthdhfhfgh', 'rdthfh', 'ggg', '10px'];
const loginToFind = 'ggg';

const message = (logins, login) => {
    return logins.includes(login)
    ? `Пользователь ${login} найден`
    : `Пользователь ${login} найден`
};
console.log(message(logins, loginToFind));
*/



/*
// 3.	Напиши ф-цию findSmallesNumber(number) для поиска самого маленького числа в массиве чисел.
// При условии, что числа уникальные

const numbers = [2, 17, 94, 1, 23, 37];

const findSmallesNumber = function (params) {
    return Math.min(...params);
};
console.log(findSmallesNumber(numbers));
*/



/*
// 4. Напиши функцию changeCase(string), которая заменяет регистр каждого символа в строке
// на противоположный

const changeCase = function (string) {

    const arrayLetters = string.split('');
    let invertedString = '';

    arrayLetters.forEach((letter) => {
        const checkLetter = letter.toLowerCase();
        
        if (letter === checkLetter) {
            const newLetter = letter.toUpperCase();
            invertedString += newLetter;
        } else {
            const newLetter = letter.toLowerCase();
            invertedString += newLetter;
        };
    });
     return invertedString;
};
console.log(changeCase('kHAmAlA'));
*/














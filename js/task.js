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
        const isInLowerCase = letter === letter.toLowerCase();
       
        invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
    });

    return invertedString;
};
console.log(changeCase('kHAmAlA'));
*/



/*
// 5.	Напиши функцию slugify(string), которая получает строку и возвращает URL-slug. 
// Строка состоит только из букв и пробелов.

function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
};

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
*/



                        // РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ       

// 6.   ЗАДАЧА - Есть массив объектов. Ищем друга по имени.
// РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ   
/*
   const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: true },
]

function findByName(findFrend, allFriends) {
    for (const frend of friends) {
        if (frend.name === findFrend) {
            return `Друг с именем ${findFrend} есть в базе данных`;
        };
    };
    return `Друг с именем ${findFrend} отсутствует в базе данных`;
};

console.log(findByName('Poly', friends));
console.log(findByName('Po', friends));
*/




/*
ПЕРЕПИСАТЬ на find !!!

const findFrend = "Poly";
const a = friends.find((findFrend, friend) => { 
    if (friend.name === findFrend) {
        return `Друг с именем ${findFrend} есть в базе данных`;
    };
});
console.log(a);
*/




// 7.   ЗАДАЧА - ПОЛУЧАЕМ ВСЕ ИМЕНА ДРУЗЕЙ ИЗ МАССИВА ДРУЗЕЙ:
// РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ   
/*
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: true },
];
 
const getAllNames = function (allFriends) {
    let allNames = [];
    
    for (let friend of allFriends){
        allNames.push(friend.name);
    };

    return allNames;
};
console.log(getAllNames(friends));
*/



// 8.  ЗАДАЧА - ПОЛУЧАЕМ ВСЕХ ДРУЗЕЙ, КОТОРЫЕ ОНЛАЙН. Не имена а целиком друзей
// РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ   
/*
const getFrendsByOnline = function (allFriends) {
    let frendsByOnline = [];
    
    for (let friend of allFriends) {
        if (friend.online) {
            frendsByOnline.push(friend);
        };
    };
    return frendsByOnline;
};
console.log(getFrendsByOnline(friends));
*/



// 9.    ЗАДАЧА -  ПОЛУЧАЕМ ОБЪЕКТ С 2МЯ МАССИВАМИ - ВСЕХ ДРУЗЕЙ, КОТОРЫЕ ОНЛАЙН И КОТОРЫЕ ОФФЛАЙН:
/*       // ВЕРНУТЬ ОБЪЕКТ СТАТИСТИКИ.
// РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ   
// Т.е. я хочу вернуть из функции объект такого формата:
            {
                online: [],
                ofline: [],
            }

const friends = [ 
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: true },
];

const getFrendsByOnlineStatus = function (allFriends) {
    
    const frendsByStatus = {
        online: [],
        offline: [],
    };

    for (let friend of allFriends) {

        if (friend.online) {
            frendsByStatus.online.push(friend);
            continue;
        };
            
        frendsByStatus.offline.push(friend);
    };

    return frendsByStatus;
};
console.log(getFrendsByOnlineStatus(friends));
*/










                

                


























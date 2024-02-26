                        // РЕПЕТА
// ПЕРЕБИРАЮЩИЕ МЕТОДЫ МАССИВА.ФУНКЦИЯ ФИЛЬТРАЦИИ

/*
Например, моя функция принимала бы массив [1,2,3,4,5] и возвращала бы массив с числами  больше 3х
А в следующий вызов, например, возвращала бы массив с числами  больше 2х и.д.
Т.е. не удалять из оригинального массива, а возвращать новый. Т.е. она по какому-то условию 
фильтрует массив
Также, эта функция должна уметь делать новый массив и возвращать его


const filter = function (array, test) { 
    let filteredArray = [];

    for (const el of array) {
        
        const passed = test(el);

        if (passed) {
            filteredArray.push(el); 
        }
    };
    return filteredArray;
};
*/


/*
ЛОГИКА ПРОВЕРКИ

1. Надо передать функцию
2. Функция получает каждый элемент оригинального массива
3. Если элемент массива удовлетворяет условию, то функция вернет true. Или в противном случае - фолс


const callback1 = value => value >= 3;   // Помните, что операторы сравнения сами по себе возвращают буль

const callback2 = value => value <= 4;   // Помните, что операторы сравнения сами по себе возвращают буль

// 4. И вот эта проверочная функция и будет приходить в тест. Это и есть коллбэк
// Для этого я при вызове моей функции фильтра положу функцию callback1, как второй аргумент:
// Теперь я объявил callback1, поставил аргументом при вызове функции и она доехала в параметр test фильтра

const r1 = filter([1, 2, 3, 4, 5, 6, 7], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2);
console.log(r2);
*/


/*
Это функция фильтр, которая умеет получить произвольный массив и произвольный колбек.
// Для каждого элемента оригинального массива вызывается коллбек и если он возвращает труе,
// то элемент оригинального массива записывается в финальный массив
*/


/*
ЗАДАЧА. Есть массив фруктов. И, например, мне нужно отобрать все фрукты, 
у которых количество больше, чем 150.


const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true }, 
];

const getFruitsWiThQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, getFruitsWiThQuantity);
console.log(r3);
*/


/*
МЕТОД ФИЛЬТР позволяет взять массив и отфильтровать только те элементы,
которые ты хочешь, по какому - то определенному условию. Больше он ничего не умеет делать
Фильтр возвращает всегда новый массив и даже если по условию он ничего не отфильтровал, то он 
вернет тебе пустой массив
Добавляет в возвращаемый массив элементы, которые удовлетворяют коллбэк функции.
Т.о. ФИЛЬТР возвращает многие из многих, позволяя сделать подколлекцию из коллекции. 
Подмножество в множестве можно находить

ПРИМЕР:
Функция, которую вы передаете, должна из себя вернуть или тру или фоллс
И если для текущего элемента функция возвращает тру, то он добавляется в новый массив, если фоллс, то не добавляется
А условие тут может быть настолько сложное, насколько вы хотите. Главное, чтобы оно вернуло или труе или фоллс.

Это используется например, если у вас в магазине есть куча холодильников, а вам надо сделать фильтр по цене, по свойствам.
Т.е. на каждое ваше нажатие у вас фильтруются по какому-то свойству типо нейм


const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number > 15);

console.log(filteredNumbers);


// Например, мне нужно вернуть массив только тех друзей, которые онлайн

const players = [
    {id: 'player-1', name: 'Mango', timePlaued: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlaued: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlaued: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlaued: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlaued: 80, points: 48, online: true},
];

const playersOnline = players.filter(player => player.online);

console.log(playersOnline);


// !!! ФИЛЬТР делает новый массив, в который кладет ссылку на старый массив. ССЫЛКУ.

// Например, нам нужно отобрать игроков со времнем игры больше 250.

const playersTimePlaued = players.filter(player => player.timePlaued > 250);

console.log(playersTimePlaued);
*/










                            
                            // МЕТОД find()
                            // Урок 10, МОДУЛЬ 5
                            
/*
const numbers = [5, 10, 15, 20, 25];

const numbersToFind = numbers.find(number => number === 20);
console.log(numbersToFind);

// Но также если условие на сравнение, тожевернертся первый элемент, который удовлетворил условие

const numbersToFind1 = numbers.find(number => number < 20);
console.log(numbersToFind1);   // Вернет только 5
*/


                            // РЕПЕТА
/*
Метод FIND умеет найти уникальный элемент. И он находит именно ОДИН в коллекции. Первый, который нашелся. Или undefined
Используется для поиска уникальных элементов в коллекции. Как только оно нашло первый подходящий, то оно прекращает поиск дальше.
Поэтому обычно в этом методе не проверяют на больше меньше, а проверяют на равенство, напимер, 
огда ищут пользователя по имени или по идентификатору

ФИЛЬТР всегда гарантированно перебирает до конца и возвращает из коллекции целое подмножество. 
А файнд находит первое удовлетворяющее условию значение в коллекции и прерывается. Если ни один элемент не подошел под условие, то оно внернет undefined. 
Это очень удобно, т.к. undefined при прверке при приведени к булю превращается в фоллс

Используется часто для поиска по какому-то уникальному свойству, например, идентификатору


const numbers = [5, 10, 15, 20, 25];

const numbersToFind = numbers.find(number => number === 20);
console.log(numbersToFind);



const playerIdToUpdate = 'player-3';

const players = [
    {id: 'player-1', name: 'Mango', timePlaued: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlaued: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlaued: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlaued: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlaued: 80, points: 48, online: true},
];

const playerWithID = players.find(player => player.id === 'player-3');

console.log(playerWithID);

// ИЛИ через деструктуризацию

const playerWithID1 = players.find(({id}) => id === 'player-3');

console.log(playerWithID1);
*/
/*
// В большинстве случаев это все-таки функции. Давайте перепишем на функцию

const findPlayerWithId = (allPlauers, playerId) => {
    return allPlauers.find(player => player.id === playerId)
 };
console.log(findPlayerWithId(players, 'player-2'));

// Перепишем еще с деструктуризацией

const findPlayerWithId = (allPlauers, playerId) => 
    allPlauers.find(({id}) => id === playerId);
 
console.log(findPlayerWithId(players, 'player-2'));

*/



                            //  МЕТОДы  every, some
                            //  РЕПЕТА
/*
every - поэлементно перебирает оригинальный массив и возвращает труе, если все элементы массива удовлетворяют условию.
Т.е. это вариант проверить, что все элементы массива буквально что-то там могут делать. Например, провеить, а все ли у меня онлайн?

some - поэлементно перебирает оригинальный массив и возвращает труе, если хотя бы один из элементов массива удовлетворяет условию, то возвращает тру. 
А если ни один не удовлетворяет условию, тогда возвращает фоллс.
И он не возвращает кто именно это, т.е. не возвращает элемент, а просто говорит есть или нету.


const players = [
    {id: 'player-1', name: 'Mango', timePlaued: 310, points: 54, online: false},
    {id: 'player-2', name: 'Poly', timePlaued: 470, points: 92, online: true},
    {id: 'player-3', name: 'Kiwi', timePlaued: 230, points: 48, online: true},
    {id: 'player-4', name: 'Ajax', timePlaued: 150, points: 71, online: false},
    {id: 'player-5', name: 'Chelsy', timePlaued: 80, points: 48, online: true},
];

const isAllOnline = players.every(player => player.online);
console.log(isAllOnline);

const isOnline = players.some(player => player.online);
console.log(isOnline);
*/
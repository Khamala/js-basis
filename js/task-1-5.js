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



// 10.    ЗАДАЧА - КОРЗИНА ТОВАРОВ
// РЕПЕТА Модуль 3, затятие 5 ОБЪЕКТЫ-1, + Занятие 6 ОБЪЕКТЫ-2
/*       
Товар - это объект такого формата:   { name: 'картинка', price: 50 }
В сложных объектах лучше не обращаться к свойствам напрямую, а писать методы для вызова свойств
*/
const apple = { name: '🍎', price: 20, };
const grape = { name: '🍇', price: 35, };
const peach = { name: '🍑', price: 40, };
const lemon = { name: '🍋', price: 80, };
const banana = { name: '🍌', price: 30, };

const cart = {

// В свойстве items будут лежать товары, а товары это объекты   
    items: [],    

    // Если я вызываю метод add, т.е. cart.add({name: 'картинка', price: 50}) , 
    // то он получает наш продукт и потом его добавляет в эти выше items: []
    add(produkt) {},
    
    // И после добавления если я вызову метод getItems(){}, то у меня должна вернуться ссылка на items: []
    getItems() {
        return this.items;
    },

    // Есть метод remove, куда передаешь имя продукта.Т.е.я вызываю cart.remove('картинка'); 
    // и этот объект должен удалиться
    remove(produktName){},

    // Метод  clear полностью очищает корзину товаров.
    clear(){},

    // Заметьте, что на корзине нету свойства общей стоимости, т.к. это вычисляемое свойство
    // И есть метод countTotalPrice, который просто возвращает общую цену, мне хранить ее не нужно
    countTotalPrice() { },
    
    // Увеличить/уменьшить клоличество какого-то товара в корзине
    // Нужно учесть, что при добавлении продукта в корзину, по умолчанию 
    // должно устанавливаться свойство Quantity равное 1.

    increaseQuantity(produktName){},
    decreaseQuantity(produktName){},

    // Когда добавляетмся продукт, которого еще нет в корзине, то
    // add(produkt) { product.quantity = 1},
    // А если добавляем продукт который уже есть, то
    // add(produkt) { product.quantity += 1},
}



/*        

const cart1 = {
    items: [],    
        // Сделаем метод getItems, который должен вызывать массив значений items: [], 
        // т.е. просто возвращать ссылку на этот массив
    getItems() {
        return this.items;
    },

    // Теперь, есть метод add, куда мы получаем объект с товаром, который нужно добавить в items[]
    
    add(produkt) {
        this.items.push(produkt);
    // И сейчас есть проблема, что если я добавляю 2 одинаковых продукта, то они подряд просто добавляться будут
    },

        // Метод remove(produktName) По имени, т.е.по свойству name нам надо перебрать массив items,
        // найти объект с переданным именем и его оттуда удалить
    remove(produktName) {
            for (const item of this.items) {
                if (item.name === produktName) {
                    this.items.splice(this.items.indexOf(item), 1);
                }
        }
        



    },
        // Метод clear должен очищать корзину. Просто он должен возвращать пустой массив и все
    clear() {
            this.items = [];
        },

        // countTotalPrice доджен брать стоимость продукта и считать общую сумму
    countTotalPrice() {
                let total = 0;
                for (const { price } of this.items) {
                    total += price;
                };
                return total;  
        },

// Для того, чтобы при добавлении уже существующего продукта, он не записывался как еще один новый
// Мы при добавлении продукта в этом же методе создадим еще один объект, у которого будет свойство quantity
// Но вначале, распылим в этот объект наш оригинальный продукт
// Т.е.создали новый продукт, распылили в него тот продукт, что передали, и плюс добавили ему свойство quantity
// И уже этот новый объект добавили в нашу корзину
// И теперь у товаров в корзине имеется кастомное для корзины свойство
// По


    countTotalPrice() { 

        const { items } = this;

        let totalPrice = 0;

        for (let { price, quantity } of items) {

            totalPrice += price * quantity;
        };

        return totalPrice;
    },

    increaseQuantity(produktName) { 

        for (let item of this.items) {
            
            const { name, quantity } = item;

            if (name === produktName) {
                quantity += 1;
                return;
            };
        };

    },

    decreaseQuantity(produktName) { },

};
*/







/*
const cart6 = {
    items: [],
    


        const newProduct = {
            ...produkt,
            quantity: 1,
        };


        this.items.push(newProduct);
    },

    remove(produktName) {
        
        for (const item of this.items) {
            if (item.name === produktName) {
                this.items.splice(this.items.indexOf(item), 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
            
        for (const { price, quantity } of this.items) {
            total += price * quantity;
        };

        return total;  
    },
}
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка', price: 50 });
cart6.add({ name: 'картинка3', price: 80 });
cart6.add({ name: 'картинка4', price: 90 });

console.log(cart6.getItems());

console.log(cart6.countTotalPrice());

*/







/*

const cart = {
    
    
    addItems(produkt) { 
        const { items } = this;

        for (const item of items) {

                    if (item.name === produkt.name) {
                        item.quantity += 1;
                        return;
                    };  
                };

        const newProduct = {
            ...produkt,
            quantity: 1,
        };

        items.push(newProduct);

        return items;
    },

    removeItems(produktByRemove) { 
        const { items } = this;
        
        for (let i = 0; i < items.length; i += 1){
            const { name } = items[i];
            
            if (name === produktByRemove) {
                items.splice(i, 1);
            };
        };
    },

    clear() { 
        this.items = [];
        return this.items;
    },



};

cart.addItems(apple);
cart.addItems(grape);
cart.addItems(apple);
cart.addItems(peach);
cart.addItems(lemon);
cart.addItems(peach);
cart.addItems(peach);
cart.addItems(banana);

console.log(cart.getItems());

cart.removeItems('🍋');

console.log(cart.countTotalPrice());

//console.log(cart.getItems());

//console.log(cart.clear());
*/
    
        

// 11.    ЗАДАЧА - Поиск самой маленькой или большой температуры. SPRED
// РЕПЕТА Модуль 3, затятие 6 ОБЪЕКТЫ
/*       
// Math.max() ожидает, что будет независимый набор аргументов, а не один массив с аргументами.
const temps = [18, 12, 21, 14, 18, 24, 25];

console.log(Math.max(...temps));

const lastWeekTemps = [1,2,3];
const currentTemps = [4,5,6];
const nextWeekTemps = [7, 8, 9];

console.log(Math.max(...lastWeekTemps, ...currentTemps, ...nextWeekTemps));
*/



// 12.    ЗАДАЧА - Есть рейтинг авторов и нужно найти автора с самым большим рейтингом. Деструктуризация
// РЕПЕТА Модуль 3, затятие 6 ОБЪЕКТЫ
/*
const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const maxRating = Math.max(...Object.values(authors));

Object.entries(authors).forEach(entrie => {

    if (entrie[1] === maxRating) {
        console.log(`Самый большой рейтинг ${entrie[1]} имеет автор ${entrie[0]}`);
    };
});
*/




// 13.    ЗАДАЧА - на УДАЛЕНИЕ ДУБЛИРУЮЩИХ ЭЛЕМЕНТОВ из МАССИВА
// Урок 10, Модуль 5. Метод filter
/*
// array.indexOf(el)   Эта штука возвращает индекс текущего элемента
// Первая 'математика' вернет array.indexOf(el) ноль, и индекс тоже ноль. Отфильтрует его
// А вот 4ая 'математика' вернет array.indexOf(el) снова ноль, т.к. метод indexOf() возвращает индекс
// первого вхождения. А значение индекса 3. Поэтому выражение приведется к фоллз и эл не попадет в отфильтрованный массив

const array = ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
const uniqueCourses = array.filter((el, ind, array) => array.indexOf(el) === ind);
console.log(uniqueCourses);

// Есть и другие способы, намного проще, отфильтровать массив с уникальными значениями. Но это будет позже.

const uniqueCourses1 = [...new Set(array)];
console.log(uniqueCourses1);
*/



// 14.    ЗАДАЧА - на СОРТИРОВКУ ПО ВОЗРАСТАНИЮ
// Урок 10, Модуль 5.
// Нехай функція filterByPrice повертає масив автомобілів цена которых меньше, чем значение параметра threshold
/*
const allCars = [
{ make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
{ make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
{ make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
{ make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
{ make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
{ make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
{ make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
{ make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
{ make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
{ make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
];

const filterByPrice = ((array, threshold) => { 
    return array.filter(arr => arr.price < threshold)
});
console.log(filterByPrice(allCars, 30000));
*/




// 14.    ЗАДАЧА - на 
// Урок 10, Модуль 5. 
// Нехай функція filterByPrice повертає масив автомобілів тип которых совпадает со значением type
/*
const allCars = [
{ make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true},
{ make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
{ make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
{ make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
{ make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
{ make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
{ make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
{ make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
{ make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
{ make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false }
];

const getCarsWithtype = ((arrayCars, type) => { 
    return arrayCars.filter(car => car.type === type);
});
console.log(getCarsWithtype(allCars, "sedan"));
*/




















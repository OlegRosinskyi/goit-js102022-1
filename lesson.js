const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
console.log(totalPrice);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);
function add(a, b, c) {
    // Change code below this line
  
  return a + b +c;
  
    // Change code above this line
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));

  function makeMessage (name, price) {
    // Change code below this line
     const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };
  makeMessage('Radar', 6150);
  makeMessage('Scanner', 3500);

  function calculateTotalPrice (orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;
  
    // Change code above this line
    return totalPrice;
  };
  //Вызов calculateTotalPrice(5, 100) возвращает 500
//Вызов calculateTotalPrice(8, 60) возвращает 480
//Вызов calculateTotalPrice(3, 400) возвращает 1200
//Вызов calculateTotalPrice(1, 3500) возвращает 3500
//Вызов calculateTotalPrice(12, 70) возвращает 840


function isAdult(age) {
    // Change code below this line
    let passed = false;
    if (age >= 18) {
    passed = true ;
  };
  // Change code above this line
    return passed;
  }
 // Вызов isAdult(20) возвращает true
//Вызов isAdult(14) возвращает false
//Вызов isAdult(8) возвращает false
//Вызов isAdult(37) возвращает true
function isAdult(age) {
    // Change code below this line 
    let passed = false;
    if ( age >= 18 ) {
     passed = true;
  } 
    
    // Change code above this line
    return passed;

    function isAdult(age) {
      // Change code below this line 
      let passed = ( age >= 18 );
      //if  {
      // passed = true;
    //} 
      
      // Change code above this line
      return passed;
    }

    function isValidPassword(password) {
      const SAVED_PASSWORD = 'jqueryismyjam';
      // Change code below this line
      const isMatch = (SAVED_PASSWORD === password);
    
      // Change code above this line
      return isMatch;
    }
    isValidPassword('mangodab3st');
    isValidPassword("mangodab3st");// возвращает false
    isValidPassword("kiwirul3z"); //возвращает false
    isValidPassword("jqueryismyjam"); //возвращает true
    
    function checkAge(age) {
      let message;
    
      if (age >= 18) { // Change this line
        message = 'You are an adult';
      } else {
        message = 'You are a minor';
      }
    
      return message;
    }
    function checkStorage(available, ordered) {
      let message;
      // Change code below this line
    if (available >= ordered){
      message='Order is processed, our manager will contact you.';
    }
      else {
        message='Not enough goods in stock!';
      }
      // Change code above this line
      return message;
    }
    let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid * orderedQuantity;
  // Change code above this line
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  }
      else {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
      }
  return message;
}
makeTransaction(3000, 5, 23000); //возвращает "You ordered 5 droids, you have 8000 credits left"
//Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
//Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
//Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
//Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line Пользователь отменил ввод
    message =  'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) { // Change this line Пароль правильний
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
checkPassword(null); // возвращает "Canceled by user!"
//Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
//Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0) {
  message = "There are no products in the order!";
}
  else if (available < ordered) {
    message = "Your order is too large, there are not enough items in stock!";
  }
  else {
    message = "The order is accepted, our manager will contact you";
  }
  // Change code above this line
  return message;
}
checkStorage(100, 50); //возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
//Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
//Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
//Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
//Вызов checkStorage(150, 0) возвращает "There are no products in the order!"

//Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка 
//`""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.  
function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType === "pro" || subType === "vip"); // Change this line

  return canAccessContent;
}
checkIfCanAccessContent("pro"); // возвращает true
//Вызов checkIfCanAccessContent("starter") возвращает false
//Вызов checkIfCanAccessContent("vip") возвращает true
//Вызов checkIfCanAccessContent("free") возвращает false
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}
isNumberNotInRange(10, 30, 17); // возвращает false
//Вызов isNumberNotInRange(10, 30, 5) возвращает true
//Вызов isNumberNotInRange(20, 50, 24) возвращает false
//Вызов isNumberNotInRange(20, 50, 76) возвращает true
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {discount = GOLD_DISCOUNT;}
  else if ((totalSpent >= 20000 && totalSpent < 50000)) {
    discount = SILVER_DISCOUNT;
  }
  else if ((totalSpent >= 5000 && totalSpent < 20000)) {
    discount = BRONZE_DISCOUNT;
  }
  else {discount =BASE_DISCOUNT;}
  // Change code above this line
  return discount;
}
getDiscount(137000); // возвращает 0.1
//Вызов getDiscount(46900) возвращает 0.05
//Вызов getDiscount(8250) возвращает 0.02
//Вызов getDiscount(1300) возвращает 0
//Вызов getDiscount(5000) возвращает 0.02
//Вызов getDiscount(20000) возвращает 0.05
//Вызов getDiscount(50000) возвращает 0.1
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
   // Change code above this line
  return message;
}
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!"; 
  // Change code above this line
  return message;
}
checkPassword("jqueryismyjam"); // возвращает "Access is allowed"
//Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
//Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter":  // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}
 getSubscriptionPrice("professional"); // возвращает число 20
//Вызов getSubscriptionPrice("organization") возвращает число 50
//Вызов getSubscriptionPrice("starter") возвращает число 0
function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase();
 result = (result.includes("spam") || result.includes("sale"));
  // Change code above this line
  return result;
}
checkForSpam("Latest technology news"); // возвращает false
//Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
//Вызов функции checkForSpam("Get best sale offers now!") возвращает true
//Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
//Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
//Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
//Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true


function getExtremeElements(array) {
  // Change code below this line
  //eturn
  let prArray = Array.from(array);
  //console.log(prArray.length);
  //console.log(array.splice(1, array.length-2));
  array = prArray.splice(1, prArray.length-2);
  console.log(prArray);
  return prArray;
   
}
getExtremeElements(["apple", "peach", "pear", "banana"]);
//Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
//Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
//Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
words = message.split(delimiter);
  console.log(words);
  // Change code above this line
  return words;
}
//Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
//Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
//Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

 console.log(arguments[0]);
 
 console.log((arguments[0].split(" ")).length);
 console.log(pricePerWord * ((arguments[0].split(" ")).length));
 return pricePerWord * ((arguments[0].split(" ")).length);

  // Change code above this line
}
//Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
//Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
//Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
//Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

//--------------------------------------------------------------------------------------------------------------
//Метод массивов join(delimiter) позволяет соединить элементы массива
function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line
console.log(array.join(delimiter));
string = array.join(delimiter);

  // Change code above this line
  return string;
}makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
//Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
//Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
//Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

//----------------------------------------------------------------------------------------------
//Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.
function slugify(title) {
  // Change code below this line
//(toLowerCase(title));
  console.log(title.toLowerCase().split(" ").join("-"));
 
return title.toLowerCase().split(" ").join("-");

  // Change code above this line
}
slugify("Arrays for begginers");
//Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
//Вызов slugify("English for developer") возвращает "english-for-developer"
//Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
//Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"


//------------------------------------------------------------------------------------------------------
//Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length-1);
const lastThreeEls = fruits.slice(fruits.length-3,fruits.length+1);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

 //   Объявлена переменная fruits
 //   Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
 //   Объявлена переменная firstTwoEls
 //   Значение переменной firstTwoEls это массив ["apple", "plum"]
 //   Объявлена переменная nonExtremeEls
 //   Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
 //   Объявлена переменная lastThreeEls
 //   Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
 //   Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами

 //-------------------------------------------------------------------------------------------------
//Метод concat используется для объединения двух или более массивов. 
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line
//Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

//----------------------------------------------------------------------------------------------------------
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
console.log(firstArray);
console.log(firstArray.length);
console.log(secondArray);
console.log(secondArray.length);
console.log(maxLength);
if (maxLength === 0) 
{console.log([]);return [];  }
if ((firstArray.length + secondArray.length) <= maxLength) {console.log(firstArray.concat(secondArray)); return firstArray.concat(secondArray);}
else {console.log(firstArray.concat(secondArray.slice(0, (maxLength-firstArray.length)))); return firstArray.concat(secondArray.slice(0, (maxLength-firstArray.length)));}
// Change code above this line
}
//Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
//Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
//Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
//Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []

//----------------------------------------------------------------------------------------------------------

const start = 3;
const end = 7;

for (let i = start; i <= end ; i +=1 ) { // Change this line
  console.log(i);
}
//Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

//------------------------------------------------------------------------------------------------------------
function calculateTotal(number) {
  // Change code below this line
 let total = 0;
 
   for (let i = 1; i < (number+1); i += 1) {
     total += i;}
     console.log(total);
   return total;
 
 
   // Change code above this line
 }
 //Вызов функции calculateTotal(1) возвращает 1
 //Вызов функции calculateTotal(3) возвращает 6
 //Вызов функции calculateTotal(7) возвращает 28
 //Вызов функции calculateTotal(18) возвращает 171
 //Вызов функции calculateTotal(24) возвращает 300
 //Вызов функции calculateTotal() со случайным числом возвращает правильное значение

//---------------------------------------------------------------------------------------------------------------
//Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
 const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i +=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

  //  Объявлена переменная fruits
  //  Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
  //  Объявлена переменная i - счётчик цикла
  //  Начальное значение переменной i равно 0
  //  Условие цикла приводится к true до тех пор, пока i меньше 4
  //  На каждой итерации значение переменной i увеличивается на единицу
  //  В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
  //  В теле цикла for используется вывод в консоль переменной fruit

  //___________________________________________________________________________________________________________
//Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
  function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  console.log(total);
      
      for (let i = 0; i < (order.length); i +=1 ) {
        total += order[i];
     
    }
    return total;
  }
  console.log(calculateTotalPrice([12, 85, 37, 4]));

 // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
//Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
//Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
//Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение

//-----------------------------------------------------------------------------------------------------------
//Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
//========================================================================================================
function findLongestWord(string) {
  // Change code below this line
//console.log(string.split(" "));
    let pString = string.split(" ");
    let rezString = pString[0];
    console.log(rezString);
    for (let i = 0; i <= pString.length-1; i += 1 ) 
    {   
        console.log(rezString.length);
        if ((rezString.length) < (pString[i].length))
        { rezString = pString[i]; 
            console.log(rezString); }

    }
   // console.log(rezString);
  return rezString;
  // Change code above this line
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function createArrayOfNumbers(min, max) {
  const numbers = [];
 //numbers[0] = min;
 // planets.push(min);
  // Change code below this line
for (min ; min <= max; min += 1  )
 { 
  if ( min%1 === 0)
  {numbers.push(min);} }
  // Change code above this line
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));
  // Change code above this line

  //--------------------------------------------------------------------------------------
  //Бульбашкове сортування
  function bubbleSorting(order) {
    let total = [];
   
    // Change code below this line
  
  console.log(total);
      
      for (let i = 0; i < (order.length-1); i +=1 ) {
        for (let j = 0; j < (order.length - (i + 1)); j +=1 ) {
          if (order[j] > order[j+1]){ total = order[j+1]; order[j+1] = order[j]; order[j] = total; }console.log(j);
    }//console.log(i); 
  }
    return order;
  }
  console.log(bubbleSorting([85, 37, 12, 4]));
  //================================================================================================

  //Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и //возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение //параметра value (число).
function filterArray(numbers, value) {
  // Change code below this line
let sortNumbers = [];

for (let i = 0 ; i < numbers.length; i += 1  )
{ 
 if ( numbers[i] > value)
 {sortNumbers.push(numbers[i]);} }
 // Change code above this line
 return sortNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
 // Change code above this line
//Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
//Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
//Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
//Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
//В цикле for использовался метод push
//====================================================================================================

//=====================================================================================================
//Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}
console.log(checkFruit("plum"));
//Вызов checkFruit("plum") возвращает true
//Вызов checkFruit("mandarin") возвращает false
//Вызов checkFruit("pear") возвращает true
//Вызов checkFruit("Pear") возвращает false
//Вызов checkFruit("apple") возвращает true
//Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
//В функции использовался метод includes
//--------------------------------------------------------------------------------------------------------
//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
  // Change code below this line

  let nowArray = [];
for (let i = 0 ; i < array1.length; i += 1  )
{  
  if (array2.includes(array1[i]))  { nowArray.push(array1[i]); }
}
 
 return nowArray;
 
  // Change this line
}
console.log(getCommonElements([1, 6, 3], [2, 4]));

 // Change code above this line
 //Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
//Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
//Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
//Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
//Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
//Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
//В цикле for использовались методы includes и push


//=========================================================================================================
//Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.
function calculateTotalPrice(orders) {
  let total = 0;
  // Change code below this line

  for (let order of orders) {
    total += order;
  }

  // Change code above this line
  return total;
}
//Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
//Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
//Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
//Вызов функции calculateTotalPrice([]) возвращает 0
//Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму
//--------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
//Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let number of numbers) {
  

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
//Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
//Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
//Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
//Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
//Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
//Функция calculateTotalPrice() использует цикл for..of

//======================================================================================================
const a = 3 %  1;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 6;


//Объявлена переменная a
//Значение переменной a это число 0
//Объявлена переменная b
//Значение переменной b это число 1
//Объявлена переменная c
//Значение переменной c это число 3
//Объявлена переменная d
//Значение переменной d это число 5
//Объявлена переменная e
//Значение переменной e это число 2

//=================================================================================
//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
function getEvenNumbers(start, end) {
  // Change code below this line
let nowArray = []; 
for ( let i = 0; i < (end - start+1); i +=1 ) { console.log((start+i)%2);  
  if ( (start+i) % 2 === 0 ) { nowArray.push(start+i); }}

return nowArray;

   // Change code above this line
 }
console.log(getEvenNumbers(2, 5));
//Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
//Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
//Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
//Вызов функции getEvenNumbers(8, 8) возвращает [8]
//Вызов функции getEvenNumbers(7, 7) возвращает []
//Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

//=====================================================================================================
//Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i; break;
  }
}
//
//Объявлена переменная start со значением 6
//Объявлена переменная end со значением 27
//Объявлена переменная number без инициализации
//Итоговое значение переменной number равно 10
//В цикле for используется break для выхода до завершения всех итераций цикла

//-------------------------------------------------------------------------------------------------------
//Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return. 
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }
  //Вызов findNumber(2, 6, 5) возвращает 5
  //Вызов findNumber(8, 17, 3) возвращает 9
  //Вызов findNumber(6, 9, 4) возвращает 8
  //Вызов findNumber(16, 35, 7) возвращает 21
  //Вызов findNumber() со случайным набором чисел возвращает верный результат
  //В цикле for не должен использоваться break для выхода до завершения всех итераций цикла
  //return number;
  // Change code above this line
}
--=======================================================================================================================
//Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива //массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть //и false в противном случае.
function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) { return true;}}
     return false;
  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));

//Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
//Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
//Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
//Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
//Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
//Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
//Вызов includes() для случайного массива со случайным value возвращает верный boolean
//В функции includes используется for, return, но не метод массива includes

//============================================================================================
//----------------------ОБ'ЕКТИ----------------------------------------------------------------
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
   descr: "Spacious apartment in the city center",
 rating: 4,
 price: 2153,
 tags: ["premium", "promoted", "top"],
 };
//Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

//------------------------------------------------------------------------------------------------------------
////Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

//===============================================================================================================
//Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
console.log(aptRating);
const aptDescr = apartment.descr;
console.log(aptDescr);
const aptPrice = apartment.price;
console.log(aptPrice);
const aptTags = apartment.tags;
console.log(aptTags);
// Change code above this line
//===================================================================================================
//Для доступа к вложенным свойствам используется цепочка обращений «через точку». 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
console.log(ownerName);
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[numberOfTags-1];
console.log(lastTag);
// Change code above this line
//-----------------------------------------------------------------------------------------------------------
//Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
console.log(aptRating);
const aptDescr = apartment["descr"];
console.log(aptDescr);
const aptPrice = apartment["price"];
console.log(aptPrice);
const aptTags = apartment["tags"];
console.log(aptTags);
// Change code above this line
//===================================================================================================================
//После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
// Change code below this line
  
  //Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. 
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
 
};
//const location = {
//    country: "",
 // };
apartment.area = 60;
    apartment.rooms = 3;
    
apartment.location = {};
    
apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";
console.log(apartment.location.country);
  console.log(apartment.location.city);
  
  //===============================================================================================================
//
 //   Объявлена переменная apartment
//    Значение переменной apartment это объект
 //   Значение вложенного свойства area это число 60
//    Значение вложенного свойства rooms это число 3
//    Значение вложенного свойства location это объект
//    Значение вложенного свойства location.country это строка "Jamaica"
//    Значение вложенного свойства location.city это строка "Kingston"
  //Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.
const name1 = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name1,
  price,
  image,
  tags,
  // Change code below this line
  // Change code above this line
};
console.log(product.image);
//Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями //из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

//
 //   Объявлена переменная product
  //  Значение переменной product это объект
  //  Значение вложенного свойства name это строка "Repair Droid"
  //  Значение вложенного свойства price это число 2500
  //  Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
  //  Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

  //Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line

[emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
   // Change code above this line
};
console.log(credentials.email);
console.log(credentials.password);
//
    //Объявлена переменная credentials
    //Значение переменной credentials это объект
    //В объекте credentials есть свойство email
    //Значение вложенного свойства email это строка "henry.carter@aptmail.com"
    //В объекте credentials есть свойство password
    //Значение вложенного свойства password это строка "jqueryismyjam"
  //========================================================================================================
  //В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать //циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который //перебирает ключи объекта object.
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
  
}
console.log(keys);
console.log(values);
    //Объявлена переменная apartment
    //Значение переменной apartment это объект
    //Объявлена переменная keys
    //Значение переменной keys это массив ["descr", "rating", "price"]
    //Объявлена переменная values
    //Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// Change code below this line
//============================================================================================================
  //Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл //for...in.
//  Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. //Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте //dog - это несобственное свойство из объекта animal.
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key))
 {keys.push(key);
  values.push(apartment[key]);};

  // Change code above this line
}
console.log(keys);
console.log(values);
//
  //  Объявлена переменная advert.
  //  Значение переменной advert это объект.
  //  Объявлена переменная apartment.
  //  Значение переменной apartment это объект.
  //  Объявлена переменная keys.
  //  Значение переменной keys это массив ["descr", "rating", "price"].
  //  Объявлена переменная values.
  //  Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
 
 //=============================================================================================================
  ////Напиши функцию countProps(object), которая считает и возвращает количество //собственных свойств объекта в параметре object. Используй переменную propCount для //хранения количества свойств объекта.
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for ( const key in object)
  if (object.hasOwnProperty(key)) {propCount +=1; };
  // Change code above this line
  console.log(propCount);
  return propCount;
  
}

   // Объявлена функция countProps(object)
   // Вызов countProps({}) возвращает 0
   // Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
   // Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
   // Функция подсчитывает только собственные свойства объекта
  //=============================================================================================================
  //У встроенного класса Object есть несколько полезных методов для работы с объектами. Первый из них это //Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в //объекте нет свойств, метод вернёт пустой массив.
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for ( const key of keys)
  { values.push(apartment[key])};
//const keys = Object.keys(apartment);

   // Объявлена переменная apartment.
   // Значение переменной apartment это объект.
   // Объявлена переменная keys.
   // Значение переменной keys это массив ["descr", "rating", "price"].
   // Значение переменной keys получено с помощью метода Object.keys().
   // Объявлена переменная values.
   // Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
    //    Значение переменной values получено с помощью цикла for...of.
  //======================================================================================================

  function countProps(object) {
  // Change code below this line
 // let propCount = Object.keys(object).length;
//Object.keys(object).length
  //for (const key in object) {
   // if (object.hasOwnProperty(key)) {
    //  propCount += 1;
    //}
 // }
console.log(Object.keys(object).length);
  
  return Object.keys(object).length;
  // Change code above this line
}
  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
  
  //==========================================================================
//Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
function countProps(object) {
  // Change code below this line
 // let propCount = Object.keys(object).length;
//Object.keys(object).length
  //for (const key in object) {
   // if (object.hasOwnProperty(key)) {
    //  propCount += 1;
    //}
 // }
  let propCount = 0;
 
  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }
  console.log(propCount);
  
  return propCount;
  // Change code above this line
}
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
//
 //   Объявлена функция countProps(object)
 //   Вызов countProps({}) возвращает 0
 //   Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
 //   Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
 //   Функция подсчитывает только собственные свойства объекта
 //   Функция использует метод Object.keys() и, возможно, цикл for...of
  //==============================================================================================================
  //Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод //Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод //Object.values(obj) вернёт пустой массив.
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
console.log(keys);
const values = Object.values(apartment);
console.log(values);
//Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values //массив всех значений его свойств. Используй методы Object.keys() и Object.values().

  //=============================================================================================================

  //Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя //сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников //и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
//totalSalary = math
  const keys = Object.values(salaries);

  for (const key of keys) {
    totalSalary += key;
  }
  console.log(totalSalary);
  // Change code above this line
  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
//    Объявлена функция countTotalSalary(salaries)
//    Вызов countTotalSalary({}) возвращает 0
//    Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
 //   Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
 //   Функция учитывает только собственные свойства объекта
  //==========================================================================================================
  //В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это //значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными //значениями.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for ( let color of colors) {hexColors.push(color.hex); rgbColors.push(color.rgb);};
// Change code below this line
console.log(hexColors);
console.log(rgbColors);
//
  //  Объявлена переменная colors
  //  Значение переменной colors это массив
  //  Объявлена переменная hexColors
  //  Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
  //  Объявлена переменная rgbColors
  //  Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
  //=========================================================================================================
  //Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя //сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников //и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
//totalSalary = math
  const keys = Object.values(salaries);

  for (const key of keys) {
    totalSalary += key;
  }
  console.log(totalSalary);
  // Change code above this line
  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
//    Объявлена функция countTotalSalary(salaries)
//    Вызов countTotalSalary({}) возвращает 0
//    Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
 //   Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
 //   Функция учитывает только собственные свойства объекта
  //======================================================================================================
  //Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название //продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает //его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let namePrise = null;
  for (let product of products)
  
    if (productName === product.name) { namePrise = product.price; };

  // Change code below this line
  console.log(namePrise);

  return namePrise;
};
getProductPrice("Rada");
//
  //  Объявлена функция getProductPrice(productName).
  //  Вызов getProductPrice("Radar") возвращает 1300.
  //  Вызов getProductPrice("Grip") возвращает 1200.
  //  Вызов getProductPrice("Scanner") возвращает 2700.
  //  Вызов getProductPrice("Droid") возвращает 400.
  //  Вызов getProductPrice("Engine") возвращает null.

  //===================================================================================================
  //Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) //свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в //массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  
let sortProducts = [];
  
  for ( let product of products )
  
  if (product[propName] === undefined) {sortProducts = []; }
  else { sortProducts.push(product[propName]); }

  // Change code below this line
 

  console.log(sortProducts);
  return sortProducts;

  // Change code above this line
};
getAllPropValues("name");
//
//    Объявлена функция getAllPropValues(propName)
 //   Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
 //   Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
 //   Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
 //   Вызов getAllPropValues("category") возвращает []

//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название //товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива //products.
function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let allPrice = 2;
  
  for (let product of products) //{ allPrice = product.price * product.quantity; };
  {
    console.log(productName === product.name);
    if (productName === product.name) { allPrice = (product.price * product.quantity); console.log(allPrice);
  return allPrice;} 
        else    { allPrice = 0; }  
    // if (product[propName] === undefined) {allPrice = 0; }
    // else { allPrice = product.price * product.quantity); }

    // Change code below this line
  };

  console.log(allPrice);
  return allPrice;
};
  calculateTotalPrice("Radar");
  //----------------------------------------------------------------------------------------------------------
  //Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
//
 //   Объявлена переменная highTemperatures
 //   Значение переменной highTemperatures это объект
 //   Объявлена переменная yesterday с помощью деструктуризации
 //   Значение переменной yesterday это число 28
 //   Объявлена переменная today с помощью деструктуризации
 //   Значение переменной today это число 26
 //   Объявлена переменная tomorrow с помощью деструктуризации
 //   Значение переменной tomorrow это число 33
 //   Объявлена переменная meanTemperature
 //   Значение переменной meanTemperature это число 29
 //   Используется синтаксис деструктуризации объекта highTemperatures
  //---------------------------------------------------------------------------------------------------------------
  //Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday,
  today,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  tomorrow,
} = highTemperatures;
//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;
//const icon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

//
//    Объявлена переменная highTemperatures
 //   Значение переменной highTemperatures это объект
 //   Объявлена переменная highTemperatures
 //   Значение переменной highTemperatures это объект
//    Объявлена переменная yesterday с помощью деструктуризации
 //   Значение переменной yesterday это число 28
 //   Объявлена переменная today с помощью деструктуризации
 //   Значение переменной today это число 26
  //  Объявлена переменная tomorrow с помощью деструктуризации
 //   Значение переменной tomorrow это число 33
 //   Объявлена переменная icon с помощью деструктуризации
//    Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204//2204346.svg".
 //   Используется деструктуризация объекта
  //==============================================================================================================
  //При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
//const highYesterday = highTemperatures.yesterday;
//const highToday = highTemperatures.today;
//const highTomorrow = highTemperatures.tomorrow;
//const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

   // Объявлена переменная highTemperatures
   // Значение переменной highTemperatures это объект
   // Объявлена переменная highYesterday
   // Значение переменной highYesterday это число 28
   // Объявлена переменная highToday
   // Значение переменной highToday это число 26
   // Объявлена переменная highTomorrow
   // Значение переменной highTomorrow это число 33
   // Объявлена переменная highIcon
   // Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204//2204346.svg"
   // Используется деструктуризация объекта
  
  //===================================================================================================
  //Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"  }, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},} = forecast;
//const highToday = forecast.today.high;
//const lowToday = forecast.today.low;
//const todayIcon = forecast.today.icon;
//const highToday = high;
//const lowToday = low;
//const todayIcon = icon;

//console.log(high);
console.log(highToday);
//console.log(low);
console.log(lowToday);
//console.log(icon);
console.log(todayIcon);
//const highTomorrow = forecast.tomorrow.high;
//const lowTomorrow = forecast.tomorrow.low;
//const tomorrowIcon = secondicon;
//const highTomorrow = secondhigh;
//const lowTomorrow = secondLow;

//console.log(secondicon);
console.log(tomorrowIcon);
 
console.log(highTomorrow);
 
console.log(lowTomorrow);


   // Объявлена переменная forecast
  //  Значение переменной forecast это объект
   // Объявлена переменная highToday с помощью деструктуризации
  //  Значение переменной highToday это число 32
  //  Объявлена переменная lowToday с помощью деструктуризации
 //   Значение переменной lowToday это число 28
 //   Объявлена переменная todayIcon с помощью деструктуризации
   // Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861//  /861059.svg"
  //  Объявлена переменная highTomorrow с помощью деструктуризации
  //  Значение переменной highTomorrow это число 31
  //  Объявлена переменная lowTomorrow с помощью деструктуризации
  //  Значение переменной lowTomorrow это число 27
 //   Объявлена переменная tomorrowIcon с помощью деструктуризации
 //   Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204// //2204346.svg"
 //   Используется синтаксис деструктуризации объекта highTemperatures
  //--------------------------------------------------------------------------------------------------------------
  //======================================================================================================================
//Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.
function calculateMeanTemperature(forecast) {
  const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh }, } = forecast;
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  //const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Change code above this line
  console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
};
calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });
//
   // Объявлена функция calculateMeanTemperature(forecast)
   // В теле функции используется деструктуризация объекта
   // В теле функции объявлена переменная todayHigh с помощью деструктуризации
    //В теле функции объявлена переменная todayLow с помощью деструктуризации
    //В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
    //В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
   // Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
   // Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

  //============================================================================================================
  //Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где //ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив //в объект и наоборот.

//Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог //массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

//Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия //каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

//Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть //ожидает не массив значений, а произвольное количество аргументов.
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
console.log(bestScore);
const worstScore = Math.min(...scores);
console.log(worstScore);

    //Объявлена переменная scores
    //Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
   // Объявлена переменная bestScore
    //Значение переменной bestScore это число 93
    //Объявлена переменная worstScore
   // Значение переменной worstScore это число 17
   // Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
    //Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores
  //===========================================================================================================
//========================================================
  /Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один //новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать //тоже самое в более краткой форме.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
//
//    Объявлена переменная firstGroupScores
//    Значение переменной firstGroupScores это массив [64, 42, 93]
//    Объявлена переменная secondGroupScores
//    Значение переменной secondGroupScores это массив [89, 14, 51, 26]
//    Объявлена переменная thirdGroupScores
//    Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
//    Объявлена переменная allScores.
//    Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
//    Объявлена переменная bestScore
//    Значение переменной bestScore это число 97
//    Объявлена переменная worstScore
//    Значение переменной worstScore это число 14
//    При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
//    Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
//    Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores
  //================================================================================================
  //Операция spread позволяет распылить свойства произвольного количества объектов в один новый.
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
//
   // Объявлена переменная defaultSettings
   // Значение переменной defaultSettings это объект
   // Объявлена переменная overrideSettings
   // Значение переменной overrideSettings это объект
   // Объявлена переменная finalSettings
   // Значение переменной finalSettings это объект
   // Значение свойства finalSettings.theme равно "light"
  //  Значение свойства finalSettings.public равно "false"
  //  Значение свойства finalSettings.withPassword равно "true"
  //  Значение свойства finalSettings.minNumberOfQuestions равно 10
   // Значение свойства finalSettings.timePerQuestion равно 30
  //  При присваивании значения переменной finalSettings используется синтаксис ...
  //------------------------------------------------------------------------------------------------------
  //Задача. Карточки задач
//Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

//    text - текст задачи.
//    category - категория задачи.
 //   priority - приоритет задачи.

function makeTask(data) {
  
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
return {completed, category, priority, ... data }
  // Change code above this line
}
console.log(makeTask({ text: "Buy bread" }));
 //   Объявлена функция makeTask(data)
 //   Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
 //   Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { //category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
//    Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", //priority: "Normal", text: "Take interest", completed: false }
 //   Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", //priority: "Low", text: "Choose shampoo", completed: false }
 //   Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: //"Buy bread", completed: false }
//----------------------------------------------------------------------------------------------------------------
  //Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это //близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части //операции присваивания, а сбор это когда ... находится в её левой части.
function add(...args) {
  // Change code above this line
  let sum = 0;
  for (let arg of args) {
    sum = sum + arg;
  }
  return sum;
};
console.log(add(32, 6, 13, 19, 8));
//
//   Объявлена функция add
 //   Функция add использует параметр args
 //   Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
 //   Вызов add(15, 27) возвращает 42
 //   Вызов add(12, 4, 11, 48) возвращает 75
 //   Вызов add(32, 6, 13, 19, 8) возвращает 78
 //   Вызов add(74, 11, 62, 46, 12, 36) возвращает 241
  //-----------------------------------------------------------------------------------------------------
  //Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, //объявив параметры до «сбора».
// Change code below this line
function addOverNum(firstNumber, secondNumber, ...otherArgs) {
  let total = 0;

  for (const otherArg of otherArgs) {
    if (firstNumber < otherArg)
    {total += otherArg;};
  };
if (firstNumber < secondNumber)
    {total += secondNumber;};
  
  return total;
  // Change code above this line
};
console.log(addOverNum(50, 15, 27));
//
 //   Объявлена функция addOverNum()
 //   Вызов addOverNum(50, 15, 27) возвращает 0
 //   Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
 //   Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
 //   Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218
  
  //-------------------------------------------------------------------------------------------------------
  //Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет //массив чисел, а остальные аргументы будут просто числами.
function findMatches(firstNumber, secondNumber, ...otherArgs) {
  const matches = []; // Don't change this line
  console.log(firstNumber);
  console.log(firstNumber.length);
  console.log(secondNumber);
  console.log(otherArgs);

  for (let i = 0; i < firstNumber.length; i += 1)

  {console.log(firstNumber[i] );
    if (firstNumber[i] === secondNumber)
  { matches.push(secondNumber); };
    
    for (const otherArg of otherArgs) {
    if (firstNumber[i] === otherArg)
    { matches.push(otherArg); };
    };
  };
    //for (let i = 0; i < array.length; i += 1) {
    //if (array[i] === value) { return true;}}
    // return false;
 
  // Change code above this line
  return matches;
};

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

//
    //Объявлена функция findMatches()
   // Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
   // Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
   // Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
  //  Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []
}

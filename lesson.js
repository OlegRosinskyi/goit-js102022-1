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
}

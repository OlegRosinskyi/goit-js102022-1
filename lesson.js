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
  if (age >= 18) {
    passed = true;
  }
    
  // Change code above this line
  return passed;

  function isAdult(age) {
    // Change code below this line 
    let passed = (age >= 18);
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
    if (available >= ordered) {
      message = 'Order is processed, our manager will contact you.';
    }
    else {
      message = 'Not enough goods in stock!';
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
      message = 'Canceled by user!';
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
    if (totalSpent >= 50000) { discount = GOLD_DISCOUNT; }
    else if ((totalSpent >= 20000 && totalSpent < 50000)) {
      discount = SILVER_DISCOUNT;
    }
    else if ((totalSpent >= 5000 && totalSpent < 20000)) {
      discount = BRONZE_DISCOUNT;
    }
    else { discount = BASE_DISCOUNT; }
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
    array = prArray.splice(1, prArray.length - 2);
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
  } makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
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
  const nonExtremeEls = fruits.slice(1, fruits.length - 1);
  const lastThreeEls = fruits.slice(fruits.length - 3, fruits.length + 1);
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
    if (maxLength === 0) { console.log([]); return []; }
    if ((firstArray.length + secondArray.length) <= maxLength) { console.log(firstArray.concat(secondArray)); return firstArray.concat(secondArray); }
    else { console.log(firstArray.concat(secondArray.slice(0, (maxLength - firstArray.length)))); return firstArray.concat(secondArray.slice(0, (maxLength - firstArray.length))); }
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

  for (let i = start; i <= end; i += 1) { // Change this line
    console.log(i);
  }
  //Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

  //------------------------------------------------------------------------------------------------------------
  function calculateTotal(number) {
    // Change code below this line
    let total = 0;
 
    for (let i = 1; i < (number + 1); i += 1) {
      total += i;
    }
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

  for (let i = 0; i < fruits.length; i += 1) { // Change this line
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
      
    for (let i = 0; i < (order.length); i += 1) {
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
    for (let i = 0; i <= pString.length - 1; i += 1) {
      console.log(rezString.length);
      if ((rezString.length) < (pString[i].length)) {
        rezString = pString[i];
        console.log(rezString);
      }

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
    for (min; min <= max; min += 1) {
      if (min % 1 === 0) { numbers.push(min); }
    }
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
      
    for (let i = 0; i < (order.length - 1); i += 1) {
      for (let j = 0; j < (order.length - (i + 1)); j += 1) {
        if (order[j] > order[j + 1]) { total = order[j + 1]; order[j + 1] = order[j]; order[j] = total; } console.log(j);
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

    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) { sortNumbers.push(numbers[i]); }
    }
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
    for (let i = 0; i < array1.length; i += 1) {
      if (array2.includes(array1[i])) { nowArray.push(array1[i]); }
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
  const a = 3 % 1;
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
    for (let i = 0; i < (end - start + 1); i += 1) {
      console.log((start + i) % 2);
      if ((start + i) % 2 === 0) { nowArray.push(start + i); }
    }

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
  //-------------------------------------------------------------------------------------
    //Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива //массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть //и false в противном случае.
    function includes(array, value) {
      // Change code below this line
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) { return true; }
      }
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
  const lastTag = apartment.tags[numberOfTags - 1];
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
    if (apartment.hasOwnProperty(key)) {
      keys.push(key);
      values.push(apartment[key]);
    };

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
    for (const key in object)
      if (object.hasOwnProperty(key)) { propCount += 1; };
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
  for (const key of keys) { values.push(apartment[key]) };
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
  for (let color of colors) { hexColors.push(color.hex); rgbColors.push(color.rgb); };
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
  
    for (let product of products)
  
      if (product[propName] === undefined) { sortProducts = []; }
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
      if (productName === product.name) {
        allPrice = (product.price * product.quantity); console.log(allPrice);
        return allPrice;
      }
      else { allPrice = 0; }
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
  const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
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
  const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;
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
  /Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один / / новый.Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать //тоже самое в более краткой форме.
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
  const finalSettings = { ...defaultSettings, ...overrideSettings };
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
    return { completed, category, priority, ...data }
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
      if (firstNumber < otherArg) { total += otherArg; };
    };
    if (firstNumber < secondNumber) { total += secondNumber; };
  
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

    for (let i = 0; i < firstNumber.length; i += 1) {
      console.log(firstNumber[i]);
      if (firstNumber[i] === secondNumber) { matches.push(secondNumber); };
    
      for (const otherArg of otherArgs) {
        if (firstNumber[i] === otherArg) { matches.push(otherArg); };
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

  //------------------------------------------------------------------------------------------------------------
  //До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о //книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет //коллекцию однотипных элементов.

Объекты могут хранить не только данные, но и функции для работы с этими данными - методы.Если значение свойства это функция, такое свойство называется методом объекта.
  const bookShelf = {
    // Change code below this line
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`;
    },
    // Change code above this line
  };
  //

  //   Объявлена переменная bookShelf

  //  Значение переменной bookShelf это объект

  //  Значение свойства bookShelf.getBooks это метод объекта

  //  Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"

  //  Значение свойства bookShelf.addBook это метод объекта

  //  Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"

  //  Значение свойства bookShelf.removeBook это метод объекта

  //  Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"

  //  Значение свойства bookShelf.updateBook это метод объекта

  //  Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands //of dune to Dune"


  //----------------------------------------------------------------------------------------------------------
  
  //Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
  //Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line
    
    orderedItems.forEach((orderedItem) => { totalPrice += orderedItem; return totalPrice; });
    return totalPrice;
 
  };
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  
    //Объявлена функция calculateTotalPrice(orderedItems)
    //Для перебора массива orderedItems использован метод forEach
    //Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
    //Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
    //Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
    //Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

//---------------------------------------------------------------------------------------------------------
  //Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут //только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line
    numbers.forEach((number) => { if (number > value) { filteredNumbers.push(number); } });
  
    // Change code above this line
    return filteredNumbers;
  }
  console.log(filterArray([1, 2, 3, 4, 5], 3));
  //
  //    Объявлена функция filterArray(numbers, value)
  //    Для перебора массива numbers использован метод forEach
  //    Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
  //    Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
  //    Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
  //   Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
  //    Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
  //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //--------------------------------------------------------------------------------------------------------------------
  //Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры //firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих //массивах.

  //Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line
    firstArray.forEach((firstA) => { secondArray.forEach((secondA) => { if (firstA === secondA) { commonElements.push(secondA) }; }); });

    return commonElements;
    // Change code above this line
  }
  console.log(getCommonElements([1, 2, 3], [2, 4]));
  //
  //    Объявлена функция getCommonElements(firstArray, secondArray)
  //    Для перебора параметра (массива) использован метод forEach
  //    Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
  //    Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
  //    Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
  //    Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
  //    Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
  //    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //----------------------------------------------------------------------------------------------------
  // Change code below this line
  //Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда //функция маленькая или если она используется как коллбек.

  //Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена //переменной.
  let calculateTotalPrice = (quantity, pricePerItem) => {
    // Change code above this line
    return quantity * pricePerItem;
  };
  console.log(calculateTotalPrice(5, 100));
  //
  //  Объявлена переменная calculateTotalPrice
  //   Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
  //   Вызов calculateTotalPrice(5, 100) возвращает 500
  //  Вызов calculateTotalPrice(8, 60) возвращает 480
  //  Вызов calculateTotalPrice(3, 400) возвращает 1200
  //  Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //--------------------------------------------------------------------------------------------------------
  // Change code below this line
  const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

  // Change code above this line
  console.log(calculateTotalPrice(5, 100));
  //----------------------------------------------------------------------------------------------------------
  //Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.
  //function calculateTotalPrice(orderedItems) 
  let calculateTotalPrice = (orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach(item => totalPrice += item);

    return totalPrice;
  });
 
  //orderedItems.forEach(calculateTotalPrice);

  // Change code above this line
  console.log(calculateTotalPrice([12, 85, 37, 4]));
  //
  //    Объявлена переменная calculateTotalPrice
  //    Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
  //    Для перебора массива orderedItems использован метод forEach
  //    Коллбек для метода forEach это стрелочная функция
  //    Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
  //    Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
  //    Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
  //    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //-----------------------------------------------------------------------------------------------------
  //Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
  // Change code below this line
  let filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    // Change code above this line
    return filteredNumbers;
  }
  //
  //   Объявлена переменная filterArray
  //   Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
  //   Для перебора массива numbers использован метод forEach
  //   Коллбек для метода forEach это стрелочная функция
  //   Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
  //   Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
  //   Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
  //   Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
  //   Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
  //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //----------------------------------------------------------------------------------------
  //Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
let getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
//Объявлена переменная getCommonElements.

 //   Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
 //   Для перебора массива firstArray использован метод forEach
 //   Коллбек для метода forEach это стрелочная функция
 //   Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
 //   Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
 //   Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
 //   Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
 //   Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //--------------------------------------------------------------------------------------------------
  //Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение //которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
function changeEven(numbers, value) {
  // Change code below this line
  let newnumbers = [];
  numbers.forEach((number) => {
     number % 2 === 0 ? newnumbers.push(number + value) : newnumbers.push(number);
  } );
  return  newnumbers;
  
}; 
console.log(changeEven([1, 2, 3, 4, 5], 10));
//
  //  Объявлена функция changeEven(numbers, value)
  //  Функция changeEven не изменяет значение параметра numbers
  //  Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
  //  Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
  //  Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
  //  Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
  //  Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

  //--------------------------------------------------------------------------------------------------
  //Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно //используй метод map().
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => {return planet.length;});
console.log(planetsLengths);
//
//    Объявлена переменная planets
//    Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
//    Объявлена переменная planetsLengths
//    Значение переменной planetsLengths это массив [5, 4, 5, 7]
//    Для перебора массива планет использован метод map()
  
  //----------------------------------------------------------------------------------------------
  const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map(book => book.title);
console.table(titles);
//console.table(books);
  //--------------------------------------------------------------------------------------------------------
  //Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг //(свойство genres) из массива книг books.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap(book => book.genres);
console.table(books);
console.log(genres);
//
//    Объявлена переменная books
//    Значение переменной books это массив объектов
//    Объявлена переменная genres
//    Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
//    Для перебора массива books используется метод flatMap()
  
  //---------------------------------------------------------------------------------------------------------
  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// Change code below this line
//const getUserNames = users.map(user =>  user.name); 
//console.log(getUserNames);
// Change code below this line
const getUserNames = (users) => users.map(user => user.name);
  // Change code above this line
console.table(users);
console.log(getUserNames);
  // Change code above this line
  //----------------------------------------------------------------------------------------------------
  // Change code below this line
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserEmails = (users) => users.map((user) => user.email 
 );
  // Change code above this line
  console.table(users);
console.log(getUserEmails(users));

const getUserNames = (users) => users.map(user => user.name); 
  // Change code above this line
console.table(users);
  console.log(getUserNames(users));
 //-------------------------------------------------------------------------------------------------------------
// Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию. 
 const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0 );
const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(evenNumbers);
  console.log(oddNumbers); 
  //------------------------------------------------------------------------------------------------------

  ////Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter((allGenre, index) =>  allGenres.indexOf(allGenre) === index ); 
console.log(uniqueGenres);

    //Объявлена переменная books
    //Значение переменной books это массив объектов
    //Объявлена переменная allGenres
    //Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
    //Объявлена переменная uniqueGenres
    //Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
   // Для вычисления значения переменной allGenders использован метод flatMap()
   // Для вычисления значения переменной uniqueGenres использован метод filter()
  
  //-----------------------------------------------------------------------------------------------------
  //Используя метод filter() дополни код так, чтобы:

//    В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно //значению переменной MIN_RATING.
//    В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое //совпадает со значением в переменной AUTHOR.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
//
 //   Объявлена переменная books
 //   Значение переменной books это массив объектов
 //   Объявлена переменная MIN_RATING
 //   Значение переменной MIN_RATING это число 8
//   Объявлена переменная AUTHOR
 //   Значение переменной AUTHOR это строка "Bernard Cornwell"
 //   Объявлена переменная topRatedBooks
 //   Значение переменной topRatedBooks это массив книг с рейтингов выше 8
 //   Объявлена переменная booksByAuthor
 //   Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
 //   Для перебора массива books использован метод filter()

  //---------------------------------------------------------------------------------------------------------
  //Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у //которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
// Change code below this line
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
const getUsersWithEyeColor = (users, color) => {return users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue")); 

};
//
 //   Объявлена переменная getUsersWithEyeColor
 //   Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
 //   Для перебора параметра users используется метод filter()
 //   Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами //Moore Hensley, Sharlene Bush и Carey Barr
//    Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами //Ross Vazquez и Elma Head
//    Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами //Blackburn Dotson и Sheree Anthony
//    Если значение параметра color это любая другая строка, функция возвращает пустой массив
//    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code above this line
  //--------------------------------------------------------------------------------------------------------------

  //Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, //возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => { return users.filter(user => (user.age >= minAge && user.age <= maxAge))
 

};
// Change code above this line
//
 //   Объявлена переменная getUsersWithAge
  //  Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge)
 //   Для перебора параметра users используется метод filter()
 //   Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив //объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr
//    Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив //объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
//    Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив
//    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
console.table(users);
  console.table(getUsersWithAge(users, 18, 35));
  
  //-------------------------------------------------------------------------------------------------------
  //Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
//Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у //которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
// Change code below this line
const getUsersWithFriend = (users, friendName) => {return users.filter(user => user.friends.includes(friendName)); 
};
console.table(getUsersWithFriend(users, "Briana Decker"));
// Change code above this line
//
 //   Объявлена переменная getUsersWithFriend
 //   Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
 //   Для перебора параметра users используется метод filter()
 //   Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов //пользователей с именами Sharlene Bush и Sheree Anthony
//    Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов //пользователей с именами Elma Head и Sheree Anthony
//    Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
//    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //--------------------------------------------------------------------------------------------------------------
  //Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство //friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не //содержал повторений.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
// Change code below this line
const getFriends = (users) => {
  return users.flatMap(user => user.friends).filter((friend, index) => users.flatMap(user => user.friends).indexOf(friend) === index);
  //return cars.filter((car) => car.onSale).flatMap(user => user.friends;
 
};
//getFriends =  getFriends.filter((getFriend, index) => getFriends.indexOf(getFriend) === index )
console.table(users);
console.log(getFriends(users));
//{ user.friends.filter((friend, index) => user.friends.indexOf(friend) === index) }
//
//    Объявлена переменная getFriends
//    Переменной getFriends присвоена стрелочная функция с параметром (users)
//    Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", //"Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", //"Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
//    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //-------------------------------------------------------------------------------------------------------
  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  },
];
// Change code below this line
//const getActiveUsers = (users) => users.filter((user) => user.isActive);  
const getActiveUsers = (users) => { return users.filter((user) => user.isActive) };
// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale);   ;
console.table(getActiveUsers(users));
// Change code above this line
  //---------------------------------------------------------------------------------------------------------
  //Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
  const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  },
];
// Change code below this line
const getInactiveUsers = (users) => { return users.filter((user) => !user.isActive) };
console.table(getInactiveUsers(users));
// Change code above this line
  //-----------------------------------------------------------------------------------------------------
  //Используя метод find() дополни код так, чтобы:

//    В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со //значением переменной BOOK_TITLE.
//    В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со //значением переменной AUTHOR.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
const bookWithTitle =  books.find(book => book.title === BOOK_TITLE);
const bookByAuthor =  books.find(book => book.author === AUTHOR);
console.log(bookWithTitle);
console.log(bookByAuthor);

  
  //-------------------------------------------------------------------------------------------------------
  //Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта //которого (свойство email) совпадает со значением параметра email.
const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Change code below this line
const getUserWithEmail = (users, email) => {return users.find(user => user.email === email);
   
};
// Change code above this line

  //----------------------------------------------------------------------------------------------------------
  //Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. //Возвращает true или false.

//Используя метод every() дополни код так, чтобы:

//    В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
//    В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
//    В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
//    В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
 //   В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
//    В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(firstArrayElement => firstArrayElement % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(firstArrayElement => firstArrayElement % 2 === 1);

const eachElementInSecondIsEven =  secondArray.every(secondArrayElement => secondArrayElement % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(secondArrayElement => secondArrayElement % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every(thirdArrayElement => thirdArrayElement % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(thirdArrayElement => thirdArrayElement % 2 === 1);
console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);
//
   // Объявлена переменная firstArray
   // Значение переменной firstArray это массив [26, 94, 36, 18]
   // Объявлена переменная secondArray
   // Значение переменной secondArray это массив [17, 61, 23]
   // Объявлена переменная thirdArray
   // Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18]
   // Объявлена переменная eachElementInFirstIsEven
   // Значение переменной eachElementInFirstIsEven это буль true
   // Объявлена переменная eachElementInFirstIsOdd
  //  Значение переменной eachElementInFirstIsOdd это буль false
  //  Объявлена переменная eachElementInSecondIsEven
  //  Значение переменной eachElementInSecondIsEven это буль false
 //  Объявлена переменная eachElementInSecondIsOdd
 //  Значение переменной eachElementInSecondIsOdd это буль true
 //   Объявлена переменная eachElementInThirdIsEven
  //  Значение переменной eachElementInThirdIsEven это буль false
  //  Объявлена переменная eachElementInThirdIsOdd
  //  Значение переменной eachElementInThirdIsOdd это буль false
  //  Для перебора массивов использован метод every()

  //--------------------------------------------------------------------------------------------------------

//Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны //(свойство isActive) и возвращала true или false.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Change code below this line
const isEveryUserActive = (users) => {return users.every(user => user.isActive);};
   

console.log(isEveryUserActive(users));
//
 //   Объявлена переменная isEveryUserActive
 //   Переменной isEveryUserActive присвоена стрелочная функция с параметром (users)
 //   Для перебора параметра users используется метод every()
  //  Вызов функции с указанным массивом пользователей возвращает false
  //  Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //------------------------------------------------------------------------------------------------------
  //Используя метод some() дополни код так, чтобы:

//    В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
//    В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
//    В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
//    В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
//    В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
//    В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const anyElementInFirstIsEven = firstArray.some(firstArrayElement => firstArrayElement % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(firstArrayElement => firstArrayElement % 2 === 1);

const anyElementInSecondIsEven =  secondArray.some(secondArrayElement => secondArrayElement % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(secondArrayElement => secondArrayElement % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some(thirdArrayElement => thirdArrayElement % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(thirdArrayElement => thirdArrayElement % 2 === 1);
console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

console.log(anyElementInThirdIsEven);
  console.log(anyElementInThirdIsOdd);
  //-------------------------------------------------------------------------------------------------------
////Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство //isActive) и возвращала true или false.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Change code below this line
const isAnyUserActive = (users) => {return users.some(user => user.isActive);};
   

  console.log(isAnyUserActive(users));
// Change code below this line
//----------------------------------------------------------------------------------------------------------
  
  //Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с //сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит //того.
//Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы //в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((a, b) => (a + b),0);
console.log(totalPlayTime);

// Change code above this line
const averagePlayTime =  totalPlayTime / playtimes.length;

   // Объявлена переменная players
   // Значение переменной players это объект игроков с игровым временем каждого
   // Объявлена переменная playtimes
   // Значение переменной playtimes это массив [1270, 468, 710, 244]
   // Объявлена переменная totalPlayTime
   // Значение переменной totalPlayTime это число 2692
   // Для перебора массива playtimes используется метод reduce()
   // Объявлена переменная averagePlayTime
   // Значение переменной averagePlayTime это число 673
  //------------------------------------------------------------------------------------------------------
  //Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить //общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство //playtime) на количество игр (свойство gamesPlayed).
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((a, player) => a + player.playtime / player.gamesPlayed, 0);
console.log(totalAveragePlaytimePerGame);
//
//    Объявлена переменная players
//    Значение переменной players это массив объектов игроков
 //   Объявлена переменная totalAveragePlaytimePerGame
//    Значение переменной totalAveragePlaytimePerGame это число 1023
//    Для перебора массива players используется метод reduce()
  
  //--------------------------------------------------------------------------------------------------------
  //Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств //(свойство balance) которые хранят пользователи из массива users.
const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Change code below this line
const calculateTotalBalance = users => {return users.reduce((a, user) => a + user.balance, 0)
  
};
console.log(calculateTotalBalance(users)); 
// Change code above this line
//
//    Объявлена переменная calculateTotalBalance
//    Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
//    Для перебора параметра users используется метод reduce()
 //   Вызов функции с указанным массивом пользователей возвращает число 20916
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //--------------------------------------------------------------------------------------------
  //Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей //(свойство friends) всех пользователей из массива users.
const users =[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

const getTotalFriendCount = users => {return users.reduce((a, user) => a + user.friends.length, 0)
};
console.log(getTotalFriendCount(users)); 

//
 //   Объявлена переменная getTotalFriendCount
  //  Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
  //  Для перебора параметра users используется метод reduce()
    //Вызов функции с указанным массивом пользователей возвращает число 14
    //Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  //Для указания своего порядка сортировки методу sort(compareFunction) нужно передать коллбек-функцию с двумя параметрами. Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b  );
console.log(ascendingReleaseDates);
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
  console.log(descendingReleaseDates);
  //---------------------------------------------------------------------------------------------
  //Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
console.log(authorsInAlphabetOrder);
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);
//
 //   Объявлена переменная authors
 //   Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
 //   Объявлена переменная authorsInAlphabetOrder
 //   Значение переменной authorsInAlphabetOrder это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
 //   Объявлена переменная authorsInReversedOrder
 //   Значение переменной authorsInReversedOrder это массив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
 //   Использован метод sort()
  //Дополни код так, чтобы:
//
//    В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном //порядке.
//    В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в //обратном алфавитном порядке.
//    В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
//    В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
console.log(sortedByAuthorName);
const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
console.log(sortedByReversedAuthorName);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
console.log(sortedByAscendingRating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
console.log(sortedByDescentingRating);

 //   Объявлена переменная books
 //   Значение переменной books это исходный массив объектов книг
//   Объявлена переменная sortedByAuthorName
//    Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном //порядке
//    Объявлена переменная sortedByReversedAuthorName
//    Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в //обратном алфавитном порядке
//    Объявлена переменная sortedByAscendingRating
//    Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
//    Объявлена переменная sortedByDescentingRating
//    Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
 //   Для перебора массива books используется метод sort()
  
 //-------------------------------------------------------------------------------------------------------------------
 //Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  },
];
// Change code below this line
//const sortByAscendingBalance = [...users].sort((fBalance, sBalance) => fBalance.balance - sBalance.balance);
const sortByAscendingBalance = (users) => {return [...users].sort((fBalance, sBalance) => fBalance.balance - sBalance.balance);};
   
console.log(sortByAscendingBalance(users));
// Change code above this line
//
 //   Объявлена переменная sortByAscendingBalance
 //   Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
 //   Значение параметра users не изменяется
 //   Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
 //   Для перебора параметра users использован метод sort()
  
  //--------------------------------------------------------------------------------------------------
  //Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей //отсортированный по убыванию количества их друзей (свойство friends).
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  },
];
// Change code below this line

const sortByDescendingFriendCount = (users) => {return [...users].sort((fFriends, sFriends) =>  sFriends.friends.length - fFriends.friends.length);};
   
console.log(sortByDescendingFriendCount(users));
//
//    Объявлена переменная sortByDescendingFriendCount
//    Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
//    Значение параметра users не изменяется
//    Для перебора параметра users использован метод sort()
 //   Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный // по убыванию количества их друзей
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

  //---------------------------------------------------------------------------------------------------------------
  //Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их //имени (свойство name) в алфавитном порядке.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  },
];
// Change code below this line
//const sortByAscendingBalance = [...users].sort((fBalance, sBalance) => fBalance.balance - sBalance.balance);
const sortByName = (users) => {return [...users].sort((fName, sName) => fName.name.localeCompare(sName.name));};
   
console.log(sortByName(users));
// Change code below this line
//
  //  Объявлена переменная sortByName
  //  Переменной sortByName присвоена стрелочная функция с параметром (users)
  //  Значение параметра users не изменяется
  //  Для перебора параметра users использован метод sort()
  //  Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный //по имени в алфавитном порядке
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //-----------------------------------------------------------------------------------------------------
  //Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг //которых больше значения переменной MIN_BOOK_RATING.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line
console.log(books);
const names = books
.filter(book =>  book.rating > MIN_BOOK_RATING )
.map(book => book.author)
.sort();
console.log(names);
//
 //   Объявлена переменная books
 //   Значение переменной books это исходный массив объектов
 //   Объявлена переменная MIN_BOOK_RATING
 //   Значение переменной MIN_BOOK_RATING это число 8
//    Объявлена переменная names
//    Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
//    Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
//    Используется цепочка методов filter, map, sort
  
  //-----------------------------------------------------------------------------------------------------
  //Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей //отсортированный по возрастанию количества их друзей (свойство friends).
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  },
];
const getNamesSortedByFriendCount = (users) => {return [...users]
  .sort((fFriends, sFriends) =>  fFriends.friends.length - sFriends.friends.length)
.map(user => user.name);};
   
console.log(getNamesSortedByFriendCount(users));


  //  Объявлена переменная getNamesSortedByFriendCount
  //  Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users)
  //  В теле функции используется цепочка методов
 //   Значение параметра users не изменяется
 //   Вызов функции с указанным массивом пользователей возвращает массив ["Moore Hensley", "Sharlene Bush", //"Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code above this line
  
  //---------------------------------------------------------------------------------------------------------

  //Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство //friends) отсортированный по алфавиту .
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  },
];
const getSortedFriends = (users) => {
  return [...users]
    .flatMap(user => user.friends)
    .filter((friend, index) => users.flatMap(user => user.friends).indexOf(friend) === index)
     .sort((fName, sName) => fName.localeCompare(sName));
};

console.log(getSortedFriends(users));
//
//    Объявлена переменная getSortedFriends
//    Переменной getSortedFriends присвоена стрелочная функция с параметром (users)
//    В теле функции используется цепочка методов в правильном порядке
//    Значение параметра users не изменяется
//    Вызов функции с указанным массивом пользователей возвращает массив ["Adrian Cross", "Aisha Tran", //"Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", //"Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
//    Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //---------------------------------------------------------------------------------------------------------
  //Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс //пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// Change code below this line
console.table(users);
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((previousValue, user) =>  previousValue + user.balance, 0);
};

  console.log(getTotalBalanceByGender(users, "male"));
 //
 //   Объявлена переменная getTotalBalanceByGender
 //   Переменной getTotalBalanceByGender присвоена стрелочная функция с параметрами (users, gender)
 //   В теле функции используется цепочка методов в правильном порядке
 //   Значение параметра users не изменяется
 //   Если значение параметра gender это строка "male", функция возвращает число 12053
 //   Если значение параметра gender это строка "female", функция возвращает число 8863
 //   Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  
  //---------------------------------------------------------------------------------------------------------
  //Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
 },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
 },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
 //  Change code above this line
  
};
console.log(historyService);
console.log(historyService.getOrdersLog());
console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
//
//    Объявлена переменная historyService
//    Значение переменной historyService это объект с исходными свойствами и методами
//    Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
//    Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
//    Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
//    Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
//    Метод getOrdersLog объекта historyService использует this
//    Метод getEmails объекта historyService использует this
//    Метод getOrdersByEmail объекта historyService использует this
  
  //---------------------------------------------------------------------------------------------------------
  //Объекты можно организовать в цепочки так, чтобы свойство не найденное в одном объекте, автоматически искалось //бы в другом. Связующим звеном выступает специальное скрытое свойство [[Prototype]], которое в консоли //Метод //Object.create(obj) создаёт и возвращает новый объект, связывая его с объектом obj. Объект, на который //указывает ссылка в __proto__, называется прототипом. В нашем примере объект animal это прототип для объекта //dog. Метод isPrototypeOf() проверяет является ли объект animal прототипом для dog и возвращает true или //false.браузера отображается как __proto__.
//
//Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;

   // Объявлена переменная parent
  //  Значение переменной parent это объект
  //  Вызов parent.hasOwnProperty("surname") возвращает true
  //  Вызов parent.hasOwnProperty("heritage") возвращает true
  //  Объявлена переменная child
  //  Значение переменной child это объект
 //   Вызов child.hasOwnProperty("name") возвращает true
 //   Обращение к child.name возвращает "Jason"
 //   Вызов child.hasOwnProperty("age") возвращает true
  //  Обращение к child.age возвращает 27
  //  Вызов child.hasOwnProperty("surname") возвращает false
  //  Обращение к child.surname возвращает "Moore"
  //  Вызов child.hasOwnProperty("heritage") возвращает false
  //  Обращение к child.heritage возвращает "Irish"
  //  Вызов parent.isPrototypeOf(child) возвращает true
  //  Используется метод Object.create()

  //---------------------------------------------------------------------------------------------------------
  //Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Change code above this line

console.log(ancestor);
console.log(ancestor.surname);
console.log(child.surname);

//------------------------------------------------------------------------------------------------------
//
//    Объявлена переменная ancestor
//    Значение переменной ancestor это объект.
//    Объявлена переменная parent
//    Значение переменной parent это объект.
//    Объявлена переменная child
//    Значение переменной child это объект.
//    Вызов ancestor.isPrototypeOf("parent") возвращает true
//    Вызов parent.isPrototypeOf("child") возвращает true
//    Вызов ancestor.hasOwnProperty("surname") возвращает true
//    Обращение к ancestor.surname возвращает "Dawson"
 //   Вызов parent.hasOwnProperty("surname") возвращает true
//    Обращение к parent.surname возвращает "Moore"
 //   Вызов child.hasOwnProperty("surname") возвращает false
//    Обращение к child.surname возвращает "Moore"
//    Вызов ancestor.hasOwnProperty("heritage") возвращает true
//    Обращение к ancestor.heritage возвращает "Irish"
//    Вызов parent.hasOwnProperty("heritage") возвращает false
//    Обращение к parent.heritage возвращает "Irish"
//    Вызов child.hasOwnProperty("heritage") возвращает false
//    Обращение к child.heritage возвращает "Irish"
 //   Используется метод Object.create()
  
  //-------------------------------------------------------------------------------------------------
  //Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов //с одинаковым набором свойств, но разными значениями и методами для взаимодействия с ними. Всё это нужно //сделать динамически, во время выполнения программы. Для этого используют классы - специальный синтаксис //объявления функции для создания объектов.

//Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - //его тело. Классы принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта //(существительное).

//class User {
  // Тело класса
//}

//const mango = new User();
//console.log(mango); // {}

//const poly = new User();
//console.log(poly); // {}

//Результат вызова new User() это объект, который называется экземпляр класса, потому что содержит данные и //поведение, описываемые классом.

//Используя ключевое слово class объяви класс Car с пустым телом.
//class Car {}

//
 //   Объявлен класс Car
 //   Результат вызова new Car() это пустой объект
  
  //--------------------------------------------------------------------------------------------------------
  class Car {
  // Change code below this line

    brand;
    model;
    price;
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
  console.log(new Car("Nissan", "Murano", 31700));
  //-----------------------------------------------------------------------------------------------

  //-----------------------------------------------------------------------------------------------------
  //Класс может принимать большое количество входных данных для свойств будущего объекта. Если параметров много //(больше 2-х), то обычно применяют паттерн «Объект параметров». Идея этого паттерна в том, чтобы передавать в //качестве параметра один объект с логично именованными свойствами. Значения свойств такого объекта заменят //набор аргументов.

//class User {
  // Деструктуризируем объект
 // constructor({ name, email }) {
 //   this.name = name;
 //   this.email = email;
 // }
//}

//const mango = new User({
 // name: "Mango",
//  email: "mango@mail.com",
//});
//console.log(mango); // { name: "Mango", email: "mango@mail.com" }

//const poly = new User({
//  name: "Poly",
//  email: "poly@mail.com",
//});
//console.log(poly); // { name: "Poly", email: "poly@mail.com" }

class Car {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

//Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

//    Объявлен класс Car
//    У класса Car есть метод constructor
//    В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: //"Audi", model: "Q3", price: 36000 }
//    В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: //"BMW", model: "X5", price: 58900 }
//    В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { //brand: "Nissan", model: "Murano", price: 31700 }

//----------------------------------------------------------------------------------------------------------------
  class Car {
  price = 2000;
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice(){
  return this.price;
}
changePrice(newPrice)
  {this.price = newPrice};

  // Change code above this line
 
};
const car = new Car({});
// console.log(Car);
console.log(car.changePrice(2000));
  console.log(car);
  
  //-------------------------------------------------------------------------------------------------------
  //Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только //один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

//Объяви следующие методы класса:

//    getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
//    addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items //объекта который вызывает этот метод.
//    removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве //items объекта который вызывает этот метод.

//Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой //твой код будут проверять тесты. Пожалуйста ничего там не меняй.
class Storage  {
items = [];
constructor(items)
  {
    this.items = items;
  }

 getItems() {
   return this.items;
  }
  
addItem(newItem){
  return this.items.push(newItem);
  }
  
removeItem(itemToRemove){
  if (this.items.includes(itemToRemove))
    return this.items.splice(this.items.indexOf(itemToRemove), 1);
   return ;
  //this.items.filter(item => item === itemToRemove);
  };
  
};

//console.log(Storage);
// Change code above this line

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//console.log(Storage);
//
//    Объявлен класс Storage
//    В классе Storage объявлен метод getItems
//    В классе Storage объявлен метод addItem
//    В классе Storage объявлен метод removeItem
//    Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
//    Метод addItem изменяет свойство items экземпляра класса который его вызывает
//    Метод removeItem изменяет свойство items экземпляра класса который его вызывает
//    В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной //storage это объект
//    У объекта storage есть свойство items
//    Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", //"Prolonger", "Antigravitator"]
//    Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив //["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//    Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив //["Nanitoids", "Antigravitator", "Droid"]

  class StringBuilder{
 initialValue = "";
  constructor(initialValue){
    this.value = initialValue;
  }
getValue()   {    return this.value;  }
  padEnd(str){   this.value = this.value + str; }
  padStart(str){    this.value = str + this.value;   }
  padBoth(str){    this.value = str + this.value + str;  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); 
builder.padStart("^");
console.log(builder.getValue()); 
builder.padEnd("^");
console.log(builder.getValue()); 
console.log(builder.getValue()); 

//
//    Объявлен класс StringBuilder
 //   В классе StringBuilder объявлен метод getValue
 //   Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
 //   В классе StringBuilder объявлен метод padEnd
 //   Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
 //   В классе StringBuilder объявлен метод padStart
 //   Метод padStart изменяет свойство value экземпляра класса который его вызывает
 //   В классе StringBuilder объявлен метод padBoth
 //   Метод padBoth изменяет свойство value экземпляра класса который его вызывает
 //   В результате вызова new StringBuilder(".") значение переменной builder это объект
  //  У объекта builder есть свойство value
  //  Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
  //  Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
 //   Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
  //  Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=
  //---------------------------------------------------------------------------------------------------------
  class StringBuilder{
 initialValue = "";
  constructor(initialValue){
    this.value = initialValue;
  }
getValue()   {    return  this.value;  }
  padEnd(str){  return this.value = this.value + str; }
  padStart(str){  return  this.value = str + this.value;   }
  padBoth(str){  return  this.value = str + this.value + str;  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); 
builder.padStart("^");
console.log(builder.getValue()); 
builder.padEnd("^");
console.log(builder.getValue()); 
  console.log(builder.getValue()); 
  
  //---------------------------------------------------------------------------------------------------------

//Инкапсуляция - это концепция, предписывающая скрывать то, как устроен класс. Пользователь класса должен //получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса. Остальные //методы и свойства (не публичные) должны быть не доступны.

//В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри //класса.

//Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. //Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инциализации //в конструкторе - обязательно.
class Car {
  // Change code below this line
#brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
getBrand(){
  //get email() {
    return this.#brand;
 
}
 changeBrand(newBrand) {
   return this.#brand = newBrand;
 }
  
  // Change code above this line
}
//Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного //интерфейса, для чтения и изменения этого свойства.

 //   getBrand() - возвращает значение приватного свойства brand.
 //   changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.

 //   Объявлен класс Car
 //   Свойство brand в классе Car объявлено приватным
 //   Конструктор класса принимает объект со свойствами brand, model и price
 //   В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { model: //"Q3", price: 36000 }
//    В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 }) получится объект { model: //"X5", price: 58900 }
//    В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { //model: "Murano", price: 31700 }
//    У экземпляра нет публичного свойства brand
//    Метод getBrand() возвращает значение приватного свойства brand.
//    Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"
 //----------------------------------------------------------------------------------------------------------------- 
//Выполни рефакторинг класса Storage, сделав свойство items приватным.

//Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой //твой код будут проверять тесты. Пожалуйста ничего там не меняй.
class Storage {
  // Change code below this line
#items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    //this.items = this.#items.filter(item => item !== itemToRemove);
    if (this.#items.includes(itemToRemove))
    return this.#items.splice(this.#items.indexOf(itemToRemove), 1);
   return ;
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//
///    Объявлен класс Storage
//    У объекта storage нет свойства items
 //   В классе Storage объявлен метод getItems
//    В классе Storage объявлен метод addItem
 //   В классе Storage объявлен метод removeItem
//    Свойство items в классе Storage объявлено приватным
//    Конструктор класса принимает свойство items
//    В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной //storage это объект
//    Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", //"Prolonger", "Antigravitator"]
 //   Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив //["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//    Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив //["Nanitoids", "Antigravitator", "Droid"]

//-------------------------------------------------------------------------------------------------------------
  //Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.

//Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
  class StringBuilder {
  // Change code below this line
#value
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = this.#value.padStart(this.#value.length + 1, str);
    this.#value = this.#value.padEnd(this.#value.length + 1, str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="
 //

    //Объявлен класс StringBuilder

   // Свойство value в классе StringBuilder объявлено приватным

   // В классе StringBuilder объявлен метод getValue

   // В классе StringBuilder объявлен метод padEnd

   // В классе StringBuilder объявлен метод padStart

   // В классе StringBuilder объявлен метод padBoth

   /// В результате вызова new StringBuilder('.') значение переменной builder это объект

   // У объекта builder нет свойства value

   // Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .

   // Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.

   // Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^

   // Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=
 
//-------------------------------------------------------------------------------------------------------------
  
  //Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. //Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более //удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его //изменить.

//Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно //приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не //подойдут.
class Car {
  // Change code below this line
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
//Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй //публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для //взаимодействия с приватными свойствами.

 //   Объявлен класс Car
 //   В классе Car объявлено приватное свойство brand
 //   В классе Car объявлено приватное свойство model
 //   В классе Car объявлено приватное свойство price
 //   Конструктор класса принимает объект со свойствами brand, model и price
 //   В классе Car объявлен геттер brand
 //   В классе Car объявлен сеттер brand
 //   В классе Car объявлен геттер model
 //   В классе Car объявлен сеттер model
 //   В классе Car объявлен геттер price
 //   В классе Car объявлен сеттер price
  //----------------------------------------------------------------------------------------------------
  //Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - //максимально допустимая цена автомобиля.

//Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, //сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE > newPrice)
    this.#price = newPrice;
    return ;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
//
//    Объявлен класс Car
//    У класса Car есть статическое свойство MAX_PRICE
//    Значение статического свойства MAX_PRICE это число 50000
//    У экземпляра нет свойства MAX_PRICE
//    В классе Car объявлен геттер price
//    В классе Car объявлен сеттер price
//    Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, //изменяет свойство #price
//    Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не //изменяет свойство #price
//--------------------------------------------------------------------------------------------------------------
  
  //В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - //статические методы, которые могут быть как публичные так и приватные. Синтаксис объявления аналогичен //статическим свойствам, за исключением того что значением будет метод.
//class User {
//  static #takenEmails = [];

//  static isEmailTaken(email) {
//    return User.#takenEmails.includes(email);
//  }

//  #email;

 // constructor({ email }) {
 //   this.#email = email;
 //   User.#takenEmails.push(email);
 // }
//}

//const mango = new User({ email: "mango@mail.com" });

//console.log(User.isEmailTaken("poly@mail.com"));
//console.log(User.isEmailTaken("mango@mail.com"));
//Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. //Это значит что статический метод может получить доступ к статическим свойствам класса, но не к свойствам //экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

//Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен //сравнить значения параметра price и приватного статического свойства MAX_PRICE.

//    Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the //maximum".
//    В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".

//Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет //использоваться метод checkPrice(price).
//================================================================================================
class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
static checkPrice(price){
  //if (price > Car.#MAX_PRICE) return "Error! Price exceeds the maximum";
  if (price > this.#MAX_PRICE) return "Error! Price exceeds the maximum";
  else return "Success! Price is within acceptable limits";
}
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//
//    Объявлен класс Car
//    У класса Car есть статический метод checkPrice(price)
//    Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
//    Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
//    Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
//    Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"
  
  //-----------------------------------------------------------------------------------------------------------------
  //Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, //производный) наследует свойства и методы другого класса (родителя).

//В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

 //   Объяви класс Admin, который наследует от класса User
 //   Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого //это объект { BASIC: "basic", SUPERUSER: "superuser" }
//В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

//   Объяви класс Admin, который наследует от класса User
//    Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого //это объект { BASIC: "basic", SUPERUSER: "superuser" }

class User {
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User { 
 static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  }
console.log(Admin.AccessLevel.BASIC);
console.log(Admin.AccessLevel.SUPERUSER);

//
//    Объявлен класс Admin
//    Класс Admin наследует от класса User
//    У класса Admin есть публичное статическое свойство AccessLevel
//    Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
//    Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

// Change code below this line
 //------------------------------------------------------------------------------------------------------------
 
  
//Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это //псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в //конструкторе дочернего класса, будет ошибка. При вызове конструктора класса родителя передаём необходимые //ему аргументы для инициализации свойств.
//class User {
 // constructor(email) {
 //   this.email = email;
 // }

 // get email() {
 //   return this.email;
 // }

 // set email(newEmail) {
 //   this.email = newEmail;
 // }
//}

//class ContentEditor extends User {
//  constructor({ email, posts }) {
//    // Вызов конструктора родительского класса User
//    super(email);
//    this.posts = posts;
 // }
//}

//const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//console.log(editor); // { email: 'mango@mail.com', posts: [] }
//console.log(editor.email); // 'mango@mail.com'
//Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя //свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого //будет передаваться при вызове конструктора.

//Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением //класса.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
    constructor ({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    
  };

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
//
//    Объявлен класс Admin
//    Класс Admin наследует от класса User
//    У класса Admin есть публичное статическое свойство AccessLevel
//    У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
//    У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского //класса
//    Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
//    Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"
  
  class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  blacklistedEmails = [];
  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails =  blacklistedEmails;
  }
   blacklist(aemail) {
   this.blacklistedEmails.push(aemail);
}
isBlacklisted(bemail) {
  if (this.blacklistedEmails.find(blacklistedEmail => blacklistedEmail === bemail))
    return true;
  else return false;
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
 blacklistedEmails: [],
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true

 //--------------------------------------------------------------------------------------------------------
 //В дочернем классе можно объявлять методы, которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

//class ContentEditor extends User {
//  constructor({ email, posts }) {
//   super(email);
//    this.posts = posts;
 // }

 // addPost(post) {
 //   this.posts.push(post);
 // }
//}

//const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
//console.log(editor); // { email: 'mango@mail.com', posts: [] }
//console.log(editor.email); // 'mango@mail.com'
//editor.addPost("post-1");
//console.log(editor.posts); // ['post-1']
 
  
  //Добавь классу Admin следующие свойства и методы.

   // Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
   // Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
   // Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

//После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
  class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }
blacklist(email) {
  this.blacklistedEmails.push(email);
}

  isBlacklisted(email) {
 //  return
 // this.blacklistedEmails.includes(email);
    if (this.blacklistedEmails.find(blacklistedEmail => blacklistedEmail === email))
    return true;
  else return false;
}
  // Change code above this line
  }
  
  //
  //  Объявлен класс Admin
   // Класс Admin наследует от класса User
   // У класса Admin есть публичное свойство blacklistedEmails
   // У класса Admin есть публичный метод blacklist
   // У класса Admin есть публичный метод isBlacklisted
   // После вызова mango.blacklist("poly@mail.com") значение свойства blacklistedEmails это массив ["poly@mail.com"]
   // Вызов mango.isBlacklisted("mango@mail.com") возвращает false
   // Вызов mango.isBlacklisted("poly@mail.com") возвращает true

}

//Завдання 1

// Функція для обчислення площі бічної поверхні піраміди
function calculateSurfaceArea() {
    // Отримання значень об'єму та висоти піраміди з полів введення
    let volume = parseFloat(document.getElementById("volumeInput").value); // let використовується для створення змінних // getElementById - Returns a reference to the first object with the specified value of the ID attribute
    let height = parseFloat(document.getElementById("heightInput").value); // parseFloat - Converts a string to a floating-point number
    // value у цьому контексті означає поточне значення, яке введено користувачем у вказане поле вводу з ідентифікатором

    // Перевірка на коректність введених даних
    if (isNaN(volume) || isNaN(height) || volume <= 0 || height <= 0) { // isNaN - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
        // Виведення повідомлення про помилку, якщо дані введено некоректно
        document.getElementById("result_1").innerText = "Будь ласка, введіть коректні значення об'єму та висоти піраміди.";
        return;
    }

    // Обчислення бічної сторони піраміди за формулою (A = V / h)
    let side = Math.sqrt(volume) / height; // sqrt - Returns the square root of a number

    // Обчислення площі бічної поверхні піраміди за формулою (S = 4 × A × h)
    let surfaceArea = 4 * side * height;

    // Виведення результату на сторінку з точністю до тисячних
    document.getElementById("result_1").innerText = "Площа бічної поверхні піраміди: " + surfaceArea.toFixed(3); // toFixed - Returns a string representing a number in fixed-point notation
}


// Завдання 2

// Функція для знаходження найбільшої висоти трикутника
function calculateHeight() {
    // Отримання значень сторін трикутника з введених користувачем даних
    let sideA = parseFloat(document.getElementById("sideA").value);
    let sideB = parseFloat(document.getElementById("sideB").value);
    let sideC = parseFloat(document.getElementById("sideC").value);

    // Перевірка на коректність введених даних
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        document.getElementById("result_2").innerText = "Будь ласка, введіть додатні числа для сторін трикутника.";
        return;
    }

    // Знаходження півпериметра трикутника
    let semiPerimeter = (sideA + sideB + sideC) / 2;

    // Знаходження площі трикутника за формулою Герона
    let triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));

    // Знаходження найбільшої висоти трикутника за формулою h = (2 * S) / a
    let heightA = (2 * triangleArea) / sideA;
    let heightB = (2 * triangleArea) / sideB;
    let heightC = (2 * triangleArea) / sideC;

    // Знаходження максимальної висоти
    let maxHeight = Math.max(heightA, heightB, heightC); // max - Returns the larger of a set of supplied numeric expressions

    // Виведення результату
    document.getElementById("result_2").innerText = "Найбільша висота трикутника: " + maxHeight.toFixed(2);
}


// Завдання 3

// Функція, яка перевіряє, чи є число простим (чи має число дільники крім 1 та самого себе. Якщо таких дільників немає, число вважається простим)
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) { // Цикл починається з перевірки дільників з числа 2, оскільки 1 не вважається простим числом і будь-яке число ділиться на 1. Цикл продовжується до тих пір, поки i менше або дорівнює квадратному кореню з числа number. Оскільки якщо number ділиться націло на яке-небудь число більше його квадратного кореня, то воно також ділиться націло і на число менше за квадратний корінь
        if (number % i === 0) { // Перевіряється, чи number ділиться націло на поточне значення i. Якщо number ділиться на i без остачі, то це означає, що number не є простим числом, оскільки воно має інший дільник, окрім 1 та самого себе
            return false;
        }
    }
    return true;
}

// Функція, яка виводить всі прості числа менше за N та їхню суму
function showAllPrimesAndSum() {
    // Отримання введеного користувачем числа N
    let N = parseInt(document.getElementById("numberInput").value);

    // Перевірка на коректність введеного значення
    if (isNaN(N) || N <= 1) {
        document.getElementById("result_3").innerText = "Введіть коректне число більше за 1!";
        return;
    }

    let primes = []; // Масив для зберігання простих чисел
    let sum = 0; // Змінна для обчислення суми

    // Перебір всіх чисел менше за N
    for (let i = 2; i < N; i++) {
        if (isPrime(i)) { // Перевірка, чи є число простим
            primes.push(i); // Додавання простого числа до масиву
            sum += i; // Додавання простого числа до суми
        }
    }

    // Виведення результату на сторінку
    let primesText = "Прості числа менші за " + N + ": " + primes.join(", ");
    let result = "Сума простих чисел менше за " + N + ": " + sum;
    document.getElementById("result_3").innerHTML = primesText + "<br>" + result;
}


// Завдання 4

// Функція для вилучення нулів та заміни їх зірочками
function replaceZeros() {
    // Отримуємо введене користувачем число
    var number = document.getElementById("inputNumber").value;
    
    // Перевіряємо, чи введено число
    if (!isNaN(number) && number !== '') { // Ця умова перевіряє, чи введене значення number не є порожнім рядком. !== - це оператор нерівності в JavaScript, який перевіряє, чи два значення не рівні одне одному.

        // Замінюємо нулі на зірочки
        var replacedNumber = number.replace(/0/g, '*'); // /0/g - Це регулярний вираз, що шукає всі входження цифри "0" у рядку. /0/ - це сам регулярний вираз, який вказує на символ "0", а g - прапор, що означає "глобальний", тобто метод буде шукати всі входження, а не тільки перше.
        
        // Виводимо результат
        document.getElementById("result_4").innerText = "Результат: " + replacedNumber;
    } else {
        // Повідомлення про помилку, якщо введено не число
        document.getElementById("result_4").innerText = "Будь ласка, введіть дійсне число!";
    }
}

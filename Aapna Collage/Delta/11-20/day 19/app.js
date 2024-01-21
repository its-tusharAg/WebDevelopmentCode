function printHello() {
    console.log("Hello");
}

printHello();

//  Roll a dice 
function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1)
}
rollDice();

function preName(name) {
    console.log(name);
}
preName("Tushar");

function info(name, age) {
    console.log(`${name}'s age is ${age}.`,);
}
info("Tushar", 20);


function avg3Num(a, b, c) {
    console.log((a + b + c) / 3);
}

avg3Num(2, 3, 1);

// Table
function tables(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

tables(2);

function sm(a, b) {
    return a + b;
}

console.log(sm(1, 2));

function adOrNot(num) {
    if (num >= 18) {
        return "adult";
    }
    else {
        return "Not adult";
    }

    console.log("dsfg")
}

console.log(adOrNot(124));

function smNum(num) {
    let nm = 0
    for (let i = 1; i <= num; i++) {
        nm += i;
    }
    return nm;
}

console.log(smNum(50));

function conc(arr) {
    let combileStr = "";
    for (str of arr) {
        combileStr += str;
    }
    return combileStr;
}
let strArr = ["Tushar", "Anshika", "rahul"]
console.log(conc(strArr));

let greet = "Hello!!";

function grt() {
    let greet = "Namaste!!"
    console.log(greet);

    function inrGreet() {
        console.log(greet);
    }
}

console.log(greet);
grt();
console.log(greet);

let fun1 = function (a, b) {
    return a + b;
}

console.log(fun1);

// higher order function

let gt = function () {
    console.log("Holla");
}

let gtNum = function (fn, count) {
    for (let i = 0; i < count; i++) {
        fn();
    }
}
gtNum(gt, 50)

function oddEvenFun(request) {
    if (request == "odd") {
        return function odd(n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "even") {
            return function even(n) {
                console.log(n % 2 == 0);
            }
    }
    else {
        // console.log("Wrong request");
        return "Wrong request";
    }
}

let request = "odd";
let evenOddFun = oddEvenFun(request);
evenOddFun(3)

let cal = {
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mult: function(a, b){
        return a*b;
    },
}

console.log(cal.add(1,2))
console.log(cal.sub(1,2))
console.log(cal.mult(1,2))


// pdf questions

// question 1

function largArr(arr, gnm) {
    let arr2 = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > gnm) {
            arr2[i] = arr[i];
        }
    }
    return arr2;
}

console.log(largArr([2, 4, 1, 9, 10, 2, 5, 6], 8));

// question 2

let str5 = "abcdabcdefgggh";
const strFinder = (str) => {
    let cou = 0;
    let charArr = [];
    let charStr = ""
    for(ch of str) {
        if(charArr.includes(ch) == false){
            charArr[cou] = ch; 
            charStr += charArr[cou];
            cou++;
        }
    }
    return charStr;
}

console.log(strFinder(str5));

// question 3

const maxLenOfCountry = (countryName) => {
    let maxCountLen = "";
    for(el of countryName) {
        if(el.length > maxCountLen.length){
            maxCountLen = el
        }
    }
    return maxCountLen;
}

console.log(maxLenOfCountry(["Australia", "Germany", "United States of America"]));

// question 4

const vowelsCount = (vovStr) => {
    let vovCount = 0;
    for(el of vovStr){
        if(el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u') {
            vovCount++;
        }
    }
    return vovCount;
}

console.log(vowelsCount("halwa"));


// question 5

const rand = (start, end) => {
    return Math.floor(Math.random()*(end-start +1))+start;
}
console.log(rand(2, 5));
console.log(rand(2, 5));
console.log(rand(2, 5));
console.log(rand(2, 5));
console.log(rand(2, 5));


// Arrays

let arr1 = ["halwa", 2, "nice"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]); // out of range
console.log(typeof arr1);
arr1[10] = "tushar"
console.log(arr1);
let arr2 = ["tushar", "aman", "rohan", "anshika", "shivani"];
console.log(arr1.concat(arr2));
console.log(arr1.includes("halwa"));
console.log(arr1.reverse());
console.log(arr2.slice(0, 1));
// splice
console.log(arr2.splice(3));
console.log(arr2);
console.log(arr2.splice(1, 2, "Halwa", "secondHala"));
console.log(arr2);
console.log(arr2.sort());
console.log(arr2);

// Lec question
// q1
let monthArr = ["january", "july", "march", "august"];
monthArr.splice(0, 2, "july", "june");
console.log(monthArr);
// q2
let langArr = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(langArr.reverse().indexOf("javascript"));
// q3

let ticTac = [["X", " ", "O"],[" ", "X", " "],["O", " ", "X"]];
console.log(ticTac);
ticTac[0][1] = "O";
console.log(ticTac);
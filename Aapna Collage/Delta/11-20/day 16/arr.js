// Arrays

let arr1 = ["halwa", 2, "nice"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]); // out of range
console.log(typeof arr1);
arr1[10] = "tushar"
console.log(arr1);
let arr2 = ["tushar", "anshika", "shivani"];
console.log(arr1.concat(arr2));
console.log(arr1.includes("halwa"));
console.log(arr1.reverse())
console.log(arr2.slice(0, 1))
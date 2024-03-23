//  let arr = [32, 5, 34, 77, 2, 6, 7997];
//  console.log(arr.length);
// console.log(typeof(arr)); 
// let a = 98
// console.log(a);
// for(let i in arr){
//     console.log(arr[i]);
// }

// Question: Find the avg of the array
// let arr = [85, 97, 44, 37, 76, 60];
// let sm = 0;
// for(let i in arr){
//     sm += arr[i];
// }
// console.log(`Avg marks of this arr is: ${sm/arr.length}`);

// Question: change arre as per the discount
// let prices = [250, 645, 300, 900, 50];
// for(let i in prices){
//     let changedPrice = prices[i] - prices[i]/10;
//     prices[i] = changedPrice; 
// }
// console.log(prices);

// Array metods
// let arr = ["apple", "mango", "banana"];
// let arr2 = ["tamato", "halwa", "aalu"];
// let arr3 = ["papaya", "graps", "pizza"];
// console.log(arr);
// arr.push("Halwa"); //Used to add anything at the end
// console.log(arr);
// arr.pop(); //used to delete anything form the last
// console.log(arr);
// console.log(arr.toString()); //used to convert all the values in string in arrays and dont not change in the orginal array
// let allItems = arr.concat(arr2, arr3); // use to combine arrays but dont change in orginal arr
// console.log(allItems);
// arr.unshift("nice"); // use to add somethis at the start(similar to push)
// console.log(arr);
// arr.shift();
// console.log(arr); // remove something from the start(similar to pop)
// console.log(arr.slice(0, 2)); //slice to slice
// arr.splice(1, 1, "Halwa"); //use to delete, add and replace
// arr.splice(1); // if we write only one index then it will delete all the elements from that index 
// console.log(arr);

// Questions: remove, add, replace
let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(1, 1, "Ola");
console.log(arr);
arr.push("Amazon");
console.log(arr);

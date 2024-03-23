function myFun(msg){
    // console.log("Halwa hai dosto");
    console.log(msg);
}
function sm(a, b){
    // function parameters and like local cariables of function which are block scope..which meamns voo curly brackets kai andr tk hi hai
    // console.log(a+b);
    return a+b;
}

const sum = (a, b)=>{ // function using arrow function. in morden js this form is use most for small code of lines .
    console.log(a+b);
}
const mult = (a,b) => {
    return a*b;
}
function findVov(str){
    let count = 0;
    for(let i of str){
        if(i ==='a' || i ==='e' || i ==='i'|| i ==='o' || i ==='u'){
            count++;
        }
    }
    return count;
}
const numVov = (str) =>{
    let count = 0;
    for(let i of str){
        if(i ==='a' || i ==='e' || i ==='i'|| i ==='o' || i ==='u'){
            count++;
        }
    }
    return count;
}
// myFun("Halwa hai dosto.");
// sm(2, 3);
// console.log(sm(2,3));
// sum(4,5)
// console.log(mult(2,3));
// console.log(findVov("Halwaeu"))
// console.log(numVov("Halwaeu"))
let arr = [1, 2, 3, 4, 5, 22, 2, 6, 9,8];
let arr3 = arr.forEach((i) =>{ // forEach is use to perform any function or action to each element of the array.
    console.log(i);
})
let arr2 = arr.map(function pr(i){ //similar to forEach bss diff yai hai ki iss mai new arr create kr skte hai and uss mai store kr skte hai
    return i*2
})
console.log(arr2);
let evenArr = arr.filter(i =>{ //this function is use to filter the elements
    return i%2==0;
})
console.log(evenArr);

let smArr = arr.reduce((res, curr)=>{
    return res + curr;
    // return res>curr ? res : curr; // use to find the largest 
})
console.log(smArr);



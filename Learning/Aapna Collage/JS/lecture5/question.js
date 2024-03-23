let arr = [54, 67, 99, 90, 91 ,45];

// Question: find marks 90+ 
let marks = arr.filter(i =>{
    return i>=90;
})
console.log(marks);

let num = prompt("Enter the number:");
let newArr = [];
for(let i=0; i<num; i++){
    newArr[i] = i+1;
}
let sm = newArr.reduce((res, curr)=>{
    return res+curr;
})
console.log(sm);
let pr =  newArr.reduce((res, curr)=>{
    return res*curr;
})
console.log(pr);

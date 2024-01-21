arr = [1, 2, 3, 4, 5];

// we have to create a function forEach function
console.log("forEach");
arr.forEach((fn) => {
    console.log(fn);
})

// But for for of loop we dont need to create a function
console.log("for of");
for(el of arr) {
    console.log(el)
}

arr2 = [{
    name: "Tushar",
    section: "y",
    rollNo: 45,
    marks: 76
},
{
    name: "Anshika",
    section: "A",
    rollNo: 2,
    marks: 99,
},
{
    name: "Rahul",
    section: "R",
    rollNo: 38,
    marks: 54,
}]

arr2.forEach((rn) => {
    console.log(rn.rollNo);
})

// Map function

let gpa = arr2.map((gp) => {
    return gp.marks/10;
    // console.log(gp.marks/10); //it also work
})
gpa.forEach(mark => {
    console.log(mark)
});

// filture function
let evenArr = arr.filter((el) => {
    return el%2 == 0;
})
console.log(evenArr);

// Every function
console.log([2, 4, 12].every((el) => el%2==0))
console.log([2, 4, 12].every((el) => el%2 !== 0))

// Reduction function
let smArr = [1, 2, 3, 4, 1, 3, 8,4, 9, 31];
let finalVal = smArr.reduce((red, el) => {
    return red+el
})
console.log(finalVal);

let max = smArr.reduce((max, el) =>{
    if(max < el) {
        return el;
    }
    else {
        return max
    }
})
console.log(max)

// question
// all nums are mult of 10 of not

let mulArr = [10, 30, 100, 410, 40];

let checkArr = mulArr.every((el) => {
    return el % 10 == 0;
})
console.log(checkArr)

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

// default perameter
let fun = (a, b=3) => {
    console.log(a+b);
}
fun(2);

// sperad
let speradeArr = [1, 2, 3, 4, 5];
console.log(speradeArr);
console.log(...speradeArr);
console.log(Math.min(speradeArr));
console.log(Math.min(...speradeArr));
console.log("tushar");
console.log(..."tushar");
let neseerarr = [speradeArr];
let neseerarr2 = [...speradeArr];
let neseerarr3 = speradeArr;
console.log(neseerarr)
console.log(neseerarr2)
console.log(neseerarr3)

let newStrArr = [..."Tushar"];
let newStrArr2 = ["Tushar"];
console.log(newStrArr)
console.log(newStrArr2)

oddNum = [1, 3, 5, 7];
evenNum = [2, 4, 6];
let newNumArr = [...evenNum, ...oddNum];
console.log(newNumArr)

let data = {
    email: "xyz@gmail.com",
    pass: "xyz",
}
console.log(data);
let copyData = {data};
let copyData2 = {...data, id: 123};
console.log(copyData);
console.log(copyData2);
let strName = "tushar";
copyName = {strName};
console.log(copyName);
copyName = {...strName};
console.log(copyName);

// Destruction
let names = ["Tushar", "Anshika", "rahul", "vivek", "ramesh"];
let [winner, runnerUp, ...rest] = names;
console.log(winner, runnerUp);
console.log(winner, runnerUp, rest);

let student = {
    name: "Tushar",
    section: "y",
    rn: 45, 
} 

let {name: name2, section} = student;
console.log(name2);
console.log(section);

// pdf question 
// question 1

const avg = (arr) => {
    let sq = arr.map(nm => nm*nm);
    console.log(sq)
    let sm = sq.reduce((res,el) => res+el);
    console.log(sm);
    let avgg = sm/arr.lenght;
    console.log(avgg);
}
avg([1, 2, 3, 4, 5])

// question 2
let newArr = [1, 2, 3, 4, 5];
let plusFive = newArr.map((res, el) => res = res+5);
console.log(plusFive)

// question 3

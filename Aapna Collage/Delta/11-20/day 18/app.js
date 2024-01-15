const student = {
    name: "Tushar",
    age: 20,
    Section: "B",
    rollNo: 63
};
console.log(student);

const items = {
    item: "pen",
    cost: 10,
    discount: "no"
};
console.log(items);

// lec Question
const post = {
    username: "Tushar",
    content: "Picture",
    likes: 32,
    repost: 33,
    tags: ["Halwa", "suji ka", "basen ka"]
};
console.log(post);
console.log(post.username);
console.log(post["username"]);
console.log(post.likes);
console.log(post.repost);
let post2 = "content";
// we cant use . operator while using varables
console.log(post.post2);
console.log(post[post2]);

const obj = {
    1: "a",
    2: "b",
    3: 3,
    true: false,
    null: "d"
};
console.log(obj)
console.log(obj[true]);

post.username = "anshika";
console.log(post.username);
console.log(post);
post.gender;
post.gender = "female";
console.log(post["gender"]);
console.log(post)
console.log(delete post.likes);
console.log(post)

const classInfo = {
    tushar: {
        rollNo: 83,
        section: "B",
    },
    anshika: {
        rollNo: 1,
        section: "A",
    },
    rahul: {
        rollNo: 44,
        section: "C",
    }
};
console.log(classInfo);
console.log(classInfo.tushar);
console.log(classInfo.anshika.section);
console.log(classInfo.rahul);

// Array of object
const classInfo2 = [
    {
        name: "tushar",
        rollNo: 83,
        section: "B",
    },
    {
        name: "anshika",
        rollNo: 1,
        section: "A",
    },
    {
        name: "rahul",
        rollNo: 44,
        section: "C",
    }
];

console.log(classInfo2);
console.log(classInfo2[0]);
console.log(classInfo2[0].name);
console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-88));
console.log(Math.pow(3, 2));
console.log(Math.floor(5.999));
console.log(Math.ceil(5.999));
console.log(Math.random());
console.log(Math.floor(Math.random()*5)+21);

// guessing game
let enteredMaxNum = Math.floor(Math.random()*prompt("Enter the max Num:"))+1;
console.log(enteredMaxNum);

let num = prompt("Guess the number:");
while(true){
    if(num == "quit"){
        console.log("You quit the game.");
        break;
    }

    if(num == enteredMaxNum){
        console.log("You gusses it right.");
        break;
    }
    else {
        num = prompt("You aree wrong try again");
    }
}

 
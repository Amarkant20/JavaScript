// object singleton

// const tinderUser = {}   // object literal
const tinderUser = new Object()

tinderUser.id = 123
tinderUser.name = "Amar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amarkant",
            lastname: "sonkar",
            age: 24,
            company: "L&T technology services"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// spread operator 
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "amar@gmail.com",
    },
    {
        id: 1,
        email: "amar@gmail.com",
    },
    {
        id: 1,
        email: "amar@gmail.com",
    },
    {
        id: 1,
        email: "amar@gmail.com",
    },
    {
        id: 1,
        email: "amar@gmail.com",
    }
]
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object destructuring 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor);


// Json looks 

// {
//     "name": "Amarkant",
//     "coursename": "Js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
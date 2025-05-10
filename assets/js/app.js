
//  1
// const num = -2 
//     if (num > 0) {
//         console.log('musbat'); 
//     } else {
//         console.log('manfiy');

//     }

//   2
// let cup1 = 'coco'
// let cup2 = 'fanta'
// let cup3 = ''
// cup3 = cup1;
// cup1 = cup2;
// cup2 = cup3

// console.log(cup2);

//   3

// const obj = {
//     a: 12,
//     b: 111
// }

// let a = obj.a;
// let b = obj.b;

// if (a == b) {
//     console.log('teng');
// } else if (a > b) {
//     console.log('a katta');
// } else if (b > a) {
//     console.log('b katta');
// }

//   4

// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i, 'juft');
//     } else {
//         console.log(i, 'toq');

//     }
// }

//   5

// const array = [
//     { title: "Naruto", genre: "Action", rating: 8.5 },
//     { title: "One Piece", genre: "Adventure", rating: 9.0 },
//     { title: "Death Note", genre: "Mystery", rating: 9.2 },];

// let min = 9;

// for (let i = 0; i < array.length; i++) {
//     if (array[i].rating >= 9) {
//         console.log(`Title: ${array[i].title},  Rating: ${array[i].rating}`);
//     } else {
//         console.log('siuuuu');

//     }
// }

//   6

// const students = [
//     {
//         name: "Alice",
//         age: 20,
//         grade: 75,
//         major: "Computer Science"
//     },
//     {
//         name: "Bob",
//         age: 22,
//         grade: 82,
//         major: "Mechanical Engineering"
//     },
//     {
//         name: "Charlie",
//         age: 19,
//         grade: 90,
//         major: "Mathematics"
//     },
//     {
//         name: "Diana",
//         age: 21,
//         grade: 88,
//         major: "Biology"
//     },
//     {
//         name: "Ethan",
//         age: 23,
//         grade: 70,
//         major: "History"
//     }
// ];


// for (let i = 0; i < students.length; i++) {
//     if (students[i].grade >= 90) {
//         console.log(`name:${students[i].name}, grade:${students[i].grade}, major:${students[i].major}, baho: A`);
//     }  else if (students[i].grade >= 85) {
//         console.log(`name:${students[i].name}, grade:${students[i].grade}, major:${students[i].major}, baho: B`);
//     }  else if (students[i].grade >= 80) {
//         console.log(`name:${students[i].name}, grade:${students[i].grade}, major:${students[i].major}, baho: C`);
//     }  else if (students[i].grade >= 75) {
//         console.log(`name:${students[i].name}, grade:${students[i].grade}, major:${students[i].major}, baho: F`);
//     }      
// }



//    7

// function conCulator(num1, num2, belgi) {
//     if (belgi === '+') {
//         result = (num1 + num2);
//     } else if (belgi === '-') {
//         result = (num1 - num2);
//     } else if (belgi === '*') {
//         result = (num1 * num2);
//     } else if (belgi === '/') {
//         result = (num1 / num2);
//     }
// }

// conCulator(35, 35, '/');

// conCulator(prompt('Javob:' + result));

//    8

// for (let i = 0; i < 100; i++) {
//     if (i % 15 == 0) {
//         console.log('fizzbuss');
//     } else if (i % 5 == 0) {
//         console.log('fizz');
//     } else if (i % 3 == 0) {
//         console.log('buss'); 
//     } else {
//         console.log(i);
//     }
// }


//   9

// for (let i = 2; i < 21; i++) {
//     let isPrime = true;


//     for (let index = 2; index < i; index++) {
//         if (i % index === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);

//     }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [...allvalues] = array

// console.log();

//   10

// const order = {
//     customer: {
//         name: 'Asal',
//         contact: {
//             phone: '998901112233',
//             email: 'akosh@gmail.com'
//         }
//     },
//     items: [
//         { name: 'Laptop', price: 1200 },
//         { name: 'Mouse', price: 25 }
//     ],
//     payment: null,
//     shipping: {
//         address: {
//             city: 'Tashkent',
//             street: 'Yunusabad 5'
//         },
//         delivered: false
//     }
// }
// let number = order.customer.contact.phone;
// let email = order.customer.contact.email;


// //  number

// if (number || '') {
//     console.log(`customer phone: ${number}`);
// } else {
//     console.log('phone not available');
// }

// //   email
 
// if (email || false) {
//     console.log(`email provided: ${email}`);
// } else {
//     console.log('No email provided');
// }

// //   paymet

// let pay = order.payment
// const paymet = pay ?? 'Paymet pending';
// console.log(paymet);

// //   price 

// for (let i = 0; i < order.items.length; i++) {
//     let price = order.items[i].price;
//     const total = (...numbers) => {
//             return numbers.reduce((acc, curr) => acc + curr, 0);  
//         }
//     console.log(total(order.items[0].price, order.items[1].price) + '$');
// }

// //   city

// let city = order.shipping.address.city;

// if (city || false) {
//     console.log(`shipping to ${city}`);
    
// } else {
//     console.log('Delivery address missing');
// }

// //   dilevered

// let delivered = order.shipping.delivered;

// if (delivered && true) {
//     console.log('Order has been delivered');
// };


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

//   12

// function Car(brand, color) {
//     this.brand = brand;
//     this.color = color;
// }

// Car.prototype.startEngine = function() {
//   console.log(`Starting ${this.brand} with ${this.color} color`);
// };

// const bmw = new Car("Bmw", "green");
// bmw.startEngine();


// const mers = new Car("mers", "black");

// const ElectricCar = Object.create(mers);

// ElectricCar.batteryLevel = 80;

// ElectricCar.charge = function() {
//   console.log(`Charging ${this.brand} to 100%`);
// };

// ElectricCar.startEngine();
// ElectricCar.charge();    
// console.log(ElectricCar.batteryLevel);

//


const ism = document.querySelector('.name');
const sureName = document.querySelector('.sureName');
const parol = document.querySelector('.password');
const btn = document.querySelector('.btn');
const h1 = document.querySelector('.heading')
const h2 = document.querySelector('.heading2')
const h3 = document.querySelector('.heading3')

btn.addEventListener('click', function () {
  let ismValue = ism.value;
  let sureNameValue = sureName.value;
  let parolValue = parol.value;

  var UppercaseLetter = ismValue.match(/[A-Z]/g)?.join('');
  var LowercaseLetter = ismValue.match(/[a-z]/g)?.join('');

  if (UppercaseLetter || LowercaseLetter) {
    var ismValue1 = UppercaseLetter.toLowerCase();
    var ismValue2 = LowercaseLetter.toUpperCase();
  }

  ismValue = ismValue1 + ismValue2

  h1.innerHTML = `FirstName: ${ismValue}`
  //
  var UppercaseLetter = sureNameValue.match(/[A-Z]/g)?.join('');
  var LowercaseLetter = sureNameValue.match(/[a-z]/g)?.join('');

  if (UppercaseLetter || LowercaseLetter) {
    var sureNameValue1 = UppercaseLetter.toLowerCase();
    var sureNameValue2 = LowercaseLetter.toUpperCase();
  }
  sureNameValue = sureNameValue1 + sureNameValue2

  h2.innerHTML = `SureName: ${sureNameValue}`
  //

  var UppercaseLetter = parolValue.match(/[A-Z]/g)?.join('');
  var LowercaseLetter = parolValue.match(/[a-z]/g)?.join('');
  var NumbercaseLetter = parolValue.match(/\d/g)?.join('');
  var SymbolcaseLetter = parolValue.match(/[!?-]/g)?.join('');



  if (UppercaseLetter || LowercaseLetter) {
    var parolValue1 = UppercaseLetter.toLowerCase();
    var parolValue2 = LowercaseLetter.toUpperCase();
  }
  parolValue = parolValue1 + parolValue2 + NumbercaseLetter + SymbolcaseLetter


  for (let p = 0; p < parolValue.length; p++) {
    if (parolValue.length < 10) {
      return alert('parol 10tadan kam bolmasin')
    }
    if (SymbolcaseLetter) {

    } else {
      return alert('parolingizda !, ?, -, lardan biri qatnashsin')
    }
  }
  h3.innerHTML = `password: ${parolValue}`

})



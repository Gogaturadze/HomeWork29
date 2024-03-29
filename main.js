// 7.1

const months = {
  1: "იანვარი",
  2: "თებერვალი",
  3: "მარტი",
  4: "აპრილი",
  5: "მაისი",
  6: "ივნისი",
  7: "ივლისი",
  8: "აგვისტო",
  9: "სექტემბერი",
  10: "ოქტომბერი",
  11: "ნოემბერი",
  12: "დეკემბერი",
};

console.log(months);

// 7.2

const person = {
  firstName: "გოგა",
  lastName: "თურაძე",
  gender: "მამრობითი",
};

console.log(`${person.firstName} ${person.lastName} (${person.gender})`);

// 7.3
let nowadays = new Date();
const date = {
  day: nowadays.getDate(),
  months: nowadays.getMonth(),
  year: nowadays.getFullYear(),
};

console.log(date);

// 7.4

/* let obj = {
  "11key": "მნიშვნელობა1",
  "key-8": "მნიშვნელობა2",
  key4: "მნიშვნელობა3",
};

console.log(obj); */

// 7.5

let obj = {
  "9name": 10,
  key7: 20, // არ სჭირდება ფრჩხილებში ჩასმა
  "a-b": 30,
  "city 10": 40,
  city10: 50, // არ სჭირდება ფრჩხილებში ჩასმა
};

// 7.6

let products = {
  pr1: "ბანანი",
  pr2: "მარწყვი",
  pr3: "მსხალი",
  pr4: "მარწყვი",
  pr5: "ატამი",
  pr6: "საზამთრო",
  pr7: "მარწყვი",
};

let replaceValue = (obj, oldValue, newValue) => {
  for (let key in obj) {
    if (obj[key] === oldValue) {
      obj[key] = newValue;
    }
  }
};
replaceValue(products, "მარწყვი", "ალუბალი");

console.log(products);

// 7.7

const car = {
  model: {
    manufacturer: "BMW",
    mark: "X6",
  },
  color: "black",
  is_left_hand_drive: false,
  number_of_doors: 5,
};

console.log(`${car.model.manufacturer} ${car.color}`);

// 7.8

car.is_left_hand_drive = true;
car.color = "white";

console.log(car);

// 7.9

let obj1 = {
  a: 7,
  b: 8,
  c: 9,
};

let squar = (number) => number ** 2;

console.log(squar(obj1.a), squar(obj1.b), squar(obj1.c));

// 7.10

const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publisher: "O'Reilly Media",
  year_of_publication: 2011,
};

const arr = [];
for (let key in book) {
  arr.push(key);
}

console.log(arr);

const values = [];
for (let value of Object.values(book)) {
  values.push(value);
}

console.log(values);

// 7.11

const book1 = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
};
const year = { year_of_publication: 2011 };

const mergeBook = {
  ...book1,
  ...year,
};

console.log(mergeBook);

// 7.12

const user = { userName: "superadmin", password: "Godzilla" };

let userName = user.userName;
let password = user.password;

console.log(`${userName} ${password}`);

// 7.13

const student = {
  studentName: "პეტრე მგელაძე",
  paydVolum: 700,
};

let canEnrollToCourse = (student) => {
  if (student.paydVolum >= 1125) {
    console.log(true);
  } else {
    console.log(false);
  }
};

canEnrollToCourse(student);

// 7.14

const purchases = {
  foods: ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
  amountPaid: [4, 6, 4, 12, 15],
  date: "27/11/2021",
};

let getTotalAmount = (total, purchases) => total + purchases;
let sum = purchases.amountPaid.reduce(getTotalAmount, 0);

console.log(sum);

// 7.15

const car2 = {
  manufacturer: {
    name: "BMW",
    location: "Munich, Germany",
    year_of_establish: 1916,
  },
  model: "X6",
  color: "black",
  is_left_hand_drive: false,
  number_of_doors: 5,
};

let getFullModelOfCar = (car) => car.manufacturer.name + " " + car.model;

console.log(getFullModelOfCar(car2));

// 7.16

const purchases2 = [
  { item: "hammer", price: 22 },
  { item: "screwdriver", price: 17 },
  { item: "nails", price: 8 },
];

let getTotalPrice = (obj, total) => {
  for (let i = 0; i < obj.length; i++) {
    total += obj[i].price;
  }
  return total;
};

console.log(getTotalPrice(purchases2, 0));

// 7.17

let getAveragePrice = (obj) => {
  let total = 0;
  for (let i = 0; i < obj.length; i++) {
    total += obj[i].price;
  }
  let average = total / obj.length;
  return average;
};

console.log(getAveragePrice(purchases2).toFixed(2));

// 7.18

const product4 = {
  weight: 2,
  quantity: 4,
  price: 2.5,
  photo: "./apple.svg",
};

for (let key in product4) {
  document.write(key + "<br>");
}

for (let key in product4) {
  document.write(product4[key] + "<br>");
}

for (let key in product4) {
  document.write(key + ": " + product4[key] + "<br>");
}

// 7.19

let person3 = {
  firstName: "ნათია",
  age: 30,
  sayHello: function () {
    console.log("გამარჯობა " + this.firstName + ".");
  },
};

person3.sayHello();

// 7.20

const product5 = {
  weight: 2,
  quantity: 4,
  price: 2.5,
  photo: "./apple.svg",
  onStock: function () {
    if (this.quantity == 0) {
      document.write("მარაგი ამოიწურა");
    } else {
      document.write(`მარაგშია ${this.quantity}`);
    }
  },
};

product5.onStock();

// 7.21

const student2 = {
  studentName: "პეტრე მგელაძე",
  paydVolum: 700,
};

let changeProperty = (key, value, obj) => {
  obj[key] = value;
  return obj;
};

console.log(changeProperty("paydVolum", 800, student2));

changeProperty("studentName", "როინი ვეკუა", student2);
changeProperty("paydVolum", 900, student2);

console.log(student2);

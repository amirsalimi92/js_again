const circle = {
  radius: 1,
  location: {
    x: 2,
    y: 3,
  },
  isVisible: true,
  draw: function () {
    if (this.isVisible)
      console.log(
        `Circle located in ${this.location.x} and ${this.location.y} with radius ${this.radius}`
      );
  },
};

function createCircle(radius, location, isVisible) {
  return {
    radius,
    location,
    isVisible,
    draw() {
      console.log(
        `Circle located in ${location.x} and ${location.y} with radius ${radius}`
      );
    },
  };
}

function objectCreator(firstName, lastName, age, isActive) {
  return {
    firstName,
    lastName,
    age,
    isActive,
    printInfo() {
      console.log(
        `Your name is: ${firstName} ${lastName} and you have ${age} years old!`
      );
    },
  };
}

function ConstCreator(firstName, lastName, age, isActive) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isActive = isActive;
  this.draw = function () {
    console.log(
      `Your name is: ${firstName} ${lastName} and you have ${age} years old!`
    );
  };
}

// numbers = [0, 5, 7, 2, 0, 1, 6, 9, 3];

function maxFinder(params) {
  let biggest;
  for (let index = 0; index < params.length; index++) {
    if (biggest > params[index]) {
      continue;
    } else {
      biggest = params[index];
    }
  }
  console.log(biggest);
}

function setAdr(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function showAddress(input) {
  console.log(`Street is: ${input.street}
in ${input.city} city and zipCode is: ${input.zipCode}`);
}

// showAddress(setAdr("Freiligrathstrasse", "Bonn", 53123));

let adr1 = new setAdr("Heilmann", "Bonn", 53115);
let adr2 = new setAdr("verdistrasse", "Cologne", 51115);

let indexx = [
  { label: "$", tooltip: "inexpensive", minPrice: 0, maxPrice: 10 },
  { label: "$$", tooltip: "Moderate", minPrice: 11, maxPrice: 20 },
  { label: "$$$", tooltip: "Expensive", minPrice: 21, maxPrice: 50 },
];

let price = 1;

function finder(price) {
  for (let i = 0; i < indexx.length; i++) {
    if (price <= indexx[i].maxPrice && price > indexx[i].minPrice) {
      console.log(indexx[i].tooltip);
    }
  }
}

const msg = "This is my first message";
// console.log(msg.split(" "));
arr = [1, 2, 3, 4];
const resu = arr.filter((value) => {
  return value > 0;
});

// Excersise Arrays

function arrayFromRange(min, max) {
  arr = [];
  for (let index = min; index <= max; index++) {
    arr.push(index);
  }
  return arr;
}

const numbers = arrayFromRange(-6, 9);

const arra = [1, 2, 3, 4];

function includes(array, searchElement) {
  for (const iterator of array) if (iterator === searchElement) return true;
  return false;
}

console.log(includes(arra, 5));

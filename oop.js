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

// const msg = "This is my first message";
// console.log(msg.split(" "));
// arr = [1, 2, 3, 4];
// const resu = arr.filter((value) => {
//   return value > 2;
// });
// console.log(resu);

// Excersise Arrays

function arrayFromRange(min, max) {
  arr = [];
  for (let index = min; index <= max; index++) {
    arr.push(index);
  }
  return arr;
}

const numbers = arrayFromRange(-6, 9);

const arra = [1, 2, 7.5, 3, 7, 4, 1, 5];

function includes(array, searchElement) {
  for (const iterator of array) if (iterator === searchElement) return true;
  return false;
}

// console.log(includes(arra, 5));

function except(array, excluded) {
  const result = [];
  for (const iterator of array) {
    if (!excluded.includes(iterator)) {
      result.push(iterator);
    }
  }
  return result;
}

// console.log(except(arra, [1, 4]));

function move(array, index, offset) {
  const position = index + offset;
  console.log("position: " + position);

  if (position >= array.length || position < 0) {
    console.error("invalid");
  } else {
    const copy = array;
    console.log("copy: " + copy);
    const element = copy.splice(index, 1)[0];
    console.log("element: " + element);
    console.log(typeof element);
    console.log("copy2: " + copy);
    copy.splice(position, 0, element);
    return copy;
  }
}

// console.log(move(arra, 0, 6));

function countOccurrences(array, searchElement) {
  let result = 0;
  for (const iterator of array) {
    if (iterator === searchElement) {
      result += 1;
    }
    console.log(result, iterator, searchElement);
  }
  console.log(result);
}

// countOccurrences(arra, 1);

function getMax(array) {
  let max = null;
  for (const iterator of array) {
    if (iterator > max) {
      max = iterator;
    }
  }
  return max === null ? undefined : max;

  // With reduce methode
  // return array.reduce((a,b) => (a > b) ? a : b)
}

// console.log(getMax(arra));

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

function movie(input) {
  let movies = [];
  for (const iterator of input) {
    if (iterator["year"] >= 2018 && iterator["rating"] > 4) {
      movies.push(iterator);
    }
  }
  movies.sort((a, b) => {
    a.rating - b.rating;
  });
  movies.reverse();
  const output = movies.map((m) => m.title);
  return output;
}

// console.log(movie(movies));

function sum(...args) {
  console.log(args);
}

// sum();

function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

// console.log(interest(1000, undefined, 7));

function sum(...args) {
  let total = 0;
  for (arg of args) total += arg;
  return total;
}

console.log(sum(10, 20, 30));

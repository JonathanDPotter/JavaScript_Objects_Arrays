console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const arraySum = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};

// test logs
console.log(arraySum([10, 25, 35]));
console.log(arraySum([-3, 3, 0]));
console.log(arraySum(new Array(12).fill(10)));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {};

book.title = "The Blade Itself";
book.author = "Joe Abercrombie";
book.pages = 560;
book.readCount = 5;
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const sentence = "The quick brown fox jumps over the lazy dog";

console.log(
  sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let headers = [];

const arrayOfObjects = csvData.split("\n").map((value, i) => {
  if (i === 0) {
    headers = value.split(",");
    return null;
  } else {
    newObj = {};
    headers.forEach((header, i) => (newObj[header] = value.split(",")[i]));
    return newObj;
  }
});

arrayOfObjects.shift();

console.log(arrayOfObjects);

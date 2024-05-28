function loop1() {
  let fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

const loop2 = () => {
  // Ask for 3 items via a prompt (prompt 3 times) and add the items to an array, then print the array to the console one at a time

  const items = [];

  for (let i = 0; i < 3; i++) {
    const item = prompt("Enter item");
    items.push(item);
  }

  for (let i = 0; i < 3; i++) {
    console.log(items[i]);
  }
};

const loop3 = () => {
  // Ask for 3 items via a single prompt, then print the array to the console one at a time. Use `.split`

  const itemString = prompt("Enter 3 items, separated by commas");
  const items = itemString.split(",");

  for (let i = 0; i < items.length; i++) {
    console.log(items[i].trim());
  }
};

const map1 = () => {
  const numString = prompt("Enter comma separated numbers (e.g. 3,1,9):");
  const numArrayAsStrings = numString.split(",");

  // Version 1
  // const numArray = [];
  // for (let i = 0; i < numArrayAsStrings.length; i++) {
  //   const s = numArrayAsStrings[i];
  //   const num = Number(s);
  //   numArray.push(num);
  // }
  //

  // Version 2
  const numArray = numArrayAsStrings.map((s) => {
    return Number(s);
  });

  // Version 3
  // function convertToNumber(str) {
  //   return Number(str);
  // }
  // const numArray = numArrayAsStrings.map(convertToNumber);

  // Version 4
  // const numArray = numArrayAsStrings.map(Number);

  console.log(numArray);
};

const map2 = () => {
  const numbers = [1, 2, 3, 4, 5];

  // Use arrow syntax for making a function
  const doubleNumber = (num) => {
    return num * 2;
  };

  const doubled = numbers.map(doubleNumber);

  console.log(doubled); // [2, 4, 6, 8, 10]
};

const map3 = () => {
  // Loop through array of numbers. If the number is even, double it. If it is odd, triple it. Save these into a new list and print the result in a nicely formatted way.

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const changed = [];

  // Do loop
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      changed.push(numbers[i] * 2);
    } else {
      changed.push(numbers[i] * 3);
    }
  }

  // Loop through all numbers and print them formatted nicely
  for (let i = 0; i < changed.length; i++) {
    console.log(`Original: ${numbers[i]}, changed: ${changed[i]}`);
  }
};

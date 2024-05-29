function loop1() {
  let fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

const loop2 = () => {
  // Ask for 3 items via a prompt (prompt 3 times inside a single loop) and add the items to an array
  // Print the array to the console one at a time

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

const filter1 = () => {
  // Do filtering using a for loop
  // Keep numbers between 0-5 inclusive
  //
  // Extra Challenges:
  //   - Filter using a while loop
  //   - Animate the result with CSS
  //   - Use the filter function
  //   - Use a foreach loop

  const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log(`Pre filter: ${nums}`);
  const filteredNumbers = numberFilter(nums);
  console.log(`Post filter: ${filteredNumbers}`); // [0, 1, 2, 3, 4, 5]
};

const numberFilter = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0 && numbers[i] <= 5) {
      result.push(numbers[i]);
    }
  }
  return result;
};

const filter2 = () => {
  // Use a single prompt, ask for a list of numbers
  // Split numbers into array
  // Filter out even numbers (keep odd) into a new array
  //    - Use a for loop
  //
  // Extra Challenges:
  //    - Use map to turn the array of strings into numbers
  //    - Use a while loop
  //    - Use the filter function
  //    - Use a foreach loop
  //    - Add the result as a <li> to a list somewhere

  const numberListStr = prompt("Enter comma separated list of numbers");
  const numArray = numberListStr.split(",");
  console.log(`Pre filter: ${numArray}`);

  const odds = [];
  for (let i = 0; i < numArray.length; i++) {
    const num = Number(numArray[i]);
    if (num % 2 !== 0) {
      odds.push(num);
    }
  }

  console.log(`Post filter: ${odds}`); // [<only odd numbers>]
};

const filter3 = () => {
  // Filter out all numbers that aren't between 8-15, but instead of creating a new array, modify the existing array.
  // Do _not_ return anything.
  //
  // Extra Challenges:
  //    - Do it with a for loop
  //    - Put the answer in a <p> tag and make it purple
  //        - Make it glow

  const customNumbersIMadeUpOnTheSpotOrSomething = [
    0, 2, 76, 8, 2, 1, 5, 2, 6, 9, 9, 11, 0, 15, 2, 8, 9,
  ];

  console.log(`Pre filter: ${customNumbersIMadeUpOnTheSpotOrSomething}`);

  // This should not return anything, so don't save it into anything
  filterModifyArray(customNumbersIMadeUpOnTheSpotOrSomething);

  console.log(`Post filter: ${customNumbersIMadeUpOnTheSpotOrSomething}`); // [8, 9, 9, 11, 15, 8, 9]
};

const filterModifyArray = (numbersToFilter) => {
  let i = 0;
  while (i < numbersToFilter.length) {
    if (numbersToFilter[i] < 8 || numbersToFilter[i] > 15) {
      numbersToFilter.splice(i, 1);
    } else {
      i++;
    }
  }
};

const filter4 = () => {
  // Filter out all even numbers using the filter function
  //
  // The examples below start at the bottom and work their way up

  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log(`Pre filter: ${numArray}`);

  // Version 5 from below
  const odds = numArray.filter((num) => num % 2 !== 0);

  console.log(`Post filter: ${odds}`); // [1, 3, 5, 7]

  /*

  Different ways to solve the same thing

  // Version 5 - preferred
  // Simplify the anonymous function to one line
  const odds = numArray.filter((num) => num % 2 !== 0);

  // Version 4
  // Don't have a custom function, instead create an anonymous function inside filter (does the same thing)
  const odds = numArray.filter((num) => {
    return num % 2 !== 0;
  });

  // Version 3
  // Simplifying the custom function
  const isOdd = (num) => {
    return num % 2 !== 0;
  };
  const odds = numArray.filter(idOdd);

  // Version 2
  // Using a custom function with filter
  const isOdd = (num) => {
    if (num % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  };
  const odds = numArray.filter(idOdd);

  // Version 1
  // Original version using a for loop
  const odds = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 !== 0) {
      odds.push(numArray[i]);
    }
  }

  */
};

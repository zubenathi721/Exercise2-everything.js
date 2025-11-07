function sum(n) {
    if (typeof n !== "number" || Number.isNaN(n)) {
        return "The value passed is not a number";
    }
    
    if (n % 1 !== 0) {
        return "Please provide an integer value";
    }
    if (n < 0) {
        return 0;
    }
    return (n * (n + 1)) / 2;
}

console.log(sum(5));      
console.log(sum(0));     
console.log(sum(-3));    
console.log(sum('hello'));
console.log(sum(3.5));  


function factorial(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return "The value passed is not a number";
  }
  if (n % 1 !== 0 || n < 0) {
    return "Please provide a non-negative integer";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  console.log(result);
  return result;
}


factorial(4); 
console.log(factorial(0));
console.log(factorial(5)); 
console.log(factorial(3.2)); 
console.log(factorial('a'));

function funkyMath(...args) {
  const len = args.length;
for (let i = 0; i < len; i++) {
    if (typeof args[i] !== 'number' || Number.isNaN(args[i])) {
      return "All arguments must be numbers";
    }
  }

  if (len === 2) {
    const [a, b] = args;
    return b - a;
  } else if (len === 3) {
    const [a, b, c] = args;
    return a + b + c;
  } else if (len === 4) {
    const [a, b, c, d] = args;

    const denom = c + d;
    if (denom === 0) {
      return "Division by zero error";
    }
    return (a + b) / denom;
  } else {
    return "funkyMath only supports 2, 3 or 4 numeric arguments";
  }
}

console.log(funkyMath(2, 8));      
console.log(funkyMath(1, 2, 3));    
console.log(funkyMath(8, 2, 3, 5)); 
console.log(funkyMath(1));           
console.log(funkyMath(1, 'a'));      


const arr = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];
const evens = []; 
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (num % 2 !== 0) {
    
    oddNumbers.push(num);
  } else {
    evens.push(num);
  }
}
oddNumbers.sort((a, b) => a - b);
console.log('Original array:', arr);
console.log('Odd numbers (sorted):', oddNumbers); 
console.log('Even numbers:', evens); 


const me = {
  firstName: "Zubenathi",
  lastName: "Ncobo",
  age: 21, 
  favouriteColour: "Black",
  dreamCar: "Range Rover"
};
console.log('Before:', me);

me.favouriteFood = "Fish and chips"; 
console.log('After adding favouriteFood:', me);
delete me.age;
console.log('After deleting age:', me);






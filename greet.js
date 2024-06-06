// Q1
function convertArrayToUppercase(arr) {
  return arr.map(str => str.toUpperCase());
}
const string = ["hello", "world"];
const uppercaseString = convertArrayToUppercase(string);

console.log(uppercaseString);


// Q2
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); 


// Q3
function removeEmptyStrings(arr) {
  return arr.filter(str => str !== "");
}
const strings = ["hello", "world", "", "javascript", ];
const nonEmptyStrings = removeEmptyStrings(strings);
console.log(nonEmptyStrings);   

// // Q4
const concatenateWords = (words) => {
  return words.reduce((accumulator, currentWord) => {
    return accumulator + (accumulator ? ' ' : '') + currentWord;
  }, '');
};

const words = ["hello", "world", "javascript"];
const result = concatenateWords(words);
console.log(result); 

// Q5
const array = [4, 'hello', 3, true, 'Uki', 5];

const sumOfSquares = array.reduce((acc, val) => 
{
  if (typeof val === 'number') 
  {
    return acc + val * val;
  }
  return acc;
}, 0);

console.log(sumOfSquares); 


// Q6
function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--)
 {
    reversedArr.push(arr[i]);
  }
  
  return reversedArr;
}


const originalArray = [4, 'hello', 3, true, 'Uki', 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);

// Q7
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}
const person = createPerson('John', 25);
person.greet(); 

// Q8
function getHighGrades(students) 
{
  return students
    .filter(student => student.grade > 80)
    .map(student => student.name);
}

const students = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 70 },
  { name: 'Charlie', grade: 85 }
];

const highGradeStudents = getHighGrades(students);
console.log(highGradeStudents); 

// Q10
function checkIfAdult(age) 
{
  if (age >= 18) {
    console.log("Adult");
  }
}

const age = 25;
checkIfAdult(age); 

// Q11
function checkIfPassing(score)
 {
  if (score >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

const score = 75;
checkIfPassing(score); 

// Q12
function categorizeGrade(grade) {
  if (grade >= 90) {
    console.log("Excellent");
  } else if (grade >= 75) {
    console.log("Good");
  } else if (grade >= 50) {
    console.log("Average");
  } else {
    console.log("Poor");
  }
}

const grade = 90;
categorizeGrade(grade); 


// Q13
function addTask(tasks, newTask) {
  tasks.push(newTask);
  return tasks;
}

const tasks = ['Buy groceries','Clean the houses'];
const newTask = 'Pay bills';
const updatedTasks = addTask(tasks, newTask);
console.log(updatedTasks); 

// Q14
function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (const element of arr1) {
    if (arr2.includes(element)) {
      commonElements.push(element);
    }
  }
  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(array1, array2);
console.log(commonElements);

// Q15
function updateEmployeeRecord(employee, updates)
 {
  for (let key in updates) {
      
      if (updates.hasOwnProperty(key)) 
      {
          employee[key] = updates[key];
      }
  }
  return employee;
}

let employee = {
  name: 'John', 
  position: 'Developer', 
  salary: 50000 
  

};

let updates = {
  position: 'Senior Developer', 
  salary: 60000
  
};

let updatedEmployee = updateEmployeeRecord(employee, updates);
console.log(updatedEmployee);


// Q16
function inventoryValue(products) {
  let totalValue = 0;
  products.forEach(product => 
  {
    
      totalValue += product.price * product.quantity;
  });

  return totalValue;
}

let inventory = [
  { name: 'Laptop', price: 1000, quantity: 5 },
  { name: 'Phone', price: 500, quantity: 10 },
  
];

let totalInventoryValue = inventoryValue(inventory);
console.log(totalInventoryValue);


// Q17
function applyDiscount(price, discountPercentage = 10) {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}
const originalPrice = 100;
const discountedPrice = applyDiscount(originalPrice);
console.log(discountedPrice);


// // Q18
// program to find the factorial of a number
function factorial(x) {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}

// take input from the user
const num = 5

// calling factorial() if num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
}
else {
  console.log('Enter a positive number.');
}



// Q20
function registerUser(usersArray, newUser) {
  const existingUser = usersArray.find(user => user.username === newUser.username);
  if (existingUser) {
    console.log("Username already exists. Cannot register user.");
  } else {
    usersArray.push(newUser);
    console.log("User registered successfully.");
  }
  return usersArray;
}


const users = [
  { username: 'john_doe', email: 'john@example.com' },
  { username: 'alice_smith', email: 'alice@example.com' }
];

const newUser1 = { username: 'john_doe', email: 'johndoe@example.com' };
const newUser2 = { username: 'emma_watson', email: 'emma@example.com' };

const updatedUsers1 = registerUser(users, newUser1);
console.log(updatedUsers1); 

const updatedUsers2 = registerUser(users, newUser2);
console.log(updatedUsers2);


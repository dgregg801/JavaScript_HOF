console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");
//Higher Order Functions either take a function as a parameter, 
//Or they return a function



// Exercise 1 Section
function plus(number) {
    return function (plusNumber) {
        return plusNumber + number;
    }
}

const plus15 = plus(15);
console.log(plus15(10));

//Example
function generateGreeting(greeting) {
    return function (name ){
        return `${greeting}, ${name}`;
    }
}

const greetPerson = generateGreeting("Hello");
console.log(greetPerson);
//Invoke the returned function
console.log(greetPerson("Karen"));




let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

console.log("EXERCISE 2:\n==========\n");
//Exercise 2 Section


  //for each
  users.forEach(function(user) {
    console.log(user.name);
  });

 
 
  console.log("EXERCISE 3:\n==========\n");
  //Exercise 3
  const namesAndScores = users.map(function(user) {
    return {
      name: user.name,
      score: user.score
    };
  });

  console.log(namesAndScores);

  
  
  console.log("EXERCISE 4:\n==========\n");
  //Exercise 4

 // const activeUsers = users.filter(function(user) {
    //return user.isActive === true;
//});

//console.log(activeUsers);

//const filteredUsers = users.filter((element, index, array) => {
  //needs to return true or false
  //meaning keep or discard
  //return element.isActive;
//});

const filteredUsers = users.filter(user => user.isActive);

console.log(filteredUsers);


  
  console.log("EXERCISE 5:\n==========\n");
  //Exercise 5
  
  /*users.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(users);
*/

users.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (a.score < b.score) {
        return 1;
    } else {
        return 0;
    }
});

console.log(users);





console.log("EXERCISE 6:\n==========\n");
  //Exercise 6

  /* const userSum = users.reduce(function(total, user) {
    
    return total + user.score;

  }, 0);

  const userAverage = userSum / users.length;

console.log("Total Score:", userSum);
console.log("User Average", userAverage);
*/

const sum = users.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.score;
}, 0);

console.log(sum);
console.log(sum/users.length);


  

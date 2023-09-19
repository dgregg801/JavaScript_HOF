console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


console.log("EXERCISE 2:\n==========\n");
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

  const activeUsers = users.filter(function(user) {
    return user.isActive === true;
  });
  
  console.log(activeUsers);

  console.log("EXERCISE 5:\n==========\n");
  //Exercise 5
  
  users.sort(function(a, b) {
    return b.score - a.score;
  });

  console.log(users);

  console.log("EXERCISE 6:\n==========\n");
  //Exercise 6

  //let userSum = 0;
  //for (let i = 0; i < users.length; i++) {
    //userSum += [users.score];
  //}
  

  const userSum = users.reduce(function(total, user) {
    
    return total + user.score;

  }, 0);

  const userAverage = userSum / users.length;

console.log("Total Score:", userSum);
console.log("User Average", userAverage);





  

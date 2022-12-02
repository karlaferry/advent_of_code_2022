const fs = require("fs").promises;

const calculateCalories = () => {
  fs.readFile("./input.txt", "utf8").then((data) => {
    const caloriesArray = data.split("\n");
    let highestCalories = 0;
    let currentCalories = 0;
    for (let i = 0; i < caloriesArray.length; i++) {
      if (caloriesArray[i].length === 0) {
        currentCalories = 0;
      } else {
        currentCalories += +caloriesArray[i];
        if (currentCalories > highestCalories)
          highestCalories = currentCalories;
        caloriesArray[i] = currentCalories;
      }
    }
    const sortedCalories = caloriesArray.sort((a, b) => b - a);
    console.log(
      `The highest calorie is ${highestCalories} and the sum of the top 3 is ${
        sortedCalories[0] + sortedCalories[1] + sortedCalories[2]
      }.`
    );
  });
};

console.log(calculateCalories());

const fs = require("fs").promises;

const calculateCalories = () => {
  getMostCalories().then((caloriesArray) => {
    console.log(caloriesArray);
    let highestCalories = 0;
    let currentCalories = 0;
    for (let i = 0; i < caloriesArray.length; i++) {
      if (caloriesArray[i].length === 0) {
        currentCalories = 0;
      }
      currentCalories += +caloriesArray[i];
      if (currentCalories > highestCalories) highestCalories = currentCalories;
    }
    console.log(highestCalories);
    return highestCalories;
  });
};

const getMostCalories = () => {
  return fs.readFile("./input.txt", "utf8").then((data) => {
    const caloriesArray = data.split("\n");
    return caloriesArray;
  });
};

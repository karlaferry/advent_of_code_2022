const fs = require("fs").promises;

const getWinner = () => {
  return fs.readFile("./input.txt", "utf8").then((data) => {
    const array = data.split("\n");
    // const scores = [null, "X", "Y", "Z"];
    // const win = ["A Y", "B Z", "C X"];
    // const lose = ["B X", "C Y", "A Z"];
    const scores = {
      A: [3, 4, 8],
      B: [1, 5, 9],
      C: [2, 6, 7],
    };
    let totalScore = 0;
    array.forEach(function (round) {
      //   totalScore += scores.indexOf(round[2]);
      //   if (win.includes(round)) totalScore += 6;
      //   else if (lose.includes(round)) totalScore += 0;
      //   else totalScore += 3;
      // });
      if (round[2] === "X") totalScore += scores[round[0]][0];
      else if (round[2] === "Y") totalScore += scores[round[0]][1];
      else if (round[2] === "Z") totalScore += scores[round[0]][2];
    });
    return console.log(totalScore);
  });
};

console.log(getWinner());

// a = rock = 1 lose = 3 draw = 4 win = 8
// b = paper = 2 lose = 1 draw = 5 win = 9
// c = scissors = 3 lose = 2 draw = 6 win = 7

// x = lose
// y = draw
// z = win

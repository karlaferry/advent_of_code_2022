const fs = require("fs").promises;

fs.readFile("./input.txt", "utf8").then((data) => {
  const array = data.split("\n");
  const priority = [
    null,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const items = array.map(function (rucksack) {
    const length = rucksack.length;
    const firstHalf = rucksack.substring(0, length / 2);
    const secondHalf = rucksack.substring(length / 2, length + 1);
    let itemType = "";
    for (let i = 0; i < firstHalf.length; i++) {
      for (let j = 0; j < secondHalf.length; j++) {
        if (firstHalf[i] === secondHalf[j]) {
          itemType = firstHalf[i];
        }
      }
    }
    return priority.indexOf(itemType);
  });
  // console.log(items.reduce((a, b) => a + b, 0)); <====== part 1 answer

  const badges = array.map(function (rucksack, i) {
    if (i % 3 !== 0) {
      return 0;
    } else if (i % 3 === 0) {
      const first = array[i];
      const second = array[i + 1];
      const third = array[i + 2];
      for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length; j++) {
          for (let k = 0; k < third.length; k++) {
            if (first[i] === second[j] && second[j] === third[k]) {
              return priority.indexOf(first[i]);
            }
          }
        }
      }
    }
  });
  console.log(badges.reduce((a, b) => a + b, 0)); // part 2 answer
});

const fs = require("fs").promises;

const checker = (arr, target) => target.some((v) => arr.includes(v));

fs.readFile("./input.txt", "utf8").then((data) => {
  let pairCount = 0;
  const pairs = data.split("\n").map(function (pair) {
    const [first, second] = pair.split(",");
    const elfPair = [
      first
        .split("-")
        .map((x) => +x)
        .concat(),
      second.split("-").map((x) => +x),
    ].map(function (singlePair) {
      // console.log(singlePair);
      const count = [];
      for (let i = singlePair[0]; i < singlePair[1] + 1; i++) {
        count.push(i);
      }
      return count;
    });
    if (checker(elfPair[0], elfPair[1]) || checker(elfPair[1], elfPair[0]))
      pairCount++;
  });
  console.log(pairCount);
});

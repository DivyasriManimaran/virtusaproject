const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter words separated by commas: ", (answer) => 
  {
  const words = answer
    .split(",")
    .map((w) => w.trim())
    .filter((w) => w !== "");
  const groups = new Map();

  for (const word of words) 
  {
    const letter = word[0].toLowerCase();
    if (!groups.has(letter)) 
    {
      groups.set(letter, []);
    }
    groups.get(letter).push(word);
  }
  console.log("\nGrouped Words:");
  for (const [letter, list] of groups) 
  {
    console.log(letter + " :", list);
  }
  rl.close();
  });
const readline = require("readline");
function reverseString(text) 
{
  return text.split("").reverse().join("");
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a word or sentence: ", (input) => 
{
  if (input === "") 
  {
    console.log("You didn't type anything!");
  } else 
  {
    console.log("Reversed:", reverseString(input));
  }
  rl.close();
});
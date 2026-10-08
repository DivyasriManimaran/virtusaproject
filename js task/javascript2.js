const readline = require("readline");
function formatDate(date) 
{
  if (!(date instanceof Date) || isNaN(date)) 
  {
    throw new Error("Invalid date");
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function parseInput(text) 
{
  const value = text.trim();
  if (value === "") return new Date();
  const match = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) 
  {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  return new Date(value);
}
const rl = readline.createInterface
({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter a date (or press Enter for today): ", (answer) => 
  {
  try 
  {
    const date = parseInput(answer);
    console.log("Formatted date:", formatDate(date));
  } catch (err) {
    console.log("Error:", err.message, "- please try a format like 2025-01-05");
  }
  rl.close();
});
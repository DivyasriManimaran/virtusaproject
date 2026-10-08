function isPrime(num: number): boolean 
{
  if (num < 2) 
{
    return false;
}
  for (let i = 2; i * i <= num; i++) 
{
    if (num % i === 0) 
    {
      return false;
    }
}
  return true;
}
const num: number = 133;
if (isPrime(num)) 
{
  console.log(`${num} is a prime number.`);
} else 
{
  console.log(`${num} is not a prime number.`);
}
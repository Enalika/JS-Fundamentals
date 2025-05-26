const argument = process.argv.slice(2);
const n = parseInt(argument[0])

function factorial(n) {
if (isNaN(n) || n <= 1) return 1;
return n * factorial(n - 1)
}  
console.log(factorial(n))

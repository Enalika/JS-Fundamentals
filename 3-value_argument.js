const argument = process.argv.slice(2);

console.log(argument[0])
if (argument[0] === undefined)
console.log("No argument")

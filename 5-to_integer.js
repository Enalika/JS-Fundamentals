const argument = process.argv.slice(2);
const MadeNumber = Number(argument[0])

if (!isNaN (MadeNumber)) //isNaN means is not a number. adding ! mean the opposite.
console.log("My number: " + MadeNumber)
else console.log("Not a number")
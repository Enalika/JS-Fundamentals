
const arg = process.argv.slice(2);
const Madeinteger = (arg[0])

if (isNaN(Madeinteger)){ 
console.log("Missing number of occurrences");
} else {
let Displayed ="";
for (let x = 0; x < Madeinteger; x++){ 
Displayed += 'C is fun\n'
}
console.log(Displayed.trim()); 
}
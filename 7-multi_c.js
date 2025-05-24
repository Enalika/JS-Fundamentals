
const arg = process.argv.slice(2);
const x = (arg[0])

if (isNaN(x)){ 
console.log("Missing number of occurrences");
} else {
let Displayed ="";
for (let i = 0; i < x; i++){ 
Displayed += 'C is fun\n'
}
console.log(Displayed.trim()); 
}
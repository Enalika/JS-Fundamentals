
// // const arg = process.argv.slice(2);
// const x = parseInt(arg)

// if (isNaN(x)){ 
// console.log("Missing number of occurrences");
// } else
// let Displayed ="";
// for (let x = 0; x < arg[0]; x++){ 
// Displayed += 'C is fun \n'
// console.log(Displayed.trim()); 
// }
const arg = process.argv.slice(2);
const x = (arg[0]-1)

if (isNaN(parseInt(x))){ 
console.log("Missing number of occurrences");
} else {
let Displayed ="";
for (let x = 0; x < arg[0]; x++){ 
Displayed += 'C is fun\n'
}
console.log(Displayed.trim()); 
}
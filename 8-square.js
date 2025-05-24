const argument = process.argv.slice(2);
const X = parseInt(argument[0])
if (isNaN(X)){
    console.log("Missing size")
} else {
for( let i = 0; i < X; i++){
    console.log('X'.repeat(X))
    }
}
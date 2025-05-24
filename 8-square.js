const argument = process.argv.slice(2);
const x = parseInt(argument[0])
if (isNaN(x))
    console.log("Missing size")
else
for(i = 0; i < x; i++)
    console.log('x'.repeat(x))
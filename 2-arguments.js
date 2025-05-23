const argument = process.argv.slice(2) //we have redefined process.argv to start from position 2 since 0 and 1 alreadly have elements.
// So we are only considering user passed arguments.
/*  argv is argument vector wc means that process.argv ia an array that contains the commandline
arguments passed to the script.
Arguments are anything that you will type in the commandline.  
Example; 2-argument.js is an argument of node in a command on the terminal which looks like below
node 2-argument.js
note that the first 2 arguments in this array are occupied by the node path and the script file
therefore we can start our own from position 2 
*/
if (argument.length === 0)
console.log("No argument");
else if (argument.length === 1)
    console.log("Argument found")
else console.log("Arguments found")
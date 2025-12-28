// script that checks number of command line arguments using pracess.argv
// process.argv[0] = node executable path (ignore)
// process.argv[1] = script path (ignore) 
// process.argv[2+] = actual user arguments we care about

// Count arguments excluding the first 2 elements (node + script)
const argumentCount = process.argv.length - 2;

// Use if-else chain to check exact conditions (using const)
// IMPORTANT: process.argv.length === 2 means 0 user args (just node + script)
if (argumentCount === 0) {
    // No arguments passed → print exactly "No argument"
    console.log("No argument");
} else if (argumentCount === 1) {
    // Exactly 1 argument passed → print exactly "Argument found" 
    console.log("Argument found");
} else {
    // 2+ arguments passed → print exactly "Arguments found"
    console.log("Arguments found");
}

// Test cases this handles perfectly:
// node 2-arguments.js           → argumentCount = 0 → "No argument"
// node 2-arguments.js Best      → argumentCount = 1 → "Argument found"
// node 2-arguments.js Best School → argumentCount = 2 → "Arguments found"
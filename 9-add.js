// Define the required function with the exact prototype
function add(a, b) {
    return a + b;
}

// Get the two arguments and convert them to numbers
const first  = Number(process.argv[2]);
const second = Number(process.argv[3]);

// Print the result of the function call
// If either argument is missing → Number(undefined) = NaN → result = NaN
console.log(add(first, second));
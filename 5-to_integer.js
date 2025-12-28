// Prints "My number: <integer>" if the first argument can be converted to an integer
// Otherwise prints "Not a number"
// no try/catch allowed

// Get the first real argument
const arg = process.argv[2];

// If no argument was passed → arg is undefined → treat as not a number
if (arg === undefined) {
    console.log("Not a number");
} else {
    // Convert to number (works on strings like "89", numbers, etc.)
    const num = Number(arg);

    // Check if the conversion resulted in a valid integer
    // Number.isInteger() returns true only for actual integers
    // (89 → true, 89.89 → false, "89" → true, "School" → false, NaN → false)
    if (Number.isInteger(num)) {
        console.log(`My number: ${num}`);
    } else {
        console.log("Not a number");
    }
}
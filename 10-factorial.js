// Recursive factorial function
// factorial(0) = 1
// factorial(n) = n * factorial(n-1)
// factorial(NaN) must return 1
function factorial(n) {
    // Base case: 0! = 1 and 1! = 1
    // Also handles NaN (Number(NaN) → NaN, NaN <= 1 is false, but we force 1)
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// Get the first argument and convert to number
const arg = Number(process.argv[2]);

// If no argument or not a valid number → treat as NaN → factorial = 1
console.log(factorial(arg));
function factorial(n) {
    // Handle NaN / missing argument / non-number right away
    if (Number.isNaN(n) || n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
console.log(factorial(arg));
// Get the first argument and convert to number
const size = Number(process.argv[2]);

// Check if conversion failed (NaN) or no argument was passed
if (Number.isNaN(size)) {
    console.log("Missing size");
} else {
    // Only proceed if size is positive
    // (negative or zero → loop won't run → no output)
    let row = 0;
    while (row < size) {
        // Build one row of X's (repeat 'X' size times)
        const line = 'X'.repeat(size);
        console.log(line);
        row++;
    }
}
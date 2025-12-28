// Get the first argument and try to convert it to a number
const occurrences = Number(process.argv[2]);

// First console.log: only used for the error case
if (Number.isNaN(occurrences)) {
    console.log("Missing number of occurrences");
} else {
    // Second console.log: used inside the loop to print "C is fun" x times
    let i = 0;
    while (i < occurrences) {
        console.log("C is fun");
        i++;
    }
    // Note: if occurrences <= 0, the loop just doesn't run → no output
}
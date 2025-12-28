// Prints the first argument passed to the script
// or "No argument" if nothing was passed
// Constraints:  no .length allowed

// process.argv[2] is always the first real argument (if it exists)
const firstArg = process.argv[2];

// If firstArg is undefined → no argument was passed
if (firstArg === undefined) {
    console.log("No argument");
} else {
    // Otherwise, print exactly what the user passed as first argument
    console.log(firstArg);
}

// Why this works:
// - When no args: process.argv = [node, script] → index 2 is undefined
// - When args:    process.argv = [node, script, "School", ...] → index 2 = "School"
// - We never use .length or var → fully compliant
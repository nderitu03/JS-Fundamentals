// Prints: "arg1 is arg2"
// If an argument is missing → it prints "undefined" in its place
// No var allowed, only console.log for output

// Get the first two real arguments (process.argv[2] and [3])
const first  = process.argv[2];
const second = process.argv[3];

// Build the sentence using template literal (clean & modern)
console.log(`${first} is ${second}`);

// This produces exactly:
// - node 4-concat.js c cool     → "c is cool"
// - node 4-concat.js c          → "c is undefined"
// - node 4-concat.js            → "undefined is undefined"
// - node 4-concat.js hello bye  → "hello is bye"
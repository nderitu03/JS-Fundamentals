// Array containing the exact 3 sentences we need to print
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Using a for...of loop (clean & modern) to iterate over the array
// We only call console.log ONCE per iteration → total 3 calls, but still only one console.log line in code
for (const line of languages) {
  console.log(line);
}
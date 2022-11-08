// Prompt the user to enter a number greater than 1
// Verify that what the user entered is a number greater than 1, if not prmopt them to re-submit an entry
// Once the entry has been validated to meet the criteria, check to see if the number is a prime number
// Add all prime numbers between 2 and n into an array
// Display the contents of the array to the user

let entry = prompt('Please enter a number greater than 1');
let primeArray = [];
let number = parseInt(entry);
if (number <= 1) {
  alert('You entry is invalid');
  while (number <= 1) {
    number = parseInt(prompt('Please enter a number greater than 1'));
  }
} else if (number > 1) {
  // Count the number of times each number between 2 and n can be divided by all the whole numbers less than them and there be 0 remainder
  // If there are more than 2 instances (other than 1 and the number itself), then that number is not a prime number
  for (let i = 2; i <= number; i++) {
    let counter = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        ++counter;
      }
    }
    if (counter == 2) {
      primeArray.push(i);
    }
  }

  alert(
    'Here are all the prime numbers between 2 and ' + number + ': ' + primeArray
  );
}

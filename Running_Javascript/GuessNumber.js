let max = parseInt(prompt('Enter the maximum number!'));
let attempts = 1;
while (!max) { //사용자가 숫자를 입력했는지 확인
    max = parseInt(prompt('Enter the maximum number!'));
}

const secretNumber = Math.floor((Math.random() * max)) + 1;
console.log(secretNumber);

let guess = prompt("Guess the secret number!");

while (true) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess === secretNumber) {
        console.log(`Correct answer! Total attempts = ${attempts}`);
        break;
    }
    else if (guess < secretNumber) {
        guess = prompt("It's too low. Try again!");
        attempts++;
    }
    else if (guess > secretNumber) {
        guess = prompt("It's too high. Try again!");
        attempts++;
    }
    else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit.");
    }
}
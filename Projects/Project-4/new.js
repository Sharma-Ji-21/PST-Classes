const input = document.getElementById("inp");
let random = Math.floor(Math.random() * 100) + 1;
const submitButton = document.getElementById("Submit");
const restartButton = document.getElementById("resBut");
const message = document.getElementById("msg");
let attempt = 0;
submitButton.disabled = false;

function check() {
    const userGuess = Number(input.value);
    attempt++;

    if (userGuess === random) {
        message.innerHTML = "Congrats! You guessed the correct number!";
        message.style.color = "green";
        submitButton.disabled = true;
        restartButton.style.display = "block";
    } else if (userGuess > random) {
        message.innerHTML = "Your guess is too high!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Your guess is too low!";
        message.style.color = "red";
    }

    document.getElementById("Attempts").innerHTML = attempt;
    input.value = "";
}

restartButton.addEventListener("click", () => {
    attempt = 0;
    random = Math.floor(Math.random() * 100) + 1;
    document.getElementById("Attempts").innerHTML = attempt;
    message.innerHTML = "";
    message.style.color = "";
    input.value = "";
    submitButton.disabled = false;
    restartButton.style.display = "none";
});

console.log("Random number is: " + random);
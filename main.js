// 1. Computer needs to pick a random number
let computerNum = Math.floor(Math.random() * 100) + 1
let guessesRemaining = 3
let history = []
console.log("This is what computer chose", computerNum)

// 2. When user clicks guess, it will start the function "guess"
function guess() {
    // 3. Grab the value that user typed
    let userNum = document.getElementById("guessNumber").value
    let resultMessage = '' // Save the result message

    if(guessesRemaining > 0) {

        // 4. Compare with the value computer picked
        // 5. If computer num > user num, "too low"
        if(computerNum > userNum) {
            resultMessage = "too low"
            guessesRemaining = guessesRemaining - 1 
        }

        // 6. If computer num < user num, "too high"
        else if(computerNum < userNum) {
            resultMessage = "too high"
            guessesRemaining = guessesRemaining - 1  
        }

        // 7. If computer num == user num, "correct"
        else if(computerNum == userNum) {
            resultMessage = "You win"
        }
    }
    
    if(guessesRemaining === 0) {
        resultMessage = "You lose"
    }

    if(resultMessage == "You lose") {
        let button = document.getElementById("guessBtn")
        button.disabled = true
    } else if(resultMessage == "You win") {
        let button = document.getElementById("guessBtn")
        button.disabled = true
    }

    // Keep the history
    history.push(userNum)

    // 8. Display the result
    document.getElementById("resultArea").innerHTML = `${resultMessage}`

    document.getElementById("guessRemainArea").innerHTML = `You have ${guessesRemaining} guesses left`

    document.getElementById("historyArea").innerHTML = `Your past guesses: ${history}`
}

function reset() {
    computerNum = Math.floor(Math.random() * 100) + 1
    guessesRemaining = 3
    history = []
    console.log("This is what computer chose", computerNum)
    document.getElementById("guessNumber").value = '';
    resultMessage = '';
    document.getElementById("resultArea").innerHTML = `Show Result`
    document.getElementById("guessRemainArea").innerHTML = `Show Remaining Amount of Guesses`
    document.getElementById("historyArea").innerHTML = `Show History`
    button = document.getElementById("guessBtn")
    button.disabled = false
}

// 4. Set timer, if you can't complete the game in 30sec then the player loses
// 1. Computer needs to pick a random number
let computerNum = Math.floor(Math.random() * 100) + 1
let guessesRemaining = 5
let history = []
let resulString = ''
console.log("This is what computer chose", computerNum)

let time = 30 // time start from 0
let myTime; // timer will be assign to this variable
function timecounting() {
    myTime = setInterval(() => {
        time --
        document.getElementById('timecount').innerHTML = time
        if(time <= 0) {
            timeOut()
            document.getElementById("guessBtn").disabled = true;
            document.getElementById("resultArea").innerHTML = "The time ran out. You lose :("
            return
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting()// fire the timecounting function!!

function timeOut() {
    clearInterval(myTime);
}

// 2. When user clicks guess, it will start the function "guess"
function guess() {
    // 3. Grab the value that user typed
    let userNum = document.getElementById("guessNumber").value
    let resultMessage = '' // Save the result message

    //if(guessesRemaining > 0) {

        // 4. Compare with the value computer picked
        // 5. If computer num > user num, "too low"
        if(computerNum > userNum) {
            resultMessage = "The numbers guessed is too low..."
            // guessesRemaining = guessesRemaining - 1 
        }

        // 6. If computer num < user num, "too high"
        else if(computerNum < userNum) {
            resultMessage = "The number guessed is too high..."
            // guessesRemaining = guessesRemaining - 1  
        }

        // 7. If computer num == user num, "correct"
        else if(computerNum == userNum) {
            resultMessage = "You win!!!"
        }
    //}

    guessesRemaining--
    if(guessesRemaining <= 0) {
        document.getElementById("guessBtn").disabled = true
        resultMessage = "You lose :("
    }

    if(resultMessage == "You win!!!") {
        document.getElementById("guessBtn").disabled = true
    }

    // if(resultMessage == "You lose :(") {
    //     let button = document.getElementById("guessBtn")
    //     button.disabled = true
    // } else if(resultMessage == "You win!!!") {
    //     let button = document.getElementById("guessBtn")
    //     button.disabled = true
    // }

    // Keep the history
    history.push(userNum)    

    // 8. Display the result
    document.getElementById("resultArea").innerHTML = `${resultMessage}`

    document.getElementById("guessRemainArea").innerHTML = ` ${guessesRemaining} guesses left`

    // document.getElementById("historyArea").innerHTML = `Numbers entered: ${history}`
}

function reset() {
    time = 30
    computerNum = Math.floor(Math.random() * 100) + 1
    guessesRemaining = 5
    history = []
    console.log("This is what computer chose", computerNum)
    
    document.getElementById("timecount").innerHTML = time
    document.getElementById("guessNumber").value = '';
    resultMessage = '';
    document.getElementById("resultArea").innerHTML = `The result will be displayed here`
    document.getElementById("guessRemainArea").innerHTML = `Guess correctly within 5 tries...`
    document.getElementById("historyArea").innerHTML = `Numbers entered:`
    document.getElementById("guessBtn").disabled = false

    timecounting()
}

// 4. Set timer, if you can't complete the game in 30sec then the player loses
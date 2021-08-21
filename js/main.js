const handOptions = {
    "rock": "./assets/Rock.png",
    "paper": "./assets/Paper.png",
    "scissors": "./assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    document.getElementById("userPickImage").src = handOptions[hand];

    let houseHand = pickHouseHand();

    referee(hand, houseHand);
}

const pickHouseHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let houseHand = hands[Math.floor(Math.random() * 3)];

    document.getElementById("housePickImage").src = handOptions[houseHand];

    return houseHand;
}

const referee = (userHand, houseHand) => {
    if (userHand == "paper" && houseHand == "scissors") {
        setResult("YOU LOSE!");
    }
    if (userHand == "paper" && houseHand == "rock") {
        setResult("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "paper" && houseHand == "paper") {
        setResult("It's a tie!");
    }
    if (userHand == "rock" && houseHand == "scissors") {
        setResult("YOU WIN!");
        setScore(SCORE + 1);
    }
    if (userHand == "rock" && houseHand == "paper") {
        setResult("YOU LOSE!");
    }
    if (userHand == "rock" && houseHand == "rock") {
        setResult("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "scissors") {
        setResult("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "rock") {
        setResult("YOU LOSE!");
    }
    if (userHand == "scissors" && houseHand == "paper") {
        setResult("YOU WIN!");
        setScore(SCORE + 1);
    }
}

const setResult = (result) => {
    document.querySelector(".result h1").innerHTML = result;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerHTML = score;
}

const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}
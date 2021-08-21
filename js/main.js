const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];

    pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let houseHand = hands[Math.floor(Math.random() * hands.length)];

    // set computer image 
    document.getElementById("housePickImage").src = handOptions[houseHand]

    referee(hand, houseHand);
};

const referee = (userHand, houseHand) => {
    if (userHand == "paper" && houseHand == "scissors") {
        getResult("YOU LOSE!");
    }
    if (userHand == "paper" && houseHand == "rock") {
        getResult("YOU WIN!");
        setScore(SCORE + 1);
        playConfetti(userHand);
    }
    if (userHand == "paper" && houseHand == "paper") {
        getResult("It's a tie!");
    }
    if (userHand == "rock" && houseHand == "scissors") {
        getResult("YOU WIN!");
        setScore(SCORE + 1);
        playConfetti(userHand);
    }
    if (userHand == "rock" && houseHand == "paper") {
        getResult("YOU LOSE!");
    }
    if (userHand == "rock" && houseHand == "rock") {
        getResult("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "scissors") {
        getResult("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "rock") {
        getResult("YOU LOSE!");
    }
    if (userHand == "scissors" && houseHand == "paper") {
        getResult("YOU WIN!");
        setScore(SCORE + 1);
        playConfetti(userHand);
    }
};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const getResult = (result) => {
    document.querySelector(".result h1").innerText = result;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".score h1").innerText = newScore;
}

const playConfetti = (userHand) => {
    const play = document.querySelector(`.${userHand}`);
    const stop = document.querySelector(".newGame");

    const svgContainer = document.getElementById('svg');
    const animItem = bodymovin.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
    });

    play.addEventListener('click', () => {
        svgContainer.classList.remove('hide');
        animItem.goToAndPlay(0, true);
    })

    stop.addEventListener('click', () => {
        const svg = document.querySelector("svg");
        svg.remove();
    })
}
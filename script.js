const gameContainer = document.getElementsByClassName("game-container")[0];

if (localStorage.getItem("best_score") != null) {
    document.querySelector("#bestScore").innerText = localStorage.getItem("best_score");
} else {
    localStorage.setItem("best_score", "None");
}

const IMAGES = [
    "./gifs/1.gif",
    "./gifs/2.gif",
    "./gifs/3.gif",
    "./gifs/4.gif",
    "./gifs/5.gif",
    "./gifs/6.gif",
    "./gifs/7.gif",
    "./gifs/8.gif",
    "./gifs/1.gif",
    "./gifs/2.gif",
    "./gifs/3.gif",
    "./gifs/4.gif",
    "./gifs/5.gif",
    "./gifs/6.gif",
    "./gifs/7.gif",
    "./gifs/8.gif",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

let shuffledImages = shuffle(IMAGES);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(imageArray) {
    for (let image of imageArray) {
        // create a new div
        const newDiv = document.createElement("div");
        let url = "url(" + image + ")";
        newDiv.style.backgroundImage = url;

        // give it a class attribute for the value we are looping over
        newDiv.classList.add(image);
        newDiv.classList.add("hide");

        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!
let guessCount = 0;
let count = 0;
let firstCard;
let secondCard;
let guessMade = document.querySelector("#guessMade");
let gameOver = 0;
function handleCardClick(event) {
    // you can use event.target to see which element was clicked
    let card = event.target;
    if (card.classList.contains("hide") == false) {
        return;
    }
    if (count < 1) {
        firstCard = event.target;
        firstCard.classList.remove("hide");
        count++;
        guessCount++;
        guessMade.innerText = guessCount;
    } else if (count < 2) {
        secondCard = event.target;
        secondCard.classList.remove("hide");
        count++;
        guessCount++;
        guessMade.innerText = guessCount;

        setTimeout(() => {
            if (firstCard.getAttribute("class") != secondCard.getAttribute("class")) {
                firstCard.classList.add("hide");
                secondCard.classList.add("hide");
                // console.log(firstCard, secondCard);
            } else {
                gameOver += 2;
                if (gameOver == gameContainer.querySelectorAll("div").length) {
                    let score = localStorage.getItem("best_score");
                    if (score > guessCount || score == "None") {
                        document.querySelector("#bestScore").innerText = guessCount;
                        localStorage.setItem("best_score", guessCount);
                    }
                }
            }
            count = 0;
        }, 1 * 1000);
    }
}

let restart = document.querySelector("#restart");
console.log(restart);

restart.addEventListener("click", (event) => {
    location.assign("game.html");
});

// when the DOM loads
createDivsForColors(shuffledImages);

const gameContainer = document.getElementsByClassName("game-container")[0];
// console.log(gameContainer)

const COLORS = ["red", "blue", "green", "orange", "purple", "red", "blue", "green", "orange", "purple"];

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

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
        // create a new div
        const newDiv = document.createElement("div");
        newDiv.style.background = color;

        // give it a class attribute for the value we are looping over
        newDiv.classList.add(color);
        newDiv.classList.add("hide");

        // call a function handleCardClick when a div is clicked on
        newDiv.addEventListener("click", handleCardClick);

        // append the div to the element with an id of game
        gameContainer.append(newDiv);
    }
}

// TODO: Implement this function!

let count = 0;
let firstCard;
let secondCard;
function handleCardClick(event) {
    // you can use event.target to see which element was clicked
    console.log(event.target);
    if (count < 1) {
        firstCard = event.target;
        firstCard.classList.remove("hide");
        count++;
    } else if (count < 2) {
        secondCard = event.target;
        secondCard.classList.remove("hide");
        count++;
        setTimeout(() => {
            if (firstCard.getAttribute("class") != secondCard.getAttribute("class")) {
                firstCard.classList.add("hide");
                secondCard.classList.add("hide");
                console.log(firstCard, secondCard);
            }
            count = 0;
        }, 1 * 1000);
    }
}

// when the DOM loads
createDivsForColors(shuffledColors);

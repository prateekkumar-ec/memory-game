let rows = Math.floor(Math.random() * 4 + 1);
localStorage.setItem("rows", rows);
localStorage.setItem("best_score", 0);

let difficulty_button = document.querySelector(".difficulty span");

difficulty_button.addEventListener("click", open_difficulty_menu);

function open_difficulty_menu(event) {
    let difficulty_menu = document.querySelector(".difficulty-menu");
    let difficulty_button = document.querySelector(".difficulty span");
    let start_button = document.querySelector(".start-button");
    difficulty_menu.classList.remove("noDisplay");
    start_button.classList.add("noDisplay");
    difficulty_button.classList.add("noDisplay");
}

let difficulty_menu = document.querySelector(".difficulty-menu");
difficulty_menu.addEventListener("click", selectDifficulty);

function selectDifficulty(event) {
    if (event.target.innerText == "Easy") {
        localStorage.setItem("rows", 2);
    } else if (event.target.innerText == "Medium") {
        localStorage.setItem("rows", 3);
    } else if (event.target.innerText == "Hard") {
        localStorage.setItem("rows", 4);
    }
    if (event.target.tagName == "LI") {
        let difficulty_menu = document.querySelector(".difficulty-menu");
        let difficulty_button = document.querySelector(".difficulty span");
        let start_button = document.querySelector(".start-button");
        difficulty_menu.classList.add("noDisplay");
        start_button.classList.remove("noDisplay");
        difficulty_button.classList.remove("noDisplay");
    }
}

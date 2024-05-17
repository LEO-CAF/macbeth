function ShowCorrectPageInMenu() {
    let HistoryChildren = HistoryBox.children;
    let VideosChildren = VideosBox.children;
    let ExercisesChildren = ExercisesBox.children;

    HistoryBox.style.visibility = "hidden";
    VideosBox.style.visibility = "hidden";
    ExercisesBox.style.visibility = "hidden";
    for (let child of [...HistoryChildren, ...VideosChildren, ...ExercisesChildren]) {
        child.style.visibility = "hidden";
    }

    switch (currentMenu) {
        case 0:
            HistoryBox.style.visibility = "visible";
            HistoryChildren[currentPage].style.visibility = "visible";
            break;
        case 1:
            VideosBox.style.visibility = "visible";
            VideosChildren[currentPage].style.visibility = "visible";
            break;
        case 2:
            ExercisesBox.style.visibility = "visible";
            ExercisesChildren[currentPage].style.visibility = "visible";
            break;
    }
}

let HistoryBox = document.querySelector("#history");
let VideosBox = document.querySelector("#videos");
let ExercisesBox = document.querySelector("#exercises");

let HistoryButton = document.querySelector("#historyButton");
let VideosButton = document.querySelector("#videosButton");
let ExercisesButton = document.querySelector("#exercisesButton");

let LeftButton = document.querySelector("#leftButton");
let RightButton = document.querySelector("#rightButton");

let currentPage = 0;
let currentMenu = 0;
let pageNumberInMenu = [2, 2, 2];

ShowCorrectPageInMenu();

/* BUTTON */

HistoryButton.addEventListener("click", (e) => {
    HistoryMenu();
});

VideosButton.addEventListener("click", (e) => {
    VideosMenu();
});

ExercisesButton.addEventListener("click", (e) => {
    ExercisesMenu();
});

LeftButton.addEventListener("click", (e) => {
    LeftPage();
});

RightButton.addEventListener("click", (e) => {
    RightPage();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" || event.key === "w") {
        if (currentMenu == 1) {
            HistoryMenu();
        } else if (currentMenu == 2) {
            VideosMenu();
        }
    }
    if (event.key === "ArrowDown" || event.key === "s") {
        if (currentMenu == 0) {
            VideosMenu();
        } else if (currentMenu == 1) {
            ExercisesMenu();
        }
    }
    if (event.key === "ArrowLeft" || event.key === "a") {
        LeftPage();
    }
    if (event.key === "ArrowRight" || event.key === "d") {
        RightPage();
    }
});

function HistoryMenu() {
    currentPage = 0;
    currentMenu = 0;

    ShowCorrectPageInMenu();
}

function VideosMenu() {
    currentPage = 0;
    currentMenu = 1;

    ShowCorrectPageInMenu();
}

function ExercisesMenu() {
    currentPage = 0;
    currentMenu = 2;

    ShowCorrectPageInMenu();
}

function LeftPage() {
    if (currentPage - 1 >= 0) {
        currentPage--;
        ShowCorrectPageInMenu();
    }
}

function RightPage() {
    if (currentPage + 1 <= pageNumberInMenu[currentMenu] - 1) {
        currentPage++;
        ShowCorrectPageInMenu();
    }
}

/* EXERCISES */

import ExercisesData from "/exercises.json" with {type: "json"};

let ExercisesBox1 = document.querySelector("#Box1 .containerBox");
let ExercisesBox2 = document.querySelector("#Box2 .containerBox");

let CorrectButtonType1 = document.querySelector("#Button1");
let CorrectButtonType2 = document.querySelector("#Button2");

let output1 = "";
let output2 = "";

for (let exercise of ExercisesData) {
    switch (exercise.type) {
        case 1:
            output1 += `
                <div class="box" id="n${exercise.id}">
                    <span class="text">${exercise.text1}</span>
                    <input class="input" type="text">
                    <span class="text">${exercise.text2}</span>
                </div>
            `;
            break;
        case 2:
            output2 += `
                <div class="box" id="n${exercise.id}">
                    <span class="text">${exercise.text}</span>
                    <input class="input" type="checkbox">
                </div>
            `;
            break;
    }
}

ExercisesBox1.insertAdjacentHTML(`afterbegin`, output1);
ExercisesBox2.insertAdjacentHTML(`afterbegin`, output2);

CorrectButtonType1.addEventListener("click", (e) => {
    for (let exercise of ExercisesData) {
        if (exercise.type == 1) {
            let box = document.querySelector("#Box1 #n" + exercise.id);
            let answer = box.querySelector(".input");
            if (exercise.solution == answer.value) {
                box.style.backgroundColor = "green";
            } else {
                box.style.backgroundColor = "red";
            }
        }
    }
});

CorrectButtonType2.addEventListener("click", (e) => {
    for (let exercise of ExercisesData) {
        if (exercise.type == 2) {
            let box = document.querySelector("#Box2 #n" + exercise.id);
            let answer = box.querySelector(".input");
            if (exercise.solution == answer.checked) {
                box.style.backgroundColor = "green";
            } else {
                box.style.backgroundColor = "red";
            }
        }
    }
});
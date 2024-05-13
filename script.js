let History = document.querySelector("#history");
let Videos = document.querySelector("#videos");
let Exercises = document.querySelector("#exercises");

History.style.display = "none";
Videos.style.display = "none";
Exercises.style.display = "none";

document.querySelector("#historyButton").addEventListener("click", (e) => {
    History.style.display = "block";
    Videos.style.display = "none";
    Exercises.style.display = "none";
})

document.querySelector("#videosButton").addEventListener("click", (e) => {
    History.style.display = "none";
    Videos.style.display = "block";
    Exercises.style.display = "none";
})

document.querySelector("#exercisesButton").addEventListener("click", (e) => {
    History.style.display = "none";
    Videos.style.display = "none";
    Exercises.style.display = "block";
})
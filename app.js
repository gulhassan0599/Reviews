import users from "./store.js";

const name = document.querySelector("#name");
const img = document.querySelector("#img");
const job = document.querySelector("#job");
const bio = document.querySelector("#bio");

const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".previous");
const randomBtn = document.querySelector(".random");

let currentUser = 0;

window.addEventListener("DOMContentLoaded", () => {
    user(currentUser);
});

function user(index) {
    let user = users[index];
    img.src = user.img;
    name.textContent = user.name;
    job.textContent = user.job;
    bio.textContent = user.bio;

}

nextBtn.addEventListener("click", () => {
    currentUser++;
    if(currentUser >= users.length) {
        currentUser = 0;
    }
    user(currentUser);
});

previousBtn.addEventListener("click", () => {
    currentUser--;
    if(currentUser < 0) {
        currentUser = users.length-1;
    }
    user(currentUser);
});

function randomNumber() {
    return Math.floor(Math.random() * users.length);
}

randomBtn.addEventListener("click", () => {
    user(randomNumber());
});
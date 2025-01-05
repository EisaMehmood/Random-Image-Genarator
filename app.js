alert("Explore Dynamic Backgrounds!");

const img = document.querySelector(".Img-container");
const body = document.querySelector("body");
const prevBtn = document.getElementById("prev");
const randomBtn = document.getElementById("random");
const nextBtn = document.getElementById("next");

const pics = [
    "joey-kyber-Mg2iKRWpiCk-unsplash.jpg",
    "hong-zhao-tRYL6M4hLc0-unsplash.jpg",
    "zach-lezniewicz-E4IDq9NfFYY-unsplash.jpg",
    "jennifer-kalenberg-aTPBjbKTtYc-unsplash.jpg",
    "jimmy-whitson-_OrhcXbyS-A-unsplash.jpg",
    "lhon-karwan-zBw3WrkJlfw-unsplash.jpg"
];

let currentIndex = 0;

function updateBackground(index) {
    const randomPic = pics[index];
    img.style.backgroundImage = `url(${randomPic})`;
    body.style.backgroundImage = `url(${randomPic})`;
}

// Random Button
randomBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * pics.length);
    updateBackground(currentIndex);
});

// Next Button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % pics.length;
    updateBackground(currentIndex);
});

// Previous Button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + pics.length) % pics.length;
    updateBackground(currentIndex);
});

// Container Click
img.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * pics.length);
    updateBackground(currentIndex);
});

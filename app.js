alert("Click Center Image to change Background")
const img =document.querySelector(".Img-container");
const body = document.querySelector("body");
const  pics = [
    "joey-kyber-Mg2iKRWpiCk-unsplash.jpg",
    "hong-zhao-tRYL6M4hLc0-unsplash.jpg",
    "joey-kyber-Mg2iKRWpiCk-unsplash.jpg",
    "zach-lezniewicz-E4IDq9NfFYY-unsplash.jpg",
    "jennifer-kalenberg-aTPBjbKTtYc-unsplash.jpg",
    "jimmy-whitson-_OrhcXbyS-A-unsplash.jpg",
    "lhon-karwan-zBw3WrkJlfw-unsplash.jpg",
    "zach-lezniewicz-E4IDq9NfFYY-unsplash.jpg"
]
body,img.addEventListener("mouseover", () => {
    const randomPic = pics[Math.floor(Math.random() * pics.length)];
    img.style.backgroundImage = `url(${randomPic})`;
    body.style.backgroundImage = `url(${randomPic})`;
});

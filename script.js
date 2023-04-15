//CAROSELCAROSELCAROSELCAROSELCAROSELCAROSELCAROSEL
const images = [
  'assets/cover1.png',
  'assets/cover2.png',
  'assets/cover3.png',
];

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  imageElement.src = images[currentIndex];
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  imageElement.src = images[currentIndex];
});



//ZINEREVEALZINEREVEALZINEREVEALZINEREVEALZINEREVEAL
function showContent(contentId) {
  var content = document.getElementById(contentId);
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

let currentSlideIndex = 0;

const slides = document.getElementsByClassName("carousel-slide");
const dots = document.getElementsByClassName("dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showSlide(index) {
  if (index >= slides.length) currentSlideIndex = 0;
  if (index < 0) currentSlideIndex = slides.length - 1;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active dot class
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }

  // Show current slide + dot
  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].className += " dot-active";
}

// Buttons
prevBtn.addEventListener("click", () => {
  currentSlideIndex--;
  showSlide(currentSlideIndex);
});

nextBtn.addEventListener("click", () => {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
});

// Dot click
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    currentSlideIndex = i;
    showSlide(currentSlideIndex);
  });
}

// Show first slide
showSlide(currentSlideIndex);

// ⭐ Auto slide every 3 seconds
setInterval(() => {
  currentSlideIndex++;
  showSlide(currentSlideIndex);
}, 3000);

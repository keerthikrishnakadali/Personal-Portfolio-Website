// Typing effect
const typeTarget = document.getElementById("type-target");
const words = ["Aspiring Software Developer", "Web Enthusiast", "ECE Student"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  if (isDeleting) {
    typeTarget.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typeTarget.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 150);
}
typeEffect();

// AOS animations
AOS.init({
  duration: 1200,
  once: true,
});

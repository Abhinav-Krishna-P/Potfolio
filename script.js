document.getElementById('year').textContent = new Date().getFullYear();

// Wordmark Typewriter Animation
document.addEventListener("DOMContentLoaded", () => {
  const wordmarkText = document.querySelector(".wordmark-text");
  if (wordmarkText) {
    const fullText = "Abhinav Krishna P.";
    wordmarkText.textContent = "";
    let index = 0;
    function typeNextChar() {
      if (index < fullText.length) {
        wordmarkText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeNextChar, 80 + Math.random() * 40);
      }
    }
    setTimeout(typeNextChar, 300);
  }
});

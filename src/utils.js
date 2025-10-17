
// const textEl = document.getElementById("typing-text");
// const cursorEl = document.getElementById("cursor");

export default function typingTextAni(textEl, cursorEl) {
  const phrases = [
    "Android Developer",
    "Java | Shell | Gradle knowledge",
    "Self taught",
    "Front end website designer",
    "Adapting new programming languages",
    "Open Source project Developer"
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    const visibleText = currentPhrase.substring(0, letterIndex);
    textEl.textContent = visibleText;
    
    if (!isDeleting && letterIndex < currentPhrase.length) {
      letterIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && letterIndex > 0) {
      letterIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      setTimeout(type, isDeleting ? 800 : 1200);
  
      if (!isDeleting) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
  }
  type();
  setInterval(() => {
      cursorEl.style.opacity = cursorEl.style.opacity === "0" ? "1" : "0";
  }, 500);
}

AOS.init();
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
                observer.unobserve(progressBar); 
            }
        });
    }, {
        threshold: 0.6 
    });

    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => observer.observe(bar));
});






const textElement = document.getElementById('name_text');

const phrases = [ 'WAJEEHA BATOOL'];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;

function type() {
  
  const currentPhrase = phrases[currentPhraseIndex];
  
  textElement.textContent = currentPhrase.substring(0, currentLetterIndex);

  
  if (currentLetterIndex < currentPhrase.length) {
   
    currentLetterIndex++;
    setTimeout(type, 200); 
  } else {
    
    setTimeout(() => {
      currentLetterIndex = 0; 
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; 
      type();
    }, 1000); 
  }
}

type();


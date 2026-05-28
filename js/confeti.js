const button = document.querySelector('#toggle');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click',() =>{
    jsConfetti.addConfetti({
        confettiColors: [
          '#959D68', '#F8F9F5', '#F9F0E4', '#F7DEBF', '#D6E5C7', '#E8EADF',
        ],
      })
})
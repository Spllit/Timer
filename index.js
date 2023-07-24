const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
   const countDown =  setInterval(() => {
    if(seconds <= 0) clearInterval(countDown)
      let hours = Math.floor(seconds/60/60%60)
      let minutes = Math.floor(seconds/60%60)
      let leftSeconds = Math.floor(seconds%60)
      timerEl.innerHTML = `${hours} : ${minutes} : ${leftSeconds}`
      seconds--
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', function(){
  this.value = this.value.replace(/[^0-9.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
// Имеется баг параллельного запуска нескольких SetInterval. Не удалось добиться удаления setInterval при повторном запуске функции
const animationTime = 5;

const progressBar = document.querySelector('#progress-bar');
const progressTime = document.querySelector('.progress-time');
window.onload = () => {
  function progress(time) {
    progressBar.style.transition = `transform linear ${time}s`;
    progressBar.style.transform = 'scaleX(1)';
    console.log(time);
  }

  progress(animationTime)

  let count = 0;
  progressTime.textContent = `${count} с`
  const timeInterval = setInterval(() => {
    ++count
    progressTime.textContent = `${count} с`
  }, 1000);

  setTimeout(() => {
    clearInterval(timeInterval)
  }, animationTime * 1000);
}
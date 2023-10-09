
// ------ Light/Dark Mode ------
const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode(){
    body.classList.toggle('light-mode');

    const modeMessage = body.classList.contains('light-mode') ? 'Light Mode' : "Dark Mode"

    modeStatus.innerText = "Currently in " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);



// ------ Slide ------
const items = document.querySelectorAll('.item');

const options = {
  threshold: 0.4
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})
const toggleBtn = document.querySelector('.nav-toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});
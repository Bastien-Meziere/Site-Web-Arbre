const moonBtn = document.getElementById("moonBtn");
const sunBtn = document.getElementById("sunBtn");
const themeBtn = document.getElementById("themeBtn");
const bodyEl = document.getElementsByTagName("body")[0];

themeBtn.addEventListener('click', () => {
    bodyEl.classList.toggle("dark");
    moonBtn.classList.toggle('invisible');
    moonBtn.classList.toggle('dnone');
    sunBtn.classList.toggle('invisible');
    sunBtn.classList.toggle('dnone');
})
const soda = document.getElementById('soda');

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

const cheese = document.getElementById('cheese');

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});
const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

//soda.addEventListener('drag', () => {
    //soda.classList.add('picked');
//});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');
});

watermelon.addEventListener('click', () => {
    watermelon.classList.toggle('picked');
});

const button = document.getElementById('button');

button.addEventListener('click', () => {
    soda.classList.remove('picked');
    cheese.classList.remove('picked');
    grapes.classList.remove('picked');
    bread.classList.remove('picked');
    watermelon.classList.remove('picked');

    const randomItem = Math.ceil(Math.random() * 5);
    if (randomItem === 1) {
        soda.classList.add('picked');
    } else if (randomItem === 2) {
        cheese.classList.add('picked');
    } else if (randomItem === 3) {
        grapes.classList.add('picked');
    } else if (randomItem === 4) {
        bread.classList.add('picked');
    } else {
        watermelon.classList.add('picked');
    }
});
let intervalTime = 150;

setInterval(() => {
    const colors = [
        'royalblue',
        'green',
        'lightgreen',
        'yellow',
        'red',
        'white',
        'blue',
        'cyan',
        'orange',
        'salmon',
        'violet',
        'yellowgreen',
        'tomato'
    ]

    const cs = document.querySelector('.welcome');
    const square = document.createElement('span');

    const bg = colors[Math.floor(Math.random() * colors.length)];

    var size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size +'px';

    square.style.top = Math.random() * 90 + '%';
    square.style.left = Math.random() * 80 + '%';
    square.style.background = bg;

    cs.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);
}, intervalTime);

setTimeout(() => {
    const cs = document.querySelector('.welcome');
    cs.style.display = 'none';
}, 5500);

setTimeout(() => {
    const cs = document.querySelector('.welcome');
    cs.remove();
    const mp = document.querySelector('.main-home-page');
    mp.style = 'pointer-events: all';
    mp.style.opacity = 1;
}, 6400);

setTimeout(() => {
    const para = document.querySelector('.home-page .main-home-page header');
    para.style.opacity = '1';
}, 7400);

setTimeout(() => {
    const welcomeAnim = document.querySelector('.welcome-anim');
    welcomeAnim.style.width = '100%';
}, 5000);

const hamburger = document.querySelector('.home-page .main-home-page nav .hamburger');
const navbar = document.querySelector('.home-page .main-home-page nav ul');
const cross = document.querySelector('.home-page .main-home-page nav ul .cross');

hamburger.addEventListener('click', () => {
    navbar.style.display = 'flex';
    navbar.style.width = '100vw';
    navbar.style.animation = 'navSlide 0.5s linear';
    setTimeout(() => {
        navbar.style.left = '0vw';
        navbar.style.position = 'fixed';
        cross.innerHTML = 'X';
    },500);
})

cross.addEventListener('click', () => {
    navbar.style.animation = 'navSlideOut 0.5s linear';
    setTimeout(() => {
        navbar.style.left = '100vw';
        navbar.style.position = 'absolute';
        cross.innerHTML = '';
        navbar.style.width = '0';
        navbar.style.display = 'none';
    },500);
});
setTimeout(() => {
    const page = document.querySelector('.product-page');
    page.style = 'pointer-events: all;';
    page.style.opacity = '1';
}, 1400);

setTimeout(() => {
    const header = document.querySelector('.product-page header');
    header.style.opacity = '1';
}, 2400);

const hamburger = document.querySelector('.product-page nav .hamburger');
const navbar = document.querySelector('.product-page nav ul');
const cross = document.querySelector('.product-page nav ul .cross');

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
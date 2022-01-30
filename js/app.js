// baad az click nav-active baaz ya baste  beshe
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');


    burger.addEventListener('click', () => {
        // toggle nav
        nav.classList.toggle('nav-active');

        // toggle burger
        burger.classList.toggle('burger-toggle');

    });
}
// call the function
navSlide();

// bootstrap slider


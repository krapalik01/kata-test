let swiper1 = new Swiper(".mySwiper-cards", {
    spaceBetween: -64,
    pagination: {
    el: ".mySwiper__pagination",
    clickable: true,
},
mausewhell: true,
keyboard: true,
});
let swiper2 = new Swiper(".mySwiper-repair", {
    spaceBetween: -80,
    pagination: {
    el: ".mySwiper__pagination",
    clickable: true,
},
mausewhell: true,
keyboard: true,
});
let swiper3 = new Swiper(".mySwiper-service", {
    spaceBetween: -44,
    pagination: {
    el: ".mySwiper__pagination",
    clickable: true,
},
mausewhell: true,
keyboard: true,
});

const button1 = document.getElementById('slide-active-1')
const button2 = document.getElementById('slide-active-2')

button1.onclick = function() {
    const elements = document.getElementById('card-active-1');
    const img = document.getElementById('img-1')
    const text = document.getElementById('text-1')

        elements.classList.toggle('cards_active')
    img.classList.toggle('slide-button__img_active')
    if (img.classList.contains('slide-button__img_active')) {
        text.textContent = 'Скрыть' 
    } else {
        text.textContent = 'Показать всё' 
    }
};

button2.onclick = function() {
    const elements = document.getElementById('card-active-2');
    const img = document.getElementById('img-2')
    const text = document.getElementById('text-2')
    
        elements.classList.toggle('cards_active')
    img.classList.toggle('slide-button__img_active')
    if (img.classList.contains('slide-button__img_active')) {
        text.textContent = 'Скрыть' 
    } else {
        text.textContent = 'Показать всё' 
    }
};

const textMore = document.getElementById('textMore')
const buttonMore = document.querySelector('.expand-button')
const imgMore = document.querySelector('.expand-button__img')

buttonMore.addEventListener('click', function () {
    const elements = document.getElementById('text-active')
    elements.classList.toggle('text-act')
    imgMore.classList.toggle('expand-button__img_active')
    if (imgMore.classList.contains('expand-button__img_active')) {
        textMore.textContent = 'Скрыть' 
    } else {
        textMore.textContent = 'Читать далее' 
    }
})

const burgerButton = document.getElementById('burgerButton')
const burger = document.getElementById('burger')
const burgerMenu = document.querySelector('.burgerMenu')

burgerButton.onclick = function() {
        (burgerButton.classList.contains('header__icon--burger')) 
        burgerButton.classList.remove('header__icon--burger')
        burgerButton.classList.add('burger-icon--openBurger')
        burgerMenu.classList.add('burgerMenu_active')
}
burger.onclick = function() {
        burgerButton.classList.remove('burger-icon--openBurger')
        burgerButton.classList.add('header__icon--burger')
        burgerMenu.classList.remove('burgerMenu_active')
}
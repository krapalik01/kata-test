let swiper = new Swiper(".mySwiper", {
    spaceBetween: -64,
    pagination: {
    el: ".mySwiper__pagination",
},
mausewhell: true,
keyboard: true,
});


const img1 = document.querySelector('.cards-button__img_768px')
const img2 = document.querySelector('.cards-button__img_1120px')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const button = document.querySelector('.cards-button_1120px')


document.querySelector('.cards-button').onclick = function() {
    const elements = document.querySelectorAll('.firstHiden');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = elements[i].style.display === 'block' ? 'none' : 'block';
    };
    img1.classList.toggle('cards-button__img_active')
    
    if (img1.classList.contains('cards-button__img_active')) {
        text1.textContent = 'Скрыть' 
    } else {
        text1.textContent = 'Показать всё' 
    }
};

button.onclick = function() {
    const elements = document.querySelectorAll('.secondHiden');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = elements[i].style.display === 'block' ? 'none' : 'block';
    };
    img2.classList.toggle('cards-button__img_active')
    
    if (img2.classList.contains('cards-button__img_active')) {
        text2.textContent = 'Скрыть' 
    } else {
        text2.textContent = 'Показать всё' 
    }
};
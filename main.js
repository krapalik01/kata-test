let swiper = new Swiper(".mySwiper", {
    spaceBetween: -64,
    pagination: {
    el: ".mySwiper__pagination",
    clickable: true,
},
mausewhell: true,
keyboard: true,
});


const img = document.querySelector('.slide-button__img')
const text = document.getElementById('text')
const button1 = document.querySelector('.slide-button')


button1.onclick = function() {
    const elements = document.getElementById('active');
        elements.classList.toggle('cards_active')
    img.classList.toggle('slide-button__img_active')
    if (img.classList.contains('slide-button__img_active')) {
        text.textContent = 'Скрыть' 
    } else {
        text.textContent = 'Показать всё' 
    }
};
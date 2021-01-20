$('.reviews__slider').slick({
    arrows: false,
    dots: true,
});

let system = document.querySelector('.burger__menu');
let program = document.querySelector('.nav');

system.addEventListener('click', function () {
 system.classList.toggle("is-active");
 program.classList.toggle("is-active");
});
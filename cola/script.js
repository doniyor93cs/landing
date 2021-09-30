$(document).ready(function () {
    $('.burger').click(function () {
        $('ul').toggleClass('show');
    });
})

function imgSlider(anything) {
    document.querySelector('.cola').src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector('.content');
    sec.style.background = color;
}

function changeColor(color) {
    const sec = document.querySelector('.content__span');
    sec.style.color = color;
}
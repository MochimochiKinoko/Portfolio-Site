
document.addEventListener('DOMContentLoaded', function() {
    var nav4 = document.querySelector('#hamburger');

    nav4.addEventListener('click', function() {
        nav4.classList.toggle('open');

        var nav = document.querySelector('.main-nav');
        nav.classList.toggle('active');
    });
});
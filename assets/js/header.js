function scrolltoSection(id) {
    var target = document.getElementById(id);
    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    var nav = document.querySelector('.main-nav');
    nav.classList.remove('active');
    var nav4 = document.querySelector('#hamburger');
    nav4.classList.remove('open');
}
function scrolltoSection(id) {
    var target = document.getElementById(id);
    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
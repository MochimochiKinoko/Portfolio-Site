
// Get the modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal_img");
const captionText = document.getElementById("caption");

// Get all images and insert the clicked image inside the modal
let images = document.querySelectorAll('.image-grid img');
images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = image.src;
        captionText.innerHTML = image.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
});

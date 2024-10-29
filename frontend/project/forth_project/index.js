const images = document.querySelectorAll("#slider img");
let currentImage = 0;
function showImage() {
  images[currentImage].classList.remove("active");
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add("active");
}

setInterval(showImage, 1000);

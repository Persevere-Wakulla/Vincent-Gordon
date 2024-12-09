let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(index) {
  showSlides(slideIndex += index);
}

function currentSlide(index) {
  showSlides(slideIndex = index);
}

function showSlides(index) {
    let i= 1;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (index > slides.length) {slideIndex = 1}
    if (index < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
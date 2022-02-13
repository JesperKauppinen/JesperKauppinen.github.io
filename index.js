// toggle button display between block and none
// and toggle folding symbol
function toggle(parent) {

    // TODO: check if those elements exist before trying to change them to prevent errors.

    // Get list element
    const sibling = parent.nextElementSibling;
    // Get →/↓ symbol element
    const child = parent.children;

    // If folding element is closed ( →)
    // display list element and change folding symbol to open
    if (child[0].innerHTML == " →") {
        sibling.style.display = "block";
        child[0].innerHTML = " ↓";
    }
    // If folding symbol is not closed
    // close symbol and hide list
    else {
        sibling.style.display = "none";
        child[0].innerHTML = " →";
    }
}




var slideIndex = 1;
setTimeout(`showSlides(slideIndex);`, 10)


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
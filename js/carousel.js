// Code from https://www.w3schools.com/w3css/w3css_slideshow.asp

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("carousel-img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.opacity = "0.3";
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.opacity = "1";
}

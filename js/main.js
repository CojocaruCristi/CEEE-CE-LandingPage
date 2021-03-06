let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      375:{
        items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      },
      1080:{
        items:2
      },
      1360:{
        items:3
      },
      1440:{
        items:3
      },
      1680:{
        items:3 
      },
      1920:{
        items:4
      }


  }
  });
});
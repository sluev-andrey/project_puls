$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    slidesToShow: 1,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_right.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_left.svg" alt=""></button>',

  });
});

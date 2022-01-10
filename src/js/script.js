$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    slidesToShow: 1,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_right.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_left.svg" alt=""></button>',
  });


  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
    $(this)
      .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
  });

  $('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active')
    })
  });

  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active')
    })
  })

});



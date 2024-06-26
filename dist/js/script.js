$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_right.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_left.svg" alt=""></button>',
  });

  //tabs block

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
    $(this)
      .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active')
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  $('.button-mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  // validate jqeury

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Введите свое имя",
        phone: "Введите свой номер телефона",
        email: {
          required: "Введите свой почту",
          email: "Неправильно введен адресс почты"
        }
      }
    });
  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  //mask phone//

  $('input[name=phone]').mask("+7(999) 999-99-99");

  //shipment form//

  $('form').submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    };
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  //smooth scroll

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup__link').fadeIn();
    } else {
      $('.pageup__link').fadeOut();
    }
  });

  //Smooth Scroll

  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  //wow jqery
  new WOW().init();
});



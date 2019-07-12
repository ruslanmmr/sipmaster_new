$(document).ready(function () {
  lazy();
  reviews();
  nav();
  home();
  $(".input_phone").mask("(999) 999-99-99");
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global variables
var innerWidth = $('body').innerWidth();

//nav
function nav() {
  var $navButton = $('.nav-open'),
    $navClose = $('.nav__close'),
    $nav = $('.header__nav'),
    $page = $('.wrapper__container'),
    $overlay = $('.overlay')

  $navButton.on('click', function (e) {
    e.preventDefault();
    $nav.toggleClass('header__content_visible');
    navState();
  })
  $navClose.on('click', function () {
    $nav.removeClass('header__content_visible');
    navState();
  })
  $overlay.on('click touchstart', function () {
    $nav.removeClass('header__content_visible');
    navState();
  })
  
  function navState() {
    if ($nav.hasClass('header__content_visible')) {
      scrollLock.hide($("body"));
      $page.addClass('active');
      $overlay.fadeIn(300);
    } else {
      scrollLock.show($("body"));
      $page.removeClass('active');
      $overlay.fadeOut(300);
    }
  }
  $(window).resize(function () {
    if (innerWidth > 992) {
      $nav.removeClass('header__content_visible');
      navState();
    }
  });
}
//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: false,
    threshold: '500',
    effect: 'fadeIn',
    effectTime: '300'
  });
}
//clients
function home() {
  var $slider = $('.home .banner'),
      prevArrow = $slider.parents('.slider').find('.slider-button_prev'),
      nextArrow = $slider.parents('.slider').find('.slider-button_next');

  $slider.on('init reInit afterChange', function(){
    lazy();
  })

  $slider.slick({
    infinite: true,
    dots: false,
    arrows: true,
    fade: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });
}
//reviews
function reviews() {
  var $slider = $('.reviews__slider'),
      prevArrow = $slider.parents('.slider').find('.slider-button_prev'),
      nextArrow = $slider.parents('.slider').find('.slider-button_next');

  $slider.on('init reInit afterChange', function(){
    lazy();
  })

  $slider.slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
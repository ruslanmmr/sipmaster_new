$(document).ready(function () {
  lazy();
  autoBlockHeight();
  checkboxes();
  cover();
  nav();
  home();
  $(".input_phone").mask("+7 (999) 999-99-99");
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global variables
var innerWidth = $('body').innerWidth();

//image-cover-box
function cover() {
  $('.cover-box').each(function() {
    //set size
    var th = $(this).height(),//box height
        tw = $(this).width(),//box width
        im = $(this).children('img'),//image
        ih = im.height(),
        iw = im.width();
    if ((tw/th) >= (iw/ih)) {
        im.addClass('ww').removeClass('wh');
    } else {
        im.addClass('wh').removeClass('ww');
    }
  });
}
//checkboxes
function checkboxes() {
  $('.checkbox__label').on('click', function() {
    if ($(this).find('input').is(':checked')) {
      $(this).addClass('checkbox__label_checked');
    } else {
      $(this).removeClass('checkbox__label_checked');
    }
  })
}
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
    //threshold: '500',
    effect: 'fadeIn',
    effectTime: '300',
    afterLoad: function() {
      cover();
    }
  });
}
//blocks
function autoBlockHeight() {
  resize();
  $(window).resize(function () {
    resize();
  });

  function resize() {
    var mh = 0,
    $block = $(".project-block__container");

    $block.css('height', 'auto');
    $block.each(function () {
      var h_block = parseInt($(this).height());
      if(h_block > mh) {
        mh = h_block;
      };
    });
    $block.height(mh);
  }
}
//clients
function home() {
  var $slider = $('.home-slider'),
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
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });
}
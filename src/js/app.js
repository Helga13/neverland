$(document).ready(function () {
  'use strict'
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
      });
    });
  });
  
  // slider
  
  $('.js-slick').slick({
    dots: true,
//    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
//    responsive: [
//      {
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 3,
//          infinite: true,
//          dots: true
//        }
//      },
//      {
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2
//        }
//      },
//      {
//        breakpoint: 480,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1
//        }
//      }
//    ]
  });
  
  $('.js-select').selectbox();
  
  
  
  
  
  
})
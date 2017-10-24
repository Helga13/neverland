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
  
  // product slider with thumbs

  $('.show_image').click(function (e) {
    e.preventDefault();
    var mainImage = $(this).index();
    $('.show_image').removeClass('active');
    $(this).addClass('active');
    $('.main_image li').removeClass('active').eq(mainImage).addClass('active');
  });
  
// calc
  
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
  // popup
  
   $('.js-popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).fadeIn(100);
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).fadeOut(100);
            $('body').css('overflow', 'auto'); 
        }
    });
	$('.popup_close').click(function (e) {
         e.preventDefault();
           $(this).parents('.popup').fadeOut(100);
           $('body').css('overflow', 'auto'); 
    });
    $('.popup_content').click(function(e) {
		e.stopPropagation();
	}); 
  
})
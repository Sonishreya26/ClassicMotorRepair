

$(document).ready(function() {

    "use strict";


if ($('.scrollreveal').length) {
    window.sr = ScrollReveal({
        reset:true,
        duration: 1000,
        delay: 200
    });

    sr.reveal('.scrollreveal');
  }


  if ($('.img-scale').length) {
    $(function () { objectFitImages('.img-scale') });
  }

  $('.btns-switch__item').on( 'click', function() {
    $('.btns-switch').find('.active').removeClass('active');
    $( this ).addClass('active');
  });

  $('.flip-btn').on( 'click', function() {
    $( this ).parent().toggleClass('flip-active');
  });


  $('.flip-btn-hide').on( 'click', function() {
    $(this).parents('.b-goods').removeClass('flip-active');
  });



});

/*Rent*/
var forma = $(".b-booking-main");
forma.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); }
});

forma.children(".vobla").steps({
    headerTag: "h2",
    bodyTag: ".b-booking-main__section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
      
        return forma.valid();
    },
    onFinishing: function (event, currentIndex)
    {
return forma.valid();
    },
    onFinished: function (event, currentIndex)
    {   
  return forma.valid();
        alert("Submitted!");
    }
});

  var money = 0
  $('.b-booking-main__cat-item').click(function() {
     money = $(this).find('[name="options"]').attr('data-price');
     money = parseInt(money);
     calculateAll();
         totalCount = calculateAll() + parseInt(money);
   $('.b-booking-total__title').text('$ ' + totalCount);
      
  });

    
  $(".b-booking-main input[type='checkbox']").change(function() {
      totalCount = calculateAll() + parseInt(money);
   $('.b-booking-total__title').text('$ ' + totalCount);
  });
    
  function calculateAll(){
    count = 0;
    $(".b-booking-main input[type='checkbox']").each(function(index, checkbox){
        var probb = $(this).attr('data-price');
        console.log(probb);
      if(checkbox.checked)
        count += parseInt(probb);
        
    })
    return count;  
  };




    forma.submit(function () {
        return forma.valid();
        alert('Thanks');
    });

/*Rent*/

/*Vehicle Detail*/



  if ($('.js-slider').length) {
    $('.js-slider').slick();
  }


  if ($('.js-slider-for').length) {
    $('.js-slider-for').slick({
      arrows: false,
      fade: true,
      asNavFor: '.js-slider-nav'
    });
    $('.js-slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.js-slider-for',
      focusOnSelect: true
    });
  }

/*Vehicle Detail*/
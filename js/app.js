$(function() {
   
   //   sidebar js start

   $('#toggleBtn').on('click', function() {
       $('#sidebar').toggleClass('active')
   })

 //   search js start 
 $('#input').hide();

 $('#glass').click( function() {  
     $('#input').fadeToggle();
 })
 
     //  sarch js end

   //   up scroll js start
    $(window).on('scroll' ,function() {
      var scrollSize =  $(window).scrollTop()

   //   scroll top js start

      if(scrollSize > 500) {
       $('#up').slideDown();
      }else{
       $('#up').slideUp();
      }

   //    scroll top js end

   // nav js start
     
   if(scrollSize > 100) {
       $('#header').addClass('active')
   }else{
       $('#header').removeClass('active')
   }
     
   // nav js end

    })
    

    $('#up').on('click',function() {
       $('html,body').animate({
           scrollTop:0,
       },1000)
    })

    //   up scroll js end

    //   slick js start

     $('.banner_slider').slick({
        dots: true,
        dotsClass:'banner_dots',
        prevArrow:'<i class="banner_slidder_arrow fa-solid fa-arrow-left"></i>',
        nextArrow:'<i class="banner_slidder_arrow fa-solid fa-arrow-right"></i>' 

     })

   // slick js end
     
//    counter js start
   $('.counter').counterUp({
      delay: 5,
      time: 2000
   });
// counter js end

   // window preloader js start
$(window).on('load', function() {
   $('#placeholder').fadeOut(3000)
})

// window preloader js end


// filterizer js start
$('.gallery_filter-container').filterizr();

$('#gallery_filterizer li').on('click',function() {
   $(this).addClass('active')
   $(this).siblings().removeClass('active')
})

// filterizer js end

// nav active class remove and add js start
$('#nav_activation li').on('click',function() {
   $(this).addClass('active')
   $(this).siblings().removeClass('active')
})

// nav active class remove and add js end


})



// aos js start
	AOS.init();

// aos js end


// type js start

var typed = new Typed('#type_js', {
   strings: ["Web Team", "Graphics Team" ,"Video Editting Team","Digital marketing Team"],
   typeSpeed: 100,
   backSpeed: 50,
   loop: true,
 });

// type js end


	

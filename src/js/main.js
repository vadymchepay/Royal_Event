  $(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true
    });
      
    var testCarous = $('.testimonals_carousel .testimonals_carousel_container .carousel');
    
      testCarous.carousel({
          fullWidth: true
      });
      
      $('.control_prev').click(function(){
          testCarous.carousel('prev')
      });
      $('.control_next').click(function(){
          testCarous.carousel('next')
      });
  });



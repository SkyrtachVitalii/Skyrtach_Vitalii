$(document).ready(function(){
    $('.skillsSlider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 850,
                settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 664,
                settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 542,
                settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 380,
                settings: {
                slidesToShow: 1,
              }
            }
          ]
    });
  });
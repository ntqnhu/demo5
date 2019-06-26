$(document).ready(function () { 
        $(".owl-carousel").owlCarousel({
            items:5,
            margin: 10,
            loop:true,
            nav:true,
            navText:['<i class="fas fa-angle-double-left"  style="font-size: 40px"></i>','<i class="fas fa-angle-double-right" style="font-size: 40px"></i>'],
            autoplay:true,
            autoplaySpeed: 1000,
            animateIn: 'tada'

        });
});
// $('.navbar ul').fadeIn();
        // $('.navbar ul').toggle();
        // $('.menu').slideToggle();
        // $('.menu').toggleClass('.fadeIn');
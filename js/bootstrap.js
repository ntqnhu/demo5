$(document).ready(function () { 
    $(".owl-carousel").owlCarousel({
        items:3,
        margin: 10,
        loop:true,
        nav:true,
        autoplay:true,
        autoplaySpeed: 1000,
        animateIn: 'tada'

    });
    $('.mot').click(function (e) { 
        e.preventDefault();
        $(this).css('background',' #ffc107');
        $('.hai').css('background',' #f8f9fa');
        $('.ba').css('background',' #f8f9fa');
        $('.bon').css('background',' #f8f9fa');
        $('.nam').css('background',' #f8f9fa');
        $('.test-slider').css('transform','translateX(0px)'); //dung bien cho chuoi ${}
    });
    $('.hai').click(function (e) { 
        e.preventDefault();
        $(this).css('background',' #ffc107');
        $('.mot').css('background',' #f8f9fa');
        $('.ba').css('background',' #f8f9fa');
        $('.bon').css('background',' #f8f9fa');
        $('.nam').css('background',' #f8f9fa');
        $('.test-slider').css('transform','translateX(-800px)'); //dung bien cho chuoi ${}
    });
    $('.ba').click(function (e) { 
        e.preventDefault();
        $(this).css('background',' #ffc107');
        $('.hai').css('background',' #f8f9fa');
        $('.mot').css('background',' #f8f9fa');
        $('.bon').css('background',' #f8f9fa');
        $('.nam').css('background',' #f8f9fa');
        $('.test-slider').css('transform','translateX(-1600px)'); //dung bien cho chuoi ${}
    });
    $('.bon').click(function (e) { 
        e.preventDefault();
        $(this).css('background',' #ffc107');
        $('.hai').css('background',' #f8f9fa');
        $('.ba').css('background',' #f8f9fa');
        $('.mot').css('background',' #f8f9fa');
        $('.nam').css('background',' #f8f9fa');
        $('.test-slider').css('transform','translateX(-2400px)'); //dung bien cho chuoi ${}
    });
    $('.nam').click(function (e) { 
        e.preventDefault();
        $(this).css('background',' #ffc107');
        $('.hai').css('background',' #f8f9fa');
        $('.ba').css('background',' #f8f9fa');
        $('.bon').css('background',' #f8f9fa');
        $('.mot').css('background',' #f8f9fa');
        $('.test-slider').css('transform','translateX(-3200px)'); //dung bien cho chuoi ${}
    });
});
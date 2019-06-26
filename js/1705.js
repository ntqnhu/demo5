$(document).ready(function () {
    $('.nut1').click(function (e) { 
        e.preventDefault();
        $('.hcn').css({
            'transform': 'translateX(0)'
        })
        $('.nuts .nut').removeClass('active');
        $(this).addClass('active');
    });
    $('.nut2').click(function (e) { 
        e.preventDefault();
        $('.hcn').css({
            'transform': 'translateX(-800px)'
        })
        $('.nuts .nut').removeClass('active');
        $(this).addClass('active');
    });
    $('.nut3').click(function (e) { 
        e.preventDefault();
        $('.hcn').css({
            'transform': 'translateX(-1600px)'
        })
        $('.nuts .nut').removeClass('active');
        $(this).addClass('active');
    });
    // $('.toTop').click(function (e) { 
    //     e.preventDefault();
    //     // alert('hello');
    //     // $('html').scrollTop(500);
    //     $('html,body').animate({ //cuon toTop
    //         scrollTop: 0
    //     },1000)
    // });
    // $('.toRed').click(function (e) { 
    //     e.preventDefault();
    //     $('html,body').animate({ 
    //         scrollTop: $('.red').offset().top
    //     },1000)
    // });

});
// $(document).ready(function () {
//     // $('a').hover(function () {
//     //         $('ul').slideDown(500);
            
//     //     }, function () {
//     //        $('ul').slideUp();
//     //     }
//     // );
// });
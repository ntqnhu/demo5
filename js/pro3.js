$(document).ready(function () {
    $('.end .up').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({ //cuon toTop
                    scrollTop: 0
                },1000)
    });
    $('.about').click(function (e) { 
            e.preventDefault();
            $('html,body').animate({ 
                scrollTop: $('.item1').offset().top
            },1000)
        });
});
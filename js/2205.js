$(document).ready(function () {
    $('.chon').click(function (e) { 
        e.preventDefault();
        $(this).fadeOut(1000);
        $('.modal').fadeIn(2000);
    });
    $('.yes').click(function (e) { 
        e.preventDefault();
        $('.chon').fadeIn();
        $('.chon').text('DA CHON YES');
        $('.modal').css('display','none');
    });
    $('.no').click(function (e) { 
        e.preventDefault();
        $('.chon').fadeIn();
        $('.chon').text('DA CHON NO');
        $('.modal').css('display','none');
    });
    $('.container').click(function (e) { 
        e.preventDefault();
        e.stopPropagation();
    });
});
$(document).ready(function () {
    $('.show-modal').click(function (e) { 
        e.preventDefault();
        $('.modal').fadeIn(1000);
        $('.form-login').removeClass('fadeToTop').addClass('fadeFromTop');
    });
    $('.modal').click(function (e) { 
        e.preventDefault();
        $(this).fadeOut(1000);
        $('.form-login').addClass('fadeToTop').removeClass('fadeFromTop');
        
    });
    $('.form-login').click(function (e) { 
        e.preventDefault();
        e.stopPropagation(); //dung cac thuoc tinnh ben ngoai// k bi anh huong boi cac lop ngoai
    });
});
$(document).ready(function () {
    $('.list img').click(function (e) { 
        e.preventDefault();
        var srcsmall = $(this).attr('src'); 
        $('.pic').find('img').attr('src',srcsmall);
        $('.list img').css({
            'border':'none'
        });
        $(this).css({
            'padding': '2px',
            'border':'solid 1px blue'
        });
    });
});
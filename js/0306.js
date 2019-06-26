$(document).ready(function () {
    var topbarHeight= $('#top-bar').outerHeight(); //chieu cao cua top bar+margin
    $('#top-bar a').click(function (e) { 
        e.preventDefault();
        $('#top-bar a').removeClass('active');
        $(this).addClass('active');
       $('html,body').stop().animate({
           scrollTop: $(this.hash).offset().top-topbarHeight//this.hash=id cua no
       },1000,'easeOutBounce')
    });
    $(window).scroll(function () { //cuon thanh xuong web
        var currentPos= $('html,body').scrollTop();//vi tri hien tai cua web
        $.each( $('#top-bar a'), function (indexInArray, valueOfElement) { 
             var eachHref=$(valueOfElement).attr('href');
             var getTop= $(eachHref).offset().top;
             console.log(getTop);

        });
    });
});
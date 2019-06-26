$(document).ready(function () {
    var dem=0;
    var tong=8;
    $('.next').click(function (e) { 
        e.preventDefault();
        if(dem===tong-1){
            dem=0;
        }
        else{
            dem=dem+1;
        }
        $('.slider-item').css('transform',`translateX(-${dem*33.3}%`); //dung bien cho chuoi ${}
    });
    $('.prev').click(function (e) { 
        e.preventDefault();
        if(dem==-1){
            dem=tong-1;
        }
        else{
            dem= dem-1;
        }
        $('.slider-item').css('transform',`translateX(-${dem*33}%`); //dung bien cho chuoi ${}
    });
    var time=3000;
    // var slide=setInterval(showSlide,time);
});
function showSlide() { 
    $('.next').click()
 }

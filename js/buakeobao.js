$(document).ready(function () {
    var result1= 0;
    var result2= 0;
    var result=0;
        $('.bua1').click(function (e) { 
            e.preventDefault();
            $('.keo1').css('opacity','0');
            $('.bao1').css('opacity','0');
            result1=1;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result2==2){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
            else if(result2==3){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
        });
        $('.bao1').click(function (e) { 
            e.preventDefault();
            $('.keo1').css('opacity','0');
            $('.bua1').css('opacity','0');
            result1=2;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result2==1){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
            else if(result2==3){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
        });
        $('.keo1').click(function (e) { 
            e.preventDefault();
            $('.bua1').css('opacity','0');
            $('.bao1').css('opacity','0');
            result1=3;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result2==2){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
            else if(result2==1){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
        });
        $('.bua2').click(function (e) { 
            e.preventDefault();
            $('.keo2').css({
                'opacity': 0,
            });
            $('.bao2').css('opacity','0');
            result2=1;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result1==2){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
            else if(result1==3){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
        });
        $('.bao2').click(function (e) { 
            e.preventDefault();
            $('.keo2').css('opacity','0');
            $('.bua2').css('opacity','0');
            result2=2;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result1==1){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
            else if(result1==3){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
          
        });
        $('.keo2').click(function (e) { 
            e.preventDefault();
            $('.bua2').css('opacity','0');
            $('.bao2').css('opacity','0');
            result2=3;
            if(result1==result2){
                result='Hoa';
                $('.hienthi').text(result);
            }
            else if(result1==1){
                result='PLAYER 1 WIN';
                $('.hienthi').text(result);
            }
            else if(result1==2){
                result='PLAYER 2 WIN';
                $('.hienthi').text(result);
            }
        });
});
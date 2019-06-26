$(document).ready(function () {
    $('.mau1').click(function (e) { 
        e.preventDefault();
        $('.pic').find('i').css('color','#FFC312');
        $('.list h2').css({
            'opacity':'0.4',
            'box-shadow':'none'
        });
        $(this).css({
            'opacity':'1',
            'box-shadow': '5px 5px #6666'
        });
    });
    $('.mau2').click(function (e) { 
        e.preventDefault();
        $('.pic').find('i').css('color','#A3CB38');
        $('.list h2').css({
            'opacity':'0.4',
            'box-shadow':'none'
        });
        $(this).css({
            'opacity':'1',
            'box-shadow': '5px 5px #6666'
        });
    });
    $('.mau3').click(function (e) { 
        e.preventDefault();
        $('.pic').find('i').css('color','#5758BB');
        $('.list h2').css({
            'opacity':'0.4',
            'box-shadow':'none'
        });
        $(this).css({
            'opacity':'1',
            'box-shadow': '5px 5px #6666'
        });
    });
    $('.mau4').click(function (e) { 
        e.preventDefault();
        $('.pic').find('i').css('color','#ED4C67');
        $('.list h2').css({
            'opacity':'0.4',
            'box-shadow':'none'
        });
        $(this).css({
            'opacity':'1',
            'box-shadow': '5px 5px #6666'
        });
    });
    $('.mau5').click(function (e) { 
        e.preventDefault();
        $('.pic').find('i').css('color','#1289A7');
        $('.list h2').css({
            'opacity':'0.4',
            'box-shadow':'none'
        });
        $(this).css({
            'opacity':'1',
            'box-shadow': '5px 5px #6666'
        });
    });
    $('.item').click(function (e) { 
        e.preventDefault();
        $('.size p').css({
            'border':'solid 1px #333'
        });
        $(this).css({
            'border':'solid 2px red'
        });

        
    });
    $('.dathang').click(function (e) { 
        e.preventDefault();
        var sl= $('#so').val();
        var tien= sl*100000;
        $('.tien').text(tien);        
    });
});
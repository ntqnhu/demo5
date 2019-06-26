$(document).ready(function () {
    var chu='hihi';
    $('.tron').click(function (e) { 
        e.preventDefault();
        // $(this).toggleClass('red'); //this=result
    //    $(this).fadeOut(1000);
        $(this).css({
            'background': 'transparent'
        });
        // $(this).find('phan con cua this').css({
    //         opacity:1,
    //         color:yellow
    // }) kiem phan con cua this roi thay doi mau chu,opacity 1

    });
    // var result = 100;
    // $('.result').text(result); //cho result ben html =result ben js
    // $('.add').click(function (e) { 
    //     e.preventDefault();//khong load lai trang
    //     result= result+1;
    //     // console.log(result); //hien ket qua o console
    //     $('.result').text(result);//thay ket qua o class result
    //     $('.result').css('color','red');
    // });
    // $('.sub').click(function (e) { 
    //     e.preventDefault();
    //     result= result-1;
    //     // console.log(result);
    //     $('.result').text(result);
    //     $('.result').css('color','yellow');
    // });
});
//jqdoc: khoi tao
 //toggle click 1 cai thi add click nua thi renmove
 //fadeOut= opacity 0 + display:none :mo roi bien mat

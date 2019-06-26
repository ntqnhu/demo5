$(document).ready(function () {
    var currentIndex=0;
    var totalIndex= $('.slider-img img').length; //co bao nhieu hinh
    // console.log(totalIndex); //hien ra console
    $('.next').click(function (e) { 
        e.preventDefault();
        if(currentIndex==totalIndex-1){
            currentIndex=0;
        }
        else{
            currentIndex= currentIndex+1;
        }
        $('.slider-img').css('transform',`translateX(-${currentIndex*100}%`); //dung bien cho chuoi ${}
    });
    $('.prev').click(function (e) { 
        e.preventDefault();
        if(currentIndex==-1){
            currentIndex=totalIndex-1;
        }
        else{
            currentIndex= currentIndex-1;
        }
        $('.slider-img').css('transform',`translateX(-${currentIndex*100}%`); //dung bien cho chuoi ${}
    });
    //chay 1 ham trong 1 thoi gian
    var time=1000;
    var status=true;
    var slide=setInterval(showSlide,time);
    $('.stop').click(function (e) { 
        e.preventDefault();
       if(status===true){
           $(this).text('Start');
           clearInterval(slide);
           status=false;
       }
       else{
        $(this).text('Stop');
        slide=  setInterval(showSlide,time);
        status=true;
       }
    });
  
});


//ham trong jquery: thuc hien 1 chuc nang nhat dinh
function showSlide() { 
    $('.next').click()
 }


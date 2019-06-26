$(document).ready(function () {
    $('.content .h .item .mot li a').click(function (e) { 
        e.preventDefault();
      var nuoc= $(this).text();
       $('.content .h .item .drop').text(nuoc);
    });
    $('.content .h .item .hai li a').click(function (e) { 
        e.preventDefault();
      var loai= $(this).text();
       $('.content .h .item .loai').text(loai);
    });
    $('.contents .head .nut .item .dropdown li a').click(function (e) { 
        e.preventDefault();
      var loa= $(this).text();
       $('.contents .head .nut .item .country').text(loa);
    });
});
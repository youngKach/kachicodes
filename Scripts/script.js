$(function() {
    //fade in page on load
    $('#content').hide().delay(200).fadeIn(300);  

    var $row = $('.menu-row'); 
    var size = $row.length;  
    var i =0;
    var interval = setInterval(move,300);
    function move() {
        if (i > size-1) {
            clearInterval(interval);
        } else { 
            $row.eq(i).delay(100).animate({width:'27%', opacity:1})
            i++; 
        }
    }

    $('.modal a').magnificPopup({
        type:'image'
    });
}); 
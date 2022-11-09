$(function(){
    $('nav.mobile h3').click(function(){
        var el = $(this).parent().find('ul');
        var i = $('nav.mobile h3');
        if(el.is(':visible') == false){
            el.fadeIn();
            //i.css('color','black');
        }else{
            el.fadeOut();
            //i.css('color','white');
        }
    })
})
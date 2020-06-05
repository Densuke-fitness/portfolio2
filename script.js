$(function(){

$("header a").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    
    $("html, body").animate({
        "scrollTop":position
    },500)
    });



    $('.sub-intro').click(function(){
        var $subIntroText = $(this).find('.sub-intro-text');
        if($subIntroText.hasClass('open')){
            $subIntroText.removeClass('open');
            $subIntroText.slideUp();
            $(this).find('span').text('+');
        }else{
            $subIntroText.addClass('open');
            $subIntroText.slideDown();
            $(this).find('span').text('-');
            
        }
        
    });

});
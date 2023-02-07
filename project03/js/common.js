$(function(){
    $('.all-menu-btn').on('click', function(){
        $('.gnb-mobile').css({
            right : '0px',
        })
    })

    $('.all-menu-close').on('click', function(){
        $('.gnb-mobile').css({
            right : '-100%',
        })
    })

    $('.gnb-mobile .depth1 > a').on('click', function(e){
        e.preventDefault();
        $(".depth2").stop().slideUp();
        $(this).next().stop().slideDown();
    })

    $(window).on("resize", function(){
        winWidth = $(window).width();
        if(1280 < winWidth){
            $(".depth2").stop().slideUp();
            $('.gnb-mobile').css({
                right : '-100%',
            })
        }
    })
})
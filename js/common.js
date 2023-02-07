$(function(){
    AOS.init();
    $(".menu-open").on("click", function(){
        $(".menu-wrap").css({
            display : 'block',
        })
    })
    $(".menu-close").on("click", function(){
        $(".menu-wrap").css({
            display : 'none',
        })
    })
    
    $(function(){
        let $section = $(".scroll-top");
        const $menuLi = $(".menu-list li");
        const $footLi = $(".f-menu li");
        let liIndex = "";
        let footIndex = "";
        let secOffset = "";
        
        $menuLi.on("click", function(){
            liIndex = $(this).index();
            secOffset = $section.eq(liIndex).offset().top;
            $("html, body").animate({
                scrollTop: secOffset,
            },1000)
            $(".menu-wrap").css({
                display : "none",
            })
        });
        $footLi.on("click", function(){
            footIndex = $(this).index();
            secOffset = $section.eq(footIndex).offset().top;
            $("html, body").animate({
                scrollTop: secOffset,
            },1000)
        });
    })
})
$(function(){
    $(".main li, .sub").hover(function(){
        $(".sub").show()
    },function(){
        $(".sub").hide()
    })

    $(".sub>li>ul>li>a").hover(function(){
        var x = $(this).parents(".sub1").index()
        $(".main li").eq(x).find("a").addClass("on")
    },function(){
        $(".main li a").removeClass("on")
    })

    var x = 0
    setInterval(function(){
        $(".m li").eq(x).fadeOut()
        x = (x + 1) % 3
        $(".m li").eq(x).fadeIn()
    },2000)

    $(".no_txt ul li").eq(0).click(function(){
        $(".pop").show()
    })
    $(".close").click(function(){
        $(".pop").hide
    })
})
$(function(){
    $(".main>li, .sub, .bg").hover(function(){
        $(".sub, .bg").show()
    },function(){
        $(".sub, .bg").hide()
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
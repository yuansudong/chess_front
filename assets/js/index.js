$(function () {
    // 右上角点击我们把样式加上去
    // selectMore
    $('.selectMore').click(function () {
        var Index = $('.selectMore').index(this); // 当前索引
        // 三角的旋转
        $('.selectMore .iconfont').removeClass("activeClass");
        $('.selectAd').removeClass("activeClass");
        $('.theSelect').hide();
        $('.selectMore .iconfont').eq(Index).addClass("activeClass");
        $('.selectAd').eq(Index).addClass("activeClass");
        $('.theSelect').eq(Index).show();
        return false;
    });


    $('html,body').click(function () {
        $('.selectMore .iconfont').removeClass("activeClass");
        $('.selectAd').removeClass("activeClass");
        $('.theSelect').hide();
    });




    // 滚动页面
    $('body').scroll(function () {
        var st = $(this).scrollTop();
        if (st > 300) {
            $('.returnTop img').show()
        } else {
            $('.returnTop img').hide()
        }
    });
    // 返回顶部
    $('.returnTop').click(function () {
        $("html,body").animate({"scrollTop": 0}, 300);
    })
});

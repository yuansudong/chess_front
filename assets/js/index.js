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

    $(document).ready(function (e) {
        //myApi1.JSON.lagout(v1,v2,v3)，
        //v1,v2,v3是三个参数，其中
        //v1是最外层的div
        //v2是轮播图的播放速度，以毫秒为单位
        //v3轮播图的最外层高与图片的高度差（控制点在图片外时，与图片的距离）
        var myApi1 = new Myapi();
        myApi1.JSON.lagout($('#banner'), 2000, 0);

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

$(function () {

    $(".navList li").mouseover(function () {
        $(".navList li").removeClass("activeClass");
        $(".navList li").eq($(this).index()).addClass("activeClass");

    });


    // 右上角点击我们把样式加上去
    $('.listContent li .title .selectAd .title').mouseover(function () {
        // 三角的旋转
        $('.listContent li .title .selectAd .title .iconfont').removeClass("activeClass");
        $('.listContent li .title .selectAd .title .iconfont').eq($(this).index()).addClass("activeClass");

        // 框的宽度
        $('.listContent li .title .theSelect').removeClass("activeClass");
        $('.listContent li .title .theSelect').eq($(this).index()).addClass("activeClass");
    })
});

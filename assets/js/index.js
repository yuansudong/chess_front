$(function () {

    $(".navList li").mouseover(function () {
        $(".navList li").removeClass("activeClass");
        $(".navList li").eq($(this).index()).addClass("activeClass");
    });

    // 右上角点击我们把样式加上去
    // selectMore
    $('.selectMore').click(function () {
        var Index = $('.selectMore').index(this); // 当前索引
        // 三角的旋转
        $('.selectMore .iconfont').removeClass("activeClass");
        $('.theSelect').hide();
        $('.selectMore .iconfont').eq(Index).addClass("activeClass");
        $('.theSelect').eq(Index).show();
        return false;
    });
    //  
    $('html,body').click(function () {
        $('.selectMore .iconfont').removeClass("activeClass");
        $('.theSelect').hide();
    });
});

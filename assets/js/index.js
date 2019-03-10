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


    $('html,body').click(function () {
        $('.selectMore .iconfont').removeClass("activeClass");
        $('.theSelect').hide();
    });

    // close关闭当前行。
    $('.history li .icon-close.after').click(function () {
        var Index = $('.icon-close.after').index(this); // 当前索引
        $('.history li').eq(Index).remove();
    });
    // 模糊查询的搜索框
    $('.dimSearch li').click(function () {
        var text = $(this).find('span').text(); // 获取当前的文本值
        // 把文本值放到搜索框上
        $('#search').val(text);
        // 并且关闭框
        $('.dimSearch').hide();
    })
    // 输入框键盘按下事件
    $('#search').bind("input propertychange",function(event){
        if (!searchText()) {
            $('.dimSearch').hide();
        } else {
            $('.dimSearch').show();
        }
    });
    // 输入框是否有值
    function searchText () {
        var realData = $("#search").val(); // 实时数据
        if (!realData || realData === '' || realData === undefined) {
            return false;
        } else {
            return true;
        }
    }

    $("#search").keydown(function(e) {
        if (e.keyCode == 13) {
            console.log($("#search").val());
            return
        }
    });

});

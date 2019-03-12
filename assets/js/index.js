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


    // $('html,body').click(function () {
    //     $('.selectMore .iconfont').removeClass("activeClass");
    //     $('.theSelect').hide();
    // });

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
        // 这里要发送个请求给后端，获取到数据
        // 把这里值放到sessionStorage
        // 并且关闭框
        $('.dimSearch').hide();
    })
    // 输入框键盘按下事件
    $('#search').bind("input propertychange", function (event) {
        if (!searchText()) {
            $('.dimSearch').hide();
        } else {
            $('.dimSearch').show();
        }
    });

    // 输入框是否有值
    function searchText() {
        var realData = $("#search").val(); // 实时数据
        if (!realData || realData === '' || realData === undefined) {
            return false;
        } else {
            return true;
        }
    }

    // 输入框回车事件
    $('#search').on('keypress', function (event) {
        if (event.keyCode === 13) {
            // 发送事件
            FuzzyQuery()
        }
    });

    $('#searchIcont').click(function () {
        FuzzyQuery();
    });

    function FuzzyQuery() {
        var v = $('#search').val();
        SetInputLog(v); // 调用历史记录方法
    }

    $("#search").focus(function () {
        GetInputLog();
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

// 历史记录存放方法
function SetInputLog(v) {
    // 接受每次输入框输入的值，把他放到sessionStorage里
    if (!localStorage.getItem('searchValue')) {
        var data = [];
        data.push({key: v});
        var datas = JSON.stringify(data);
        localStorage.setItem('searchValue', datas);
    } else {
        var data = localStorage.getItem('searchValue');
        var datas = JSON.parse(data);
        datas.push({key: v});
        localStorage.setItem('searchValue', JSON.stringify(datas))
    }
}

// 历史记录获取方法
function GetInputLog() {
    if (localStorage.getItem('searchValue')) {
        $(".history").html("");
        var d = localStorage.getItem('searchValue');
        d = JSON.parse(d);
        // 把数据动态的添加到历史记录下面。
        for (var i = 0; i < d.length; i++) {
            var text = d[i].key;
            var  dom = '<li class="activeClass">'+ '<a href="http://www.baidu.com">'+ text +'</a>' + '<span class="iconfont icon-close after"></span> '+ '</li> '
            $(".history").append(dom)
        }
    }
}

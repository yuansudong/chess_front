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

    /*
    暂时无用
    // close关闭当前行。
    $('.history li .icon-close.after').click(function () {
        var Index = $(this).index(this); // 当前索引
        console.log(Index);
        $('.history li').eq(Index).remove();
    });
    */

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
    if (!v || v === '') return;
    // 接受每次输入框输入的值，把他放到sessionStorage里，还要去重。
    if (!localStorage.getItem('searchValue')) {
        var data = [];
        data.push({key: v});
        var datas = JSON.stringify(data);
        localStorage.setItem('searchValue', datas);
    } else {
        var data = JSON.parse(localStorage.getItem('searchValue'));
        data.push({key: v});
        var obj = {};
        data = data.reduce(function (item, next) {
            obj[next.key] ? '' : obj[next.key] = true && item.push(next);
            return item;
        }, []);
        localStorage.setItem('searchValue', JSON.stringify(data));
    }
}

// 历史记录获取方法
function GetInputLog() {

    if (localStorage.getItem('searchValue')) {
        var d = localStorage.getItem('searchValue');
        d = JSON.parse(d);
        addDom(d);
    }
}

function addDom(d) {
    $('.history').html('');
    // 把数据动态的添加到历史记录下面。
    for (var i = 0; i < d.length; i++) {
        var text = d[i].key;
        var dom = '<li class="activeClass">' + '<a href="http://www.baidu.com">' + text + '</a>' + '<span onclick="clertlog(this)" class="iconfont icon-close after"></span> ' + '</li> '
        $('.history').append(dom)
    }
    if (d.length >0) {
        $('.history').append(
            '<div class="clearLog">' + ' <a onclick="clertAll()" class="log logs" href="javascript:void(0)">清除历史记录</a>' + '</div>'
        )
    }
}


// 清除历史记录本
function clertAll() {
    if (localStorage.getItem('searchValue')) {
        localStorage.removeItem('searchValue');
        // 从新加载
        $('.history').html('');
    }
}

// 清除当前的
function clertlog(e) {
    var text = $(e).prev().text();
    var data = JSON.parse(localStorage.getItem('searchValue'));
    for (var i = 0; i < data.length; i++) {
        if (data[i].key === text) {
            data.splice(i, 1);
            break;
        }
    }
    addDom(data);
    localStorage.setItem('searchValue', JSON.stringify(data));
}

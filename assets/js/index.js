$(function () {
    $(".navList li").mouseover(function () {
        $(".navList li").removeClass("activeClass");
        $(".navList li").eq($(this).index()).addClass("activeClass");
    });




});

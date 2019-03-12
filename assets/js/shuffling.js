// 轮播
$(document).ready(function (e) {
    //myApi1.JSON.lagout(v1,v2,v3)，
    //v1,v2,v3是三个参数，其中
    //v1是最外层的div
    //v2是轮播图的播放速度，以毫秒为单位
    //v3轮播图的最外层高与图片的高度差（控制点在图片外时，与图片的距离）
    var myApi1 = new Myapi();
    myApi1.JSON.lagout($('#banner'), 2000, 0);

});

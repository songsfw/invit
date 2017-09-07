
(function($){
    function  Loadimg(callBack) {
        var imgData = [
            {
                "name":"bg0",
                "src":"./img/bg0.png"
            },
            {
                "name":"p1",
                "src":"./img/p1.jpg"
            },
            {
                "name":"p2",
                "src":"./img/p2.jpg"
            },
            {
                "name":"p3",
                "src":"./img/p3.jpg"
            },
            {
                "name":"p4",
                "src":"./img/p4.jpg"
            },
            {
                "name":"p5",
                "src":"./img/p5.jpg"
            },
            {
                "name":"p6",
                "src":"./img/p6.jpg"
            },
            {
                "name":"p7",
                "src":"./img/p7.jpg"
            },
            {
                "name":"p8",
                "src":"./img/p8.jpg"
            },
            {
                "name":"p9",
                "src":"./img/p9.jpg"
            },
            {
                "name":"p10",
                "src":"./img/p10.jpg"
            },
            {
                "name":"p11",
                "src":"./img/p11.jpg"
            },
            {
                "name":"flower1",
                "src":"./img/flower1.png"
            }
        ];
        var oWidth = $(document).width();
        var oHeight = $(document).height();
        var load = $("#load");
        var loadTxt = $("#loadTxt");
        var proBar=$("#proBar");
        //var imgJson = {};
        load.css({"width": oWidth, "height": oHeight});
        loadTxt.html("0%");
        loading(imgData);
        function loading(imgData) {
            var len = imgData.length;
            var num = 0;
            var tNum = 0;
            for (var i = 0; i < len; i++) {
                var name = imgData[i]["name"];
                var img = new Image();
                img.src = imgData[i]["src"];
                img.onload = function () {
                    num += 1;
                    if (num == len) {
                        loadTxt.html("100%");
                        proBar.css({"width":"100%"});
                        setTimeout(function(){
                            load.fadeOut(300);
                            //callBack(imgJson);
                        },1000);
                    }
                    tNum = parseInt(num / len * 100);
                    loadTxt.html(tNum + "%");
                    proBar.css({"width":tNum+"%"});
                }
                //imgJson[name] = img;
            }
        }
    }
   window.Loadimg=Loadimg;
})(jQuery);
//swiper.animate
function swiperAnimateCache(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate();var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(){for(allBoxes=window.document.documentElement.querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}

//loading

(function($){
    function  Loadimg(callBack) {
        var imgData = [
            {
                "name":"bg0",
                "src":"./img/bg0.png"
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
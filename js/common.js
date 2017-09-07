var APP_ID = 'xXTWVsYcM10WfzQAy7IRg3b6-gzGzoHsz';
var APP_KEY = 'dY5DRVCBRckB4uaUsRNutVRa';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var Message = AV.Object.extend('Message');

function releaseNewProduct() {
  var name = $('#inputTitle').val();
  var phone = $('#inputPrice').val();
  var description = $('#inputDescription').val();
  
  var message = new Message();
  message.set('name', name);
  message.set('phone', phone);
  message.set('description', description);
  //message.set('owner', AV.User.current());
 // message.set('image', avFile);
  message.save().then(function() {
    //window.location.href = "./../products-list/products-list.html";
    console.log("1")

  }, function(error) {
    alert(JSON.stringify(error));
  });
};


$(document).ready(function () {

    //gallery
    var gallery = $(".picwrap div")
    var picView = $(".cd-folding-panel")

    gallery.each(function(i){
        var $this = $(this);
        $this.on("click",function(){
            picView.addClass("is-open")
            var pic = imgData[i].src
            var txt = imgData[i].text
            picView.find(".largePic img").attr("src",pic)
            //picView.find(".text").text(txt)
    
            $(".map").hide()
    
            $(".cd-close").click(function(){
                picView.removeClass("is-open")
                $(".map").show()
            })
        })
    })
    

    //var qingbuLatitude = '38.8203' , qingbuLongitude = '115.5574';

    //var mark = "http://apis.map.qq.com/uri/v1/marker?marker=coord:"+qingbuLatitude+","+ qingbuLongitude +";title:美好的事情即将发生;addr:河北省保定市莲池区焦庄乡青堡村&referer=myapp"

    $(".nav").click(function(){

        picView.addClass("is-open")
        $(".map").show()
        $(".largePic").hide()
        $(".text").hide()

        $(".cd-close").click(function(){
            picView.removeClass("is-open")
            //$(".map").hide()
            $(".largePic").show()
            $(".text").show()
        })
    })



    $(".new-msg-btn").on('click', function(e) {
      e.preventDefault();

      if($("#inputTitle").val() == "" || $("#inputPrice").val() == ""){
          alert("请填写姓名及手机号")
      }else{
        releaseNewProduct();
      }
      
    });

    //全局切换
		
    function fixPagesHeight() {
        var wpH = $('.page-swiper,.page')
        if($("#m_header").length>0){
            wpH.css({
                height: $(window).height()-44,
            })
        }else{
            wpH.css({
                height: $(window).height()
            })
        }
        
    }
    $(window).on('resize', function() {
        fixPagesHeight();
    })
    fixPagesHeight();

    var mySwiper = new Swiper('.page-swiper', {
        noSwiping : true,
        direction: 'vertical',
        speed:500,
        touchRatio : 1.5,
        mousewheelControl: false,
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        watchSlidesProgress: true,
        onInit: function(swiper) {
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onProgress: function(swiper) {
            
        },
        onTransitionEnd: function(swiper, speed) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }

    });

});
/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetail5No = {
        init:function(){
            this.reback();
            this.iconClick();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        iconClick:function(){
            $('.icon').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        }
    }

    oDetail5No.init();


})
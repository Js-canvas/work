/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetailDone = {
        init:function(){
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }

    oDetailDone.init();


})
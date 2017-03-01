/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetail2 = {
        init:function(){
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }

    oDetail2.init();


})
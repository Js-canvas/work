/**
 * Created by mac on 2017/2/27.
 */
$(document).ready(function(){

    var oDetail3 = {
        init:function(){
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }

    oDetail3.init();


})
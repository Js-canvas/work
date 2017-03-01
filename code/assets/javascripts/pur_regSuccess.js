/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oRegSuc = {
        init:function(){
            this.reback();
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        }
    }

    oRegSuc.init();


})
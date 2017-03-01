/**
 * Created by mac on 2017/2/28.
 */
/**
 * Created by mac on 2017/2/23.
 */
$(document).ready(function(){

    var addNewHost = {
        init:function(){
            this.reback();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        }
    }

    addNewHost.init();

})

/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){

    var $reback = $(".reback");

    $reback.on("click",function(){
        window.history.go(-1);
    });
})
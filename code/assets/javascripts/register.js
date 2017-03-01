/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var $reback = $(".reback");

    $reback.on("click",function(){
        window.history.go(-1);
    });
})
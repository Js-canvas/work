/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okBtn");

    $reback.on("click",function(){
        window.history.go(-1);
    });
    $okBtn.on('click',function(){
        var $suggestions = $('#suggestions')[0].value;
        if($suggestions==""){
            alert("请填写您的建议后提交");
        }else{
            // $.ajax({
            //     type: "GET",
            //     url: "test.json",
            //     dataType: "json",
            //     data:{
            //         'userName':'aaa',
            //         'suggsetions':$suggestions
            //     },
            //     success: function(data){
            //     //    判断上传成功
            //         alert("谢谢您的宝贵建议");
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        }
    })
})
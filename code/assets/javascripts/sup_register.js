/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okBtn");
    var $getParNum = $("#getNum");
    var getNumFlag = true;
    var code = "";
    var num = 60;
    var $userName = "";
    var $messageNum = "";

    $reback.on("click",function(){
        window.history.go(-1);
    });

    $getParNum.on("click",function(){

        $userName = $("#phoneNum")[0].value;
        if(getNumFlag) {
            if (/^0?(1)[0-9]{10}$/.test($userName)) {
                // $.ajax({
                //     type: "GET",
                //     data:{userName:$userName},
                //     url: "test.json",
                //     dataType: "json",
                //     success: function(data){
                //         code = data;
                //     },
                //     error:function(err){
                //         alert("网络异常")
                //     }
                // });

                var timer = setInterval(function () {
                    getNumFlag = false;
                    num = num - 1;
                    $getParNum.html(num + "s后再次获取");
                    if (num == 0) {
                        getNumFlag = true;
                        num = 60;
                        $getParNum.html("获取验证码");
                        clearInterval(timer);
                        return
                    }
                }, 1000)
            } else {
                alert("请输入正确手机号！");
                return
            }
        }
    })

    $okBtn.on("click",function(){

        $userName = $("#phoneNum")[0].value;
        $messageNum = $("#messageNum")[0].value;
        var flag = false;

        if($userName==""||$messageNum==""){
            flag = false;
            alert("请将信息填写完整");
            return
        }

        if(/^0?(1)[0-9]{10}$/.test($userName)){
            flag = true;
        }else{
            flag = false;
            alert("请输入正确手机号！");
            return
        }

        if($messageNum==code){
            flag=true;
        }else{
            flag = false;
            alert("验证码输入有误");
            return
        }

        if(flag){
            window.location.href = "sup_perfectInfo.html"
        }else{
            alert("信息填写不正确");
        }
    });
})
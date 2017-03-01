$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okBtn");
    var $getParNum = $("#getNum");
    var getNumFlag = true;
    var code = "";
    var num = 60;
    var $messageNum = "";
    var $userName = ""

    $reback.on("click",function(){
        window.history.go(-1);
    });

    $getParNum.on("click",function(){

        $messageNum = $("#messageNum")[0].value;
        $userName = $("#userName")[0].value;
        if(getNumFlag){
            if(/^0?(1)[0-9]{10}$/.test($userName)){
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

                    var timer = setInterval(function(){
                        getNumFlag=false;
                        num = num - 1 ;
                        $getParNum.html(num+"s后再次获取");
                        if(num==0){
                            getNumFlag=true;
                            num=60;
                            $getParNum.html("获取验证码");
                            clearInterval(timer);
                            return
                        }
                    },1000)

            }else{
                alert("请输入正确手机号！");
                return
            }
        }
    })

    $okBtn.on("click",function(){

        var $newPw = $("#newPw")[0].value;
        var flag = false;
        $messageNum = $("#messageNum")[0].value;
        $userName = $("#userName")[0].value;

        if($userName==""||$newPw==""||$messageNum==""){
            flag = false;
            alert("请将信息填写完整！！");
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

        if(/^[0-9a-zA-Z_]{6,}$/.test($newPw)){
            flag = true;
        }else{
            flag = false;
            alert("密码格式不正确！");
            return
        }

        if(flag){
            // $.ajax({
            //     type: "GET",
            //     data:{userName:$userName,password:$newPw},
            //     url: "test.json",
            //     dataType: "json",
            //     success: function(data){
            //         //判断是否更改成功
            //         window.location.href = "login.html";
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        }else{
            alert("信息填写不正确");
        }
    })






})
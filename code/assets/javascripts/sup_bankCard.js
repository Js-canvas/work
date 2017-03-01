/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $nameQusetion = $('#nameQusetion');
    var $yesBtn = $('.yesBtn');
    var bankName = window.localStorage.getItem('bank')||"";
    var $okBtn = $('.okBtn');
    //获取银行名称
    $('#bank').val(bankName);

    $reback.on("click",function(){
        window.history.go(-1);
    });

    $nameQusetion.on('click',function(){
        $("#opacityDiv").css({'display':'block'});
        $(".askAlert").css({'display':'block'});
    })

    $yesBtn.on('click',function(){
        $("#opacityDiv").css({'display':'none'});
        $(".askAlert").css({'display':'none'});
    })

    $okBtn.on('click',function(){

        var $userName = $("#userName")[0].value;
        var $name = $("#name")[0].value;
        var $bank = $("#bank")[0].value;
        var $bankNum = $("#bankNum")[0].value;
        var $phoneNum = $("#phoneNum")[0].value;
        var flag = false;

        if($userName==""||$name==""||$bank==""||$bankNum==""||$phoneNum==""){
            flag = false;
            alert("请将信息填写完整");
            return
        }

        if(/^\d{19}$/.test($bankNum)){
            flag = true;
        }else{
            flag = false;
            alert("请填写正确的银行卡号");
            return
        }

        if(/^0?(1)[0-9]{10}$/.test($phoneNum)){
            flag = true;
        }else{
            flag = false;
            alert("请输入正确手机号！");
            return
        }

        if(flag){
            //ajax 获取数据

            // $.ajax({
            //     type: "GET",
            //     url: "test.json",
            //     dataType: "json",
            //     success: function(data){
            //         for(var i = 0 ; i < data.length ; i++){
            //             if($userName==data[i]){
            //                 if($password==data[i].password){
            //                     alert("登陆成功");
            //                     //跳到主页
            //                 }else{
            //                     alert("密码不正确");
            //                     return
            //                 }
            //             }else if(i==data.length-1){
            //                 alert("用户不存在")
            //                 return
            //             }
            //         }
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        }
    })
})
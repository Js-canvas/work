/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okbtn");
    var password = "";
    $reback.on("click",function(){
        window.history.go(-1);
    });

    // $.ajax({
    //     type: "GET",
    //     url: "test.json",
    //     dataType: "json",
    //     success: function(data){
    //     //返回是否成功
    //         for(var i = 0 ; i < data.length ; i++){
    //             if($userName==data[i].userName){
    //                 password=data[i].password
    //             }
    //         }
    //     },
    //     error:function(err){
    //         alert("网络异常")
    //     }
    // });

    $okBtn.on('click',function(){

        var $oldPw = $("#oldPw")[0].value;
        var $newPw = $("#newPw")[0].value;
        var $againPw = $("#againPw")[0].value;
        var oFlag = false;

        if($oldPw==""||$newPw==""||$againPw==""){
            oFlag = false;
            alert("请将信息填写完整在提交");
            return
        }

        if($oldPw==password){
            oFlag = true;
        }else{
            oFlag = false;
            alert("原密码不正确");
            return
        }

        if(/^[0-9a-zA-Z_]{6,}$/.test($newPw)){
            oFlag = true;
        }else{
            oFlag = false;
            alert("请填写不少于6位的数字，字母或下划线！");
            return
        }

        if($newPw==$againPw){
            oFlag=true;
        }else{
            oFlag=false;
            alert("两次密码输入不正确")
        }

        if(oFlag){
            //ajax 获取数据

            // $.ajax({
            //     type: "POST",
            //     url: "test.json",
            //     dataType: "json",
            //     data:{
            //         'userName':"",
            //         "password":$newPw
            //     },
            //     success: function(data){
            //     //返回是否成功
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        }
    })
})
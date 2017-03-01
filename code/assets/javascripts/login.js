window.onload = function(){

    var $loginBtn = $(".loginBtn");

    $loginBtn.on("click",function(){

        var $userName = $("#userName")[0].value;
        var $password = $("#password")[0].value;
        var flag = false;

        if($userName==""||$password==""){
            flag = false;
            alert("手机号码或密码不能为空！！");
            return
        }

        if(/^0?(1)[0-9]{10}$/.test($userName)){
            flag = true;
        }else{
            flag = false;
            alert("请输入正确手机号！");
            return
        }

        if(/^[0-9a-zA-Z_]{6,}$/.test($password)){
            flag = true;
        }else{
            flag = false;
            alert("请填写不少于6位的数字，字母或下划线！");
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
    });

}

/**
 * Created by mac on 2017/2/16.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $okBtn = $(".okBtn");
    var flag =true;
    var oProfession = $("#profession");
    var oProvince = $("#province");
    var oCity = $("#city");

    $reback.on("click",function(){
        window.history.go(-1);
    });

    oProfession.on("click",function(){
        var area = new LArea();
        area.init({
            'trigger': '#profession',//触发选择控件的文本框，同时选择完毕后name属性输出到该位置
            'valueTo':'#profession',//选择完毕后id属性输出到该位置
            'keys':{id:'id',name:'name'},//绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
            'type':1,//数据源类型
            'data':LAreaData//数据源
        });
        var LAreaData = [{
            "id": "2",
            "name": "一级",
            "child": [{
                "id": "21",
                "name": "二级1",
                "child": [{
                    "id": "211",
                    "name": "三级1"
                }, {
                    "id": "212",
                    "name": "三级2"
                }, {
                    "id": "213",
                    "name": "三级3"
                }]
            }, {
                "id": "22",
                "name": "二级2"
            }, {
                "id": "23",
                "name": "二级3"
            }]
        }];
    })

    $okBtn.on("click",function(){

        var $userName = $("#phoneNum")[0].value;
        var $password = $("#password")[0].value;
        var $companyName = $("#companyName")[0].value;
        var $name = $("#name")[0].value;
        var $money = $("#money")[0].value;
        var $profession = $("#profession")[0].value;
        var $province = $("#province")[0].value;
        var $city = $("#city")[0].value;

        if($password==""||$companyName==""||$name==""||$money==""||$profession==""||$province==""||$city==""){
            flag = false;
            alert("请将信息填写完整在提交");
            return
        }

        if(/^[0-9a-zA-Z_]{6,}$/.test($password)){
            flag = true;
        }else{
            flag = false;
            alert("请填写不少于6位的数字，字母或下划线");
            return
        }

        if(/^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*}$/.test($name)){
            flag = true;
        }else{
            flag = false;
            alert("请填写正确格式");
            return
        }

        if(flag){
            var userData = {
                userName:$userName,
                password:$password,
                companyName:$companyName,
                name:$name,
                money:$money,
                profession:$profession,
                province:$province,
                city:$city
            }
            // $.ajax({
            //     type: "POST",
            //     url: "test.json",
            //     data:userData,
            //     dataType: "json",
            //     success: function(data){
            //         //判断是否存入数据库
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        }
    })

})
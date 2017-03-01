/**
 * Created by mac on 2017/2/22.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $ul = $('.list');
    var bankName = "";
    var bankList = {
        init:function(){
            this.reBack();
            // this.getData();
            this.chooseBank();
        },
        reBack:function(){
            $reback.on("click",function(){
                //将选择的银行名称保存到本地
                window.localStorage.setItem("bank",bankName);
                window.history.go(-1);
            });
        },
        getData:function(){
            var str = ""
            $.ajax({
                type: "GET",
                url: "test.json",
                dataType: "json",
                success: function(data){
                    for(var i = 0 ; i < data.length ; i++){
                        str+="<li><label for='1'>"+data[i].bankName+"</label><input type='radio' name='bank' class='bankInp' id="+data[i].bankId+">"
                        str+="<i class='icon'><img src='../images/uncheck.png'></i></li>"
                    }
                    $ul.append(str);
                    this.chooseBank().bind(this);
                },
                error:function(err){
                    alert("网络异常")
                }
            });
        },
        chooseBank:function(){
            $('.list').delegate("label",'click',function(){
                var $inp = $('.bankInp');
                for(var i = 0 ;i < $inp.length ;i++){
                    $inp.next().children("img").attr({"src":"../images/uncheck.png"})
                }
                $(this).siblings('i').children('img').attr({'src':'../images/checked.png'})
                bankName = $(this).html();
                console.log(bankName)
            });
        }
    }
    bankList.init();
})
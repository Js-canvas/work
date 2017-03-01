/**
 * Created by mac on 2017/2/23.
 */
$(document).ready(function(){

    var $reback = $(".reback");
    var $icon = $('.icon');
    var $yesBtn = $('.yesBtn');

    var oCredit = {
        init:function(){
            this.getData();
            this.reback();
        },
        getData:function(){
            var str = "<li><span>授信日期</span><span>授信账号</span><span>授信额度</span><span>实得金额<i class='icon'>?</i></span></li>"
            $.ajax({
                type: "GET",
                url: "test.json",
                dataType: "json",
                success: function(data){
                    for(var i = 0 ; i < data.length ; i++){
                        str+="<li><span>"+data[i].date+"</span><span>"+data[i].userName+"</span><span>¥"+data[i].money+"</span><span>¥"+data[i].realMoney+"</span></li>"
                    }
                    $('.list').append(str);
                    this.icon().bind(this);
                    this.yesBtn().bind(this);
                },
                error:function(err){
                    alert("网络异常")
                }
            });
        },
        reback:function(){
            $reback.on("click",function(){
                window.history.go(-1);
            });
        },
        icon:function(){
            $icon.on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })
        },
        yesBtn:function(){
            $yesBtn.on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        }
    }

    oCredit.init();

})

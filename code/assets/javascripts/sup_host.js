/**
 * Created by mac on 2017/2/23.
 */
$(document).ready(function(){

    var oHost ={
        init:function(){
            // this.getData();
            this.hasPass();
            this.noPass();
        },
        getData:function(){
            $.ajax({
                type: "GET",
                url: "test.json",
                dataType: "json",
                success: function(data){
                    $('.has').css({'display':'none'});
                    $('.noHas').css({'display':'none'});
                    for(var i = 0 ; i < data.length ; i++){
                        if($userName==data[i]){
                        //判断权限
                            if(has){
                                $('.has').css({'display':'block'});
                            }else{
                                $('.noHas').css({'display':'block'});
                            }
                        }
                    }
                },
                error:function(err){
                    alert("网络异常")
                }
            });
        },
        //审核通过
        hasPass:function(){

        },
        //审核未通过
        noPass:function(){
            $('.addIconNo').on('click',function(){
                alert("您的账号正在审核中，暂时还无法添加下游采购商！");
            })
        }
    }

    oHost.init();

})

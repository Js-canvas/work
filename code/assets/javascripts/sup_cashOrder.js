/**
 * Created by mac on 2017/2/23.
 */
$(document).ready(function(){

    var oCashOrder = {
        init:function(){
            this.getData();
            this.reback();
            this.iconAlert();
            this.submitData();
            this.invoice();
            this.read();
        },
        getData:function(){
            $('#myStat').circliful({
                animation: 1,
                animationStep: 5,
                foregroundBorderWidth: 5,
                backgroundBorderWidth: 10,
                percent: 10,
                textSize: 28,
                textStyle: 'font-size: 12px;',
                textColor: '#666',
                multiPercentage: 1,
                backgroundColor: '#ff9900',
                foregroundColor: '#fff',
                percentages: [10, 20, 30]
            });


            // var $userName = window.localStorage.getItem('user');
            // var nowMoney = "";
            // var overMoney = "";
            // var oPercent = 0;
            // $.ajax({
            //     type: "GET",
            //     url: "test.json",
            //     dataType: "json",
            //     success: function(data){
            //         for(var i = 0 ; i < data.length ; i++){
            //             if($userName==data[i]){
            //                 nowMoney = data[i].nowMoney;
            //                 overMoney = data[i].overMoney;
            //             }
            //         }
            //         $(".overMoney").html(overMoney);
            //         $(".sumAmount").html(nowMoney);
            //         oPercent = Math.round(overMoney/nowMoney)*100;
            //         $('#myStat').circliful({
            //             animation: 1,
            //             animationStep: 5,
            //             foregroundBorderWidth: 5,
            //             backgroundBorderWidth: 10,
            //             percent: oPercent,
            //             textSize: 28,
            //             textStyle: 'font-size: 12px;',
            //             textColor: '#666',
            //             multiPercentage: 1,
            //             backgroundColor: '#ff9900',
            //             foregroundColor: '#fff',
            //             percentages: [10, 20, 30]
            //         });
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        },
        invoice:function(){
            var invoiceFlag = true;
            $('.invoiceFlag').on('click',function(){
                if(invoiceFlag){
                    $('.invoice img').css({"display":"block"})
                    invoiceFlag = false
                }else{
                    $('.invoice img').css({"display":"none"})
                    invoiceFlag = true
                }
            })
        },
        read:function(){
            var read = false;
            $('.readFlag').on('click',function(){
                if(read){
                    $('.readImg img').css({"display":"block"})
                    read = false
                }else{
                    $('.readImg img').css({"display":"none"})
                    read = true
                }
            })
        },
        iconAlert:function(){
            // $('.icon').on('click',function(){
            //     $("#opacityDiv").css({'display':'block'});
            //     $(".askAlert").css({'display':'block'});
            // })
            //
            // $(".yesBtn").on('click',function(){
            //     $("#opacityDiv").css({'display':'none'});
            //     $(".askAlert").css({'display':'none'});
            // })
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
        submitData:function(){
            // var flag = true
            // if(flag){
            //     $('.okBtn').on('click',function(){
            //         flag = false;
            //         var $inpValue = $("#advAmount").val();
            //         if(/^[1-9][0-9]*$/.test($inpValue)){
            //             $.ajax({
            //                 type: "GET",
            //                 url: "test.json",
            //                 data:{
            //                     'userName':"aaaa",
            //                     'upMoney':$inpValue
            //                 },
            //                 dataType: "json",
            //                 success: function(data){
            //                     //    返回是否成功
            //                 },
            //                 error:function(err){
            //                     alert("网络异常")
            //                 }
            //             });
            //             alert("您有一个申请正在审核中，在此期间请勿再次提交申请");
            //         }else{
            //             alert("请输入正确的金额");
            //         };
            //     })
            // }else{
            //     alert("您的申请提额请求已经提交,请耐心等待平台审核后反馈，在此期间请勿重复提交申请");
            // }
        }
    }
    oCashOrder.init();
})
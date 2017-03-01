/**
 * Created by mac on 2017/2/23.
 */
$(document).ready(function(){

    var addHost = {
        init:function(){
            new PCAS("province","city","");
            this.reback();
            this.postData();
            this.myAlert();
        },
        reback:function(){
            $('.reback').on("click",function(){
                window.history.go(-1);
            });
        },
        postData:function(){
            $(".okBtn").on('click',function(){
                var $hostName = $('#hostName').val();
                var $creditMoney = $('#creditMoney').val();
                var $province = $('#province').val();
                var $city = $('#city').val();
                var $hostPhone = $("#hostPhone").val();
                var oFlag = true;

                if($hostName==""||$creditMoney==""||$province==""||$city==""||$hostPhone==""){
                    oFlag=false;
                    alert('请将信息填写完整')
                }else{
                    oFlag=true;
                }

                if(/^[1][0-9]{10}$/.test($hostPhone)){
                    oFlag=true;
                    this.hasUser($hostPhone);
                }else{
                    oFlag=false;
                    alert('请填写正确手机号')
                }

                if(/^[1-9][0-9]*$/.test($creditMoney)){
                    oFlag=true;
                }else{
                    oFlag=false;
                }


                if(oFlag){
                    // $.ajax({
                    //     type: "GET",
                    //     url: "test.json",
                    //     dataType: "json",
                    //     data:{
                    //         'userName':'asas',
                    //         'hostName':$hostName,
                    //         'overdownMoney':$creditMoney,
                    //         'hostProvince':$province,
                    //         'hostCity':$city
                    //     },
                    //     success: function(data){
                    //         for(var i = 0 ; i < data.length ; i++){
                    //             window.location.href="sup_share.html"
                    //         }
                    //     },
                    //     error:function(err){
                    //         alert("网络异常")
                    //     }
                    // });
                }
            }.bind(this));

        },
        hasUser:function(hostPhone){
            console.log(hostPhone)
            // $.ajax({
            //     type: "GET",
            //     url: "test.json",
            //     dataType: "json",
            //     data:{
            //         'hostName':hostPhone
            //     },
            //     success: function(data){
            //         for(var i = 0 ; i < data.length ; i++){
            //             if(data[i].hostName==hostPhone){
            //                 window.location.href="sup_addNewHost.html"
            //             }else{
            //                 window.location.href="sup_share.html"
            //             }
            //         }
            //     },
            //     error:function(err){
            //         alert("网络异常")
            //     }
            // });
        },
        myAlert:function(){
            $('.icon').on('click',function(){
                $("#opacityDiv").css({'display':'block'});
                $(".askAlert").css({'display':'block'});
            })

            $(".yesBtn").on('click',function(){
                $("#opacityDiv").css({'display':'none'});
                $(".askAlert").css({'display':'none'});
            })
        }
    }

    addHost.init();

})

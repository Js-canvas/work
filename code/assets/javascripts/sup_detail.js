/**
 * Created by mac on 2017/2/24.
 */
$(document).ready(function(){

    var oDetail = {
        init:function(){
            this.reback();
            this.clickAgree();
            this.iconFlag = true;
        },
        reback:function(){
            $(".reback").on("click",function(){
                window.history.go(-1);
            });
        },
    //    点击对勾
        clickAgree:function(){

            $('.txt3').on('click',function(){
                if(this.iconFlag){
                    $('.dgIcon img').css({'display':'inline-block'})
                    this.iconFlag=false;
                }else{
                    $('.dgIcon img').css({'display':'none'})
                    this.iconFlag=true;
                }
            })
        }
    }

    oDetail.init();


})
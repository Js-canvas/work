/**
 * Created by mac on 2017/2/28.
 */
$(document).ready(function(){
    var purOrder = {
        init:function(){
            this.reback()
            this.clickAgree();
            this.addPro();
            this.delete();
            this.iconFlag = true;
        },
        reback:function(){
            $('.reback').on("click",function(){
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
        },
    //    点击添加商品
        addPro:function(){
            $('.addBtn').on('click',function(){
                $('.list input').addClass('cloneInp');
                $('.deleteBox').css({'display':'block'});
                $('.borLine1').css({'display':'block'});
                var newList = $('.list').first().clone();
                newList.find('input').val("")
                $('#wrap').append(newList);
                $('.list').eq(0).find('.borLine1').css({'display':'none'});
            })
        },
    //    删除按钮
        delete:function(){
            $('#wrap').delegate('.deleteBox','click',function(e){
                var oLength = $('.list').length;
                if(oLength==2){
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                    $('.list input').removeClass('cloneInp');
                    $('.deleteBox').css({'display':'none'})
                    $('.list').eq(0).find('.borLine1').css({'display':'none'});
                }else{
                    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
                    $('.list').eq(0).find('.borLine1').css({'display':'none'});
                }
            })
        }
    }
    purOrder.init();
})
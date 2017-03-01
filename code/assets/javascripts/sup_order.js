/**
 * Created by mac on 2017/2/21.
 */
$(document).ready(function(){
    $('.orderDetail').on('click',function(e){
        var e = e||window.event;
        switch(e.target.className){
            case "agree":
                console.log("弹出alert");
                break;
            case "disagree":
                console.log("不同意");
                break;
            case "getMoney":
                console.log("提款页面");
                break;
            default:
                console.log("跳转到详情");
                break;
        }
    })
})
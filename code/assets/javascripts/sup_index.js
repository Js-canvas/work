/**
 * Created by mac on 2017/2/20.
 */
$(document).ready(function(){
    var winWidth = window.innerWidth;
    var canHeight = $('.tabPic').height();

    $("#dayOrderChart").css({'width':winWidth,'height':canHeight});
    $("#dayHostChart").css({'width':winWidth,'height':canHeight});
    $("#dayNumChart").css({'width':winWidth,'height':canHeight});
    $("#monthOrderChart").css({'width':winWidth,'height':canHeight});
    $("#monthHostChart").css({'width':winWidth,'height':canHeight});
    $("#monthNumChart").css({'width':winWidth,'height':canHeight});
    $("#yearOrderChart").css({'width':winWidth,'height':canHeight});
    $("#yearHostChart").css({'width':winWidth,'height':canHeight});
    $("#yearNumChart").css({'width':winWidth,'height':canHeight});
    // 基于准备好的dom，初始化echarts实例
    //日表
    var dayOrderChart = echarts.init(document.getElementById('dayOrderChart'));
    var dayHostChart = echarts.init(document.getElementById('dayHostChart'));
    var dayNumChart = echarts.init(document.getElementById('dayNumChart'));
    //月表
    var monthOrderChart = echarts.init(document.getElementById('monthOrderChart'));
    var monthHostChart = echarts.init(document.getElementById('monthHostChart'));
    var monthNumChart = echarts.init(document.getElementById('monthNumChart'));
    //年表
    var yearOrderChart = echarts.init(document.getElementById('yearOrderChart'));
    var yearHostChart = echarts.init(document.getElementById('yearHostChart'));
    var yearNumChart = echarts.init(document.getElementById('yearNumChart'));
    // 指定图表的配置项和数据
    //day order chart
    //日配置
    doc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:70,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 11000, 15000, 13000, 12000, 13000, 10000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    dhc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 2, 4, 2, 6, 12, 8],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    dnc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 5, 6, 7, 4, 7, 8],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    //月配置
    moc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7']
        },
        grid:{
            x:70,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 101000, 105000, 130000, 120200, 130600, 107000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    mhc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[30, 42, 34, 42, 36, 42, 38],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    mnc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['1','2','3','4','5','6','7']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[20, 15, 26, 37, 24, 37, 38],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    //年配置
    yoc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2011','2012','2013','2014','2015','2016','2017']
        },
        grid:{
            x:70,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 1001000, 1500000, 1030000, 1020000, 1030000, 1000000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    yhc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2011','2012','2013','2014','2015','2016','2017']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[70, 82, 74, 82, 76, 82, 88],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    ync = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2011','2012','2013','2014','2015','2016','2017']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[180, 175, 186, 187, 194, 207, 188],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    dayOrderChart.setOption(doc,true);
    dayHostChart.setOption(dhc,true);
    dayNumChart.setOption(dnc,true);

    monthOrderChart.setOption(moc,true);
    monthHostChart.setOption(mhc,true);
    monthNumChart.setOption(mnc,true);

    yearOrderChart.setOption(yoc,true);
    yearHostChart.setOption(yhc,true);
    yearNumChart.setOption(ync,true);

    var oList = {
        init:function(){
            this.getData();
        },
        getData:function(){
            this.createLi("2016.1.21","¥20000","30%",1)
            this.createLi("2016.1.22","¥30000","40%",2)
            this.createLi("2016.1.23","¥24000","40%",1)
            this.createLi("2016.1.24","¥45000","50%",2)
            this.createLi("2016.1.25","¥46000","50%",1)
        },
        //根据传入数据的不同判断应该加载什么样式
        createLi:function(date,num,percent,state){
            var dataClass='dataUp';
            var imgUrl = '../images/dataUp.PNG';
            switch(state){
                case 1:
                    dataClass='dataUp';
                    imgUrl = '../images/dataUp.PNG';
                    break;
                case 2:
                    dataClass='dataDown';
                    imgUrl = '../images/dataDown.PNG';
                    break;
                default:
                    alert("数据加载失败");
                    break;
            }
            $(".listUl").append("<li class='borBom'><span>"+date+"</span><span>"+num+"</span><span class='"+dataClass+"'><b>"+percent+"</b><img src='"+imgUrl+"'></span></li>");
        }
    }
    oList.init();
})
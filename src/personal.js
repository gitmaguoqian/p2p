$(function(){
    //    定义标杆
      var open=false;

    //对按钮添加点击事件
    $('.slide-btn').on('click',function(){
        //  alert(1);
        if(!open){
                //修改按钮图标方向
                $(this).html('<span class="iconfont icon-shuangjiantouzuo"></span>');
                // 为父容器添加激活样式
                $('.el-parent').addClass('active');

                // 修改标志
                open=true;
        }else{
              //修改按钮图标方向
              $(this).html('<span class="iconfont icon-shuangjiantouyou"></span>');
              // 为父容器添加激活样式
              $('.el-parent').removeClass('active');

              open=false;
        }
        
     
        

    })

     //右边选项卡脚本
     $(function(){
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            // 获取已激活选项卡的名称
            var activeTab = $(e.target).text(); 
            // 获取先前选项卡的名称
            var previousTab = $(e.relatedTarget).text(); 
            $(".active-tab span").html(activeTab);
            $(".previous-tab span").html(previousTab);
            });
     });
     



     //饼图报表
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
     option = {
        title : {
            text: '宜信个人收益',
            subtext: '详细数据',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['余额宝','借出盈利','借款利息','投资项目','其他']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'余额宝'},
                    {value:310, name:'借出盈利'},
                    {value:234, name:'借款利息'},
                    {value:135, name:'投资项目'},
                    {value:1548, name:'其他'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})
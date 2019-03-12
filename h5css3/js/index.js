$(function () {
    // 初始化fullpage组件
    // 1.设置每一个屏幕的背景颜色
    // 2.设置屏幕内容对齐方式  默认垂直居中->改成顶部对齐
    // 3.设置指示器 点容器
    $('#cart_container').fullpage({
        // 配置参数
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            /*index 序号 1开始  当前屏的序号*/
            console.log(index);
            $('.section').eq(index-1).addClass('now');
        },
        onLeave:function(index,nextIndex,direction){
            if(index == 2 && nextIndex== 3){
                $('.bg02').addClass('leaved');
            }
        }
    });
});


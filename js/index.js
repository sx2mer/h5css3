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
        afterLoad: function (link, index) {
            /*index 序号 1开始  当前屏的序号*/
            console.log(index);
            $('.section').eq(index - 1).addClass('now');
        },
        afterRender: function () {
            $('.more').click(function () {
                $.fn.fullpage.moveSectionDown();
            });
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $('.bg02').addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                $('.bg03').addClass('leaved');
            } else if (index == 5 && nextIndex == 6) {
                $('.bg05').addClass('leaved');
            }
        },
    });
    $('.bg04 .cart').on('transitionend',function(){
        // console.log("动画结束");
        $('.bg04').addClass('show');
    });
    $('.bg05 .mouse').on('transitionend',function(){
        // console.log("动画结束");
        $('.bg05').addClass('sofaReady');
    });
    $('.bg05 .sofa').on('transitionend',function(){
        // console.log("动画结束");
        $('.bg05').addClass('orderReady');
    });
    $('.bg05 .sofa').on('animationstart',function(){
        console.log("动画结束");
        $('.bg06').addClass('sofaReady');
    });
    /**
     * 判断各浏览器transitionend事件名称
    */
    /* From Modernizr */
    // function whichTransitionEvent() {
    //     var t;
    //     var el = document.createElement('fakeelement');
    //     var transitions = {
    //         'transition': 'transitionend',
    //         'OTransition': 'oTransitionEnd',
    //         'MozTransition': 'transitionend',
    //         'WebkitTransition': 'webkitTransitionEnd'
    //     }
    //     for (t in transitions) {
    //         if (el.style[t] !== undefined) {
    //             return transitions[t];
    //         }
    //     }
    // }
    // console.log('####'+whichTransitionEvent());        // returns "webkitTransitionEvent" in Chrome
    // console.log('@@@@' + typeof whichTransitionEvent); // returns "string"
});


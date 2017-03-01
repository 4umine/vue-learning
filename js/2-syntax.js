/**
 * 插值
 */
var vm = new Vue({
    el: '#app1',
    data: {
        /**
         * 1. 插值：文本
         *    数据绑定最常用的就是“mustache”语法（双大括号）的文本插值
         *    v-once指令只能一次性的插值
         *   只要message值改变，html中{{message}}也会跟着改变
         */
        message: 'imant is handsome',
        
        /**
         * 2. 插值：纯html
         * 双大括号只能解析为纯文本，为了输出真正的html，需要使用v-html指令
         */
        rawHtml: '<font color="red">haha</font>',

        /**
         * 3. 插值：使用JavaScript表达式
         */
        count: 2
    }
});

/**
 * 指令（Directives）
 * 是指带有v前缀的特殊属性
 * 指令属性的值期望是单一的JavaScript表达式（除了v-for）
 * 指令的职责就是当其表达式的值改变时相应的更新dom
 */
var vm2 = new Vue({
    el: '#app2',
    data: {
        seen: false,

        /**
         * 1. 参数
         * 一些指令能接收一些参数，在指令后面以冒号指明
         */
        url: 'http://www.baidu.com',
        tip: function() {
            alert('you clicked me');
        },

        message: 'fuck you!',
        message2: 'wtf!'

        /**
         * 2. 修饰符（没看懂）
         */
    },

    /**
     * 3. 过滤器
     * Vue允许你自定义过滤器，用来处理文本的格式化
     * 过滤器应该添加在 mustache插值的尾部，由“管道符”指示
     */
    filters: {
        // 过滤器总接受表达式的值作为第一个参数
        filter1: function(value) {
            console.log(value);// fuck you!
            if (!value) {
                return 'this is null';
            }
            return value + ' filter1';
        },

        // 过滤器可以接受多个参数
        filter2: function(val1, val2) {
            console.log(val1);// message2的值，即‘wtf’
            console.log(val2);// 页面传入的第一个参数，即‘hello’
        }

    }

    /**
     * 4. 缩写
     * v-bind缩写形式 :
     * v-on缩写形式 @
     * 具体看2-syntax.html
     */
});

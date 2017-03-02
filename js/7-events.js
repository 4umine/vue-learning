/**
 * 事件处理器
 * 可以用v-on指令监听dom事件从而触发js代码
 */

/**
 * 1. 监听事件
 */
var vm = new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        show: function() {
            alert('listen to me');
        },
        say: function(message, event) {
            alert('say ' + message);
            if (event) {
                event.preventDefault();
            }
        }
    }
});

/**
 * 2. 事件修饰符，那件修饰符
 */
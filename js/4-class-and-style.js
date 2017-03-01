/**
 * 绑定html class
 */
var vm = new Vue({
    el: '#app',
    data: {
        // 对象形式值为boolean
        isActive: true,
        hasError: null,

        // 使用数组，值为字符串
        show: 'showClass',
        size: 'sizeClass',

        /**
         * 1. 对象语法
         */
        classObject: {
            active: true
        }

    },

    // 使用计算属性
    computed: {
        classObject2: function() {
            return {
                active: this.isActive && !this.hasError,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});


/**
 * 绑定内联样式
 */
var vm2 = new Vue({
    el: '#app2',
    data: {
        /**
         * 1. 对象语法
         */
        textColor: 'red',
        fontSize: 30,

        // 样式对象
        styleObject: {
            color: 'blue',
            fontSize: 30,
        },

        // 对象数组
        textColor: {
            color: 'yellow'
        },
        size: {
            fontSize: 20
        }
    },

    // 使用计算属性
    computed: {
        styleObject2: function() {
            return {
                color: 'green',
                fontSize: 15
            }
        }
    }
});
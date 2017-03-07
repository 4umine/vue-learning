/**
 * 组件
 * 组件可以扩展html代码，封装可重用的代码
 */

/**
 * 1. 注册组件，必须在vue实例初始化之前注册
 */
Vue.component('my-component', {
    template: '<div>hello custom component</div>'
});

var vm = new Vue({
    el: '#app'
});

/**
 * 2. 局部注册组件
 */
var child = {
    template: '<div>partial component</div>'
}

var vm2 = new Vue({
    el: '#app2',
    components: {
        // 将只能在app2实例的作用域可用
        'partial-component': child
    }
});

/**
 * 3. DOM模板解析
 * 将组件挂载到已存在的节点上，会受到html的一些限制
 * 变通的方案是使用特殊的 is 属性
 */
var vm3 = new Vue({
    el: '#app3',
    components: {
        'my-row': {
            template: '<tr><td>this is a table</td></tr>'
        }
    }
});

/**
 * 4. data必须是个函数
 */
var data = {counter: 0};

var vm4 = new Vue({
    el: '#app4',
    components: {
        'simple-counter': {
            template: '<button v-on:click="counter += 1">{{ counter }}</button>',
            data: function() {
                // 这样多个组件共享data
                // return data;

                // 这样每个组件拥有单独的data
                return {
                    counter: 0
                }
            }
        }
    }
});

/**
 * 5. 使用props传递数据，这里将Vue实例看做父组件
 */
Vue.component('child', {
    props: {
        myMessage: {
            type: String,
            required: true,
            default: 'hello'
        }
    },
    template: '<span>{{ myMessage }}</span>'
});

// 使用template id，见页面
Vue.component('child2', {
    template: '#template-component'
});

var vm5 = new Vue({
    el: '#app5',
    data: {
        parentMsg: 'hey, girl'
    }
});

Vue.component('child-component', {
    props: ['childMsg'],
    template: '#template6'
});
new Vue({
    el: '#app6',
    data: {
        parentMsg6: 'im your father'
    }
});
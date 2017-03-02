/**
 * v-for指令根据一组数组的选项列表进行渲染
 * v-for指令以item in（in可以换成of） items的语法
 * items是数据源，item是数组元素迭代的别名
 */

/**
 * 1. 基本用法
 */
var vm = new Vue({
    el: '#app',
    data: {
        parentMessage: 'parent',
        items: [
            {message: 'good'},
            {message: 'morning'}
        ]
    }
});

/**
 * 2. 迭代元素有对父作用于属性完全的访问权限
 * 还支持一个可选的第二个参数作为当前项的索引
 */
var vm2 = new Vue({
    el: '#app2',
    data: {
        parentMessage: 'parent',
        items: [
            {message: 'good'},
            {message: 'morning'}
        ]
    }
});

/**
 * 3. <template>块循环
 */
var vm3 = new Vue({
    el: '#app3',
    data: {
        items: [
            {message: 'good'},
            {message: 'morning'}
        ]
    }
});

/**
 * 4. 迭代对象的属性
 * 接受三个参数(val, key, index)
 */
var vm4 = new Vue({
    el: '#app4',
    data: {
        object: {
            name: 'imant',
            sex: 'femal',
            age: 25
        }
    }
});

/**
 * 5. 循环整数
 */
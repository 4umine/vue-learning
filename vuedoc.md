# Vue实例

1. Vue大写

2. 实例化Vue时，需要传入一个选项对象：Vue({...})

    数据、模板、挂载元素、方法、生命周期钩子

3. 扩展Vue构造器（所有的组件都是被扩展的Vue实例）

    var myComponent = Vue.extend({
        //扩展选项
    })
    
    var vm = new myComponent()
/**
 * vue实例
 * 
 * 1. Vue 大写
 * 
 * 2. 实例化Vue时，需要传入一个选项对象：Vue({...});
 *      数据
 *      模板
 *      挂载元素
 *      方法
 *      生命周期钩子
 *      ...
 * 
 * 3. 扩展Vue构造器（所有的组件都是被扩展的Vue实例）
 *      var myComponent = Vue.extend({
 *          //扩展选项
 *      })
 *      var vm = new myComponent()
 */
var vm = new Vue({
    el: '#app1',
    data: {
        message: 'imant is great'
    }
});

/**
 * 4. 每个Vue实例都会代理其data对象里的所有属性，这些代理是响应式的
 */
var data = {a: 1};
var vm2 = new Vue({
    data: data
});

console.log(vm2.a === data.a);//true

//设置属性也会影响到原始数据
vm2.a = 2;
console.log(data.a);//2

// 反之亦然
data.a = 3;
console.log(vm2.a);

/**
 * 5. Vue实例除了data属性，还提供了其它一些有用的属性与方法
 *    这些属性和方法都有前缀 $，以便和代理的data属性区分
 */
var data3 = {a: 3};
var vm3 = new Vue({
    el: '#demo',
    data: data,
});

console.log(vm3.$el === document.getElementById('demo'));//true

// $watch是一个实例方法
vm3.$watch('a', function(newVal, oldVal) {
    // 将在vm3.a改变后调用
    console.log('oldVal: ' + oldVal + ', newVal: ' + newVal);
});
vm3.a = 33;// oldVal: 3, newVal: 33

/**
 * 6. 每个Vue实例在创建之前都要经过一系列的初始化过程
 *    数据观测（data observer）
 *    编译模板
 *    挂载实例到dom，有数据变化时更新dom
 *    
 * 在这个过程中，实例也会调用一些生命周期钩子，如 created、mounted、updated、destroyed
 * 钩子的this指向调用它的Vue实例
 */
var vm6 = new Vue({
    data: {
        a: 1
    },
    // created这个钩子在vm6实例被创建后被调用
    created: function() {
        // this指向vm6实例
        console.log('a=' + this.a);
    }
});
/**
 * 计算属性
 * 在模板{{  }}中绑定表达式是非常方便的，这只是对比较简单的操作
 * 在模板中放入复杂的逻辑会让模板过重且难以维护
 */
var counter = 0;
var vm = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    },

    /**
     * 1. 基础例子
     * 这里可以直接vm.reversedMessage
     */
    computed: {
        // a computed getter
        reversedMessage: function() {
            counter++;
            return this.message.split('').reverse().join('');
        }
    },

    /**
     * 2. 计算属性 vs methods
     * methods也可以实现上述效果，但是计算属性有缓存
     * 如果不希望有缓存，请使用methods
     */
    methods: {
        reverseMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }

});
console.log(vm.message);// hello
console.log(vm.reversedMessage);// olleh

// 测试计算属性的缓存
console.log(counter);
function testComputedCache () {
    console.log(vm.reversedMessage);
    console.log('counter=' + counter);
}

/**
 * 3. watch vs 计算属性
 * watch可以观察Vue实例上的数据变动
 */
var vm2 = new Vue({
    el: '#app2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
});
function changeName() {
    vm2.firstName = 'li';
}

// 上面的watch的写法用计算属性来写更方便
var vm3 = new Vue({
    el: '#app3',
    data: {
        firstName: 'liu',
        lastName: 'bingguang'
    },
    computed: {
        fullName: function() {
            return this.firstName + this.lastName;
        }
    }
});

/**
 * 4. 计算setter
 * 计算属性默认只有getter，不过有时候也需要一个setter
 */
var vm4 = new Vue({
    el: '#app4',
    data: {
        firstName: 'liu',
        lastName: 'bingguang'
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newVal) {
                var names = newVal.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    }
});
function changeName2() {
    // 运行vm4.fullName，将调用setter，vm4.firstName和vm4.lastName也将更新
    vm4.fullName = 'li lei';
    console.log(vm4.firstName);// li
    console.log(vm4.lastName);// lei
}